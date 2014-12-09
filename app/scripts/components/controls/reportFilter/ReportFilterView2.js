define([
		'backbone',
		'hbs!components/controls/reportFilter/ReportFilterView_tmpl',
		//'Controls/ToggleButton/ToggleButtonView'
	],
	function (Backbone, ReportFilterViewTmpl, ToggleButton) {
		'use strict';

		/* Return a ItemView class definition */
		/** @namespace Backbone.Marionette.ItemView */
		return Backbone.Marionette.ItemView.extend({

			initialize: function (options, sessionModel) {
				console.log('initialize a Report filter  ItemView');

				this.sessionModel = sessionModel;
				this.listenTo(this.model, 'change', this.reRender);
				this.listenTo(this.sessionModel, 'change:dimensions_custom', this.reRender);
				this.hasCompetitors = options.hasCompetitors === undefined ? true : options.hasCompetitors;
				this.setupControls();

				this.globalFiltersCopy = _.cloneDeep(this.sessionModel.get('filters')) || {};
				this.localFilters = [];
			},

			className: 'width-100-percent',

			template: ReportFilterViewTmpl,

			events: {
				'click .filters button': 'toggleUI',
				'click #applyFilters': 'applyFiltersUI',
				'click #cancelFilters': 'cancelFiltersUI',
				'change #allOnlineStores': 'allOnlineStoresUI',
				'change #allCategories': 'allCategoriesUI',
				'change #allBrands': 'allBrandsUI',
				'change #allManufacturers': 'allManufacturersUI',
				'change #allDimension1': 'allDimension1UI',
				'change #allDimension2': 'allDimension2UI',
				'change #allDimension3': 'allDimension3UI',
				'change #allDimension4': 'allDimension4UI',
				'change #allDimension5': 'allDimension5UI',
				'change #allDimension6': 'allDimension6UI',
				'change #allDimension7': 'allDimension7UI',
				'change #allDimension8': 'allDimension8UI',
				'change #brandCheckboxes input[type=checkbox]': 'changeBrandCheckbox',
				'change #categoryCheckboxes input[type=checkbox]': 'changeCategoryCheckbox',
				'change #onlineStoreCheckboxes input[type=checkbox]': 'changeOnlineStoreCheckbox',
				'change #manufacturerCheckboxes input[type=checkbox]': 'changeManufacturerCheckbox',
				'change #dimension1Checkboxes input[type=checkbox]': 'changeDimensionCheckbox',
				'change #dimension2Checkboxes input[type=checkbox]': 'changeDimensionCheckbox',
				'change #dimension3Checkboxes input[type=checkbox]': 'changeDimensionCheckbox',
				'change #dimension4Checkboxes input[type=checkbox]': 'changeDimensionCheckbox',
				'change #dimension5Checkboxes input[type=checkbox]': 'changeDimensionCheckbox',
				'change #dimension6Checkboxes input[type=checkbox]': 'changeDimensionCheckbox',
				'change #dimension7Checkboxes input[type=checkbox]': 'changeDimensionCheckbox',
				'change #dimension8Checkboxes input[type=checkbox]': 'changeDimensionCheckbox'
			},

			/**
			 *
			 *   Override sessionModel filter settings for an instance of filter picker
			 *   These overrides will only persist for the report where it is specified
			 *   Can only modify filter options that already exist
			 *
			 **/
			overrideGroupOptions: function (groupName, options) {

				this.localFilters.push(groupName);

				var $groupOptions = this.$('.' + groupName);

				if ($groupOptions) {

					_.each(options, function (option) {

						this._selectElement($groupOptions, 'input[type=checkbox][data-name=<%= name %>]', option.value)().attr('checked', option.checked);

					}, this);

					this._updateSessionFilterModel(false);

				}

			},

			//naming of filters tends to not be standardised so we need to cover a few possibilities
			_selectElement: function ($container, selectorTemplate, name) {

				var count = 0;
				var $el;
				var nameStr = '';
				var template = _.template(selectorTemplate);

				var strategies = [
					function (str) {
						return str;
					},
					function (str) {
						return _.str.capitalize(str.toLowerCase());
					},
					function (str) {
						return str.toUpperCase();
					},
					function (str) {
						return str.toLowerCase();
					}
				];

				return function selectEl() {

					var areStrategiesExhausted = count > (strategies.length - 1);
					var wasElementFound;

					if (!areStrategiesExhausted) {
						nameStr = strategies[count](name);
					}

					$el = $container.find(template({name: nameStr}));
					wasElementFound = $el.length > 0;

					if (wasElementFound || areStrategiesExhausted) {
						return $el;
					} else {
						count++;
						return selectEl();
					}

				};

			},

			/**
			 *
			 *   In some instances it may be desirable to disable picker options for a specific dimension
			 *   groupName (e.g., 'dimension8')
			 *
			 **/
			disableGroup: function (groupName) {

				this.$('.' + groupName + ' input').prop('disabled', true);

			},

			/**
			 *   Gets called in onClose()
			 *   Only relevant if a localFilter has been set via overrideGroupOptions()
			 *   This only undoes local filter settings for those filter groups (i.e., dimensions)
			 *   that were overriden via overrideGroupOptions(). Other local filter settings that differ
			 *   from the global filter settings will still get applied to the global settings
			 *
			 **/
			resetSessionFilters: function () {

				var localSessionFilters = this.sessionModel.get('filters') || {};

				_.each(_.uniq(this.localFilters), function (filterGroupName) {

					var oldSettings = this.globalFiltersCopy[filterGroupName];
					var currentSettings = localSessionFilters[filterGroupName];
					if (currentSettings) {
						localSessionFilters[filterGroupName] = oldSettings ? oldSettings.concat() : [];
					}

				}, this);

				if (this.localFilters.length > 0) {
					//NOTE: deliberately avoiding change event here to avoid an extra fetch()
					this.sessionModel.attributes.filters = localSessionFilters;
					this.sessionModel.save(); //save normally gets called on the change event
				}

				this.localFilters = [];

			},

			changeBrandCheckbox: function (e) {
				var checkValues = this.getCheckboxValuesIn($('#brandCheckboxes'));
				var checkValue = _.every(checkValues, function (item) {
					return item.checked;
				});

				this.checkAll($('#allBrands'), checkValue);
			},

			changeCategoryCheckbox: function (e) {
				var checkValues = this.getCheckboxValuesIn($('#categoryCheckboxes'));
				var checkValue = _.every(checkValues, function (item) {
					return item.checked;
				});

				this.checkAll($('#allCategories'), checkValue);
			},

			changeOnlineStoreCheckbox: function (e) {
				var checkValues = this.getCheckboxValuesIn($('#onlineStoreCheckboxes'));
				var checkValue = _.every(checkValues, function (item) {
					return item.checked;
				});

				this.checkAll($('#allOnlineStores'), checkValue);
			},

			changeManufacturerCheckbox: function (e) {
				var checkValues = this.getCheckboxValuesIn($('#manufacturerCheckboxes'));
				var checkValue = _.every(checkValues, function (item) {
					return item.checked;
				});

				var anyCompetitorsChecked = _.any(checkValues, function (item) {
					return item.data.iscompetitor && item.checked;
				});

				//todo: should really be subscribed to changes in this.model.attributes.properties.showCompetitorData
				//this.model really needs to be Backbone.DeepModel
				if (this.toggleButton) {
					this.model.attributes.properties.showCompetitorData = anyCompetitorsChecked;
					this.toggleButton.model.set('isOn', this.model.attributes.properties.showCompetitorData);
				}

				this.checkAll($('#allManufacturers'), checkValue);
			},

			changeDimensionCheckbox: function (e) {
				var dimensionValue = $(e.target).data('dimension');
				var checkboxElements = $('#dimension' + dimensionValue + 'Checkboxes');
				var checkValues = this.getCheckboxValuesIn(checkboxElements);
				var checkValue = _.every(checkValues, function (item) {
					return item.checked;
				});

				this.checkAll($('#allDimension' + dimensionValue), checkValue);
			},

			toggleUI: function (e) {
				if (e) {
					e.preventDefault();
				}
				this.$el.find('.filters_selection').slideToggle();
			},

			applyFiltersUI: function (e) {

				if (e) {
					e.preventDefault();
				}

				this._updateSessionFilterModel(true);

				var self = this;
				this.$el.find('.filters_selection').slideUp({
					complete: function () {
						self.render();
					}
				});
			},

			_updateSessionFilterModel: function (changeTrigger) {

				var checkboxData = {
					onlineStores: this.getCheckboxValuesIn($('#onlineStoreCheckboxes')),
					categories: this.getCheckboxValuesIn($('#categoryCheckboxes')),
					brands: this.getCheckboxValuesIn($('#brandCheckboxes')),
					manufacturers: this.getCheckboxValuesIn($('#manufacturerCheckboxes')),
					dimension1: this.getCheckboxValuesIn($('#dimension1Checkboxes')),
					dimension2: this.getCheckboxValuesIn($('#dimension2Checkboxes')),
					dimension3: this.getCheckboxValuesIn($('#dimension3Checkboxes')),
					dimension4: this.getCheckboxValuesIn($('#dimension4Checkboxes')),
					dimension5: this.getCheckboxValuesIn($('#dimension5Checkboxes')),
					dimension6: this.getCheckboxValuesIn($('#dimension6Checkboxes')),
					dimension7: this.getCheckboxValuesIn($('#dimension7Checkboxes')),
					dimension8: this.getCheckboxValuesIn($('#dimension8Checkboxes'))
				};

				var selectedDimensions = this.getCheckedIntersection(checkboxData);

				// any competitor check boxes checked?
				var self = this;
				_.each(checkboxData.manufacturers, function (item) {
					if (item.checked && item.data.iscompetitor === 1) {
						self.model.attributes.properties.showCompetitorData = true;
					}
				});

				// other non standard filter properties
				selectedDimensions.properties = {
					showCompetitorData: this.model.attributes.properties.showCompetitorData
				};

				if (changeTrigger !== false) {
					this.sessionModel.set('filters', selectedDimensions);
				} else {
					this.sessionModel.attributes.filters = selectedDimensions;
					this.sessionModel.save();
				}
			},

			getCheckedIntersection: function (data) {
				var filterData = this.model.attributes;
				var intersection = {};

				_.each(filterData, function (items, dimension) {

					var itemNames = _.pluck(items, 'name');

					intersection[dimension] = _(data[dimension])
						.chain()
						.filter(function (item) {
							return item.checked;
						})
						.pluck('name')
						.intersection(itemNames)
						.value();

					if (intersection[dimension].length === itemNames.length && dimension != 'manufacturers') {
						intersection[dimension] = [];
					}
				});

				return intersection;
			},

			getCheckboxValuesIn: function ($selector) {
				var values = [];

				$selector.find('input[type=checkbox]').each(function () {
					values.push({
						name: String($(this).data('name')),
						checked: this.checked,
						data: $(this).data()
					});
				});

				return values;
			},

			cancelFiltersUI: function (e) {
				e.preventDefault();
				this.$el.find('.filters_selection').slideUp();
			},

			/**
			 * Sets the checked attribute to the given value for each element in the given jQuery selection
			 * @param  {Object} $selection A jQuery selection
			 * @param  {Boolean} value
			 */
			checkAll: function ($selection, value) {
				$selection.each(function () {
					$(this).prop('checked', value);
				});
			},

			allBrandsUI: function (e) {
				e.preventDefault();
				this.checkAll($('#brandCheckboxes').find('input[type=checkbox]'), e.target.checked);
			},

			allCategoriesUI: function (e) {
				e.preventDefault();
				this.checkAll($('#categoryCheckboxes input[type=checkbox]'), e.target.checked);
			},

			allOnlineStoresUI: function (e) {
				e.preventDefault();
				this.checkAll($('#onlineStoreCheckboxes input[type=checkbox]'), e.target.checked);
			},

			allManufacturersUI: function (e) {
				e.preventDefault();
				this.checkAll($('#manufacturerCheckboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension1UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension1Checkboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension2UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension2Checkboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension3UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension3Checkboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension4UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension4Checkboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension5UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension5Checkboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension6UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension6Checkboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension7UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension7Checkboxes input[type=checkbox]'), e.target.checked);
			},

			allDimension8UI: function (e) {
				e.preventDefault();
				this.checkAll($('#dimension8Checkboxes input[type=checkbox]'), e.target.checked);
			},

			changeShowCompetitorData: function (id, isOn) {

				if (!isOn) {
					// uncheck all apart from not competitors:
					_.each($('#manufacturerCheckboxes input[type=checkbox]'), function (checkbox) {

						var data = $(checkbox).data();
						var $checkbox = $(checkbox);

						if (data.iscompetitor == 1) {
							$checkbox.prop('checked', false);
						} else {
							$checkbox.prop('checked', true);
						}
					});

				} else {
					// check all:
					_.each($('#manufacturerCheckboxes input[type=checkbox]'), function (checkbox) {
						$(checkbox).prop('checked', true);
					});
				}

				this.model.attributes.properties.showCompetitorData = isOn; //TODO: use Backbone.DeepModel here?
				this.toggleButton.model.set('isOn', this.model.attributes.properties.showCompetitorData);

				this.applyFiltersUI();
			},

			_getTemplateModel: function () {
				var model = _.clone(this.model.attributes);
				var selected = this.sessionModel.get('filters');
				var displayText = '';

				_.each(model, function (items, dimension) {

					if (!items) {
						items = [];
					}

					if (dimension !== 'properties') {

						// the number of selected items for a dimension
						var dimensionLength = (selected[dimension] && selected[dimension].length) || 0;

						var checkedNames = [];

						if (dimension === 'manufacturers' && selected.properties) {
							selected.properties.showCompetitorData = false;
						}

						_.each(items, function (item) {
							var contains = _.contains(
								_.map(selected[dimension], function (val) {
									return ('' + val).toLowerCase();
								}), item && item.name ? item.name.toLowerCase() : ''
							);

							if (dimension === 'manufacturers') {

								// if an competitor check is selected select the showComprtitor check
								item.checked = ((dimensionLength === 0 && !contains && item.is_competitor === 0) || contains);

								if (item.checked && item.is_competitor == 1 && selected.properties) {
									selected.properties.showCompetitorData = true;
								}

							} else {

								item.checked = dimensionLength === 0 || dimensionLength === items.length || contains;

							}

							if (item.checked) {
								checkedNames.push(item.name);
							}
						});

						if (checkedNames.length <= 3) {
							displayText = checkedNames.join(', ');
						} else {
							displayText = checkedNames.length + ' Selected';
						}

						if (dimension === 'manufacturers') {
							model[dimension + 'All'] = (dimensionLength === items.length);
						} else {
							model[dimension + 'All'] = (dimensionLength === 0 || dimensionLength === items.length);
						}

						model[dimension + 'CheckedNames'] = displayText;
						model[dimension + 'All'] = (dimensionLength === 0 || dimensionLength === items.length);
					}
				});

				var dimensionsCustom = this.sessionModel.get('dimensions_custom');

				if (dimensionsCustom) {
					_.each(dimensionsCustom, function (dimension) {
						model[dimension.id + 'Name'] = dimension.name;
					});
				}

				if (selected && selected.properties) {
					model.properties.showCompetitorData = selected.properties.showCompetitorData;
				}

				if (model.properties) {
					model.properties.hasCompetitors = this.hasCompetitors;
				}

				return model;
			},

			setupControls: function () {
				//note: properties.hasCompetitors will be undefined initially since this method is called in initialize()
				this.toggleButton = new ToggleButton({
					id: 'competitorToggle',
					model: new Backbone.Model({
						label: 'Competitors',
						isOn: this.model.attributes.properties && this.model.attributes.properties.showCompetitorData || false
					})
				});
				//this.listenTo(this.toggleButton, 'toggle:mainBtn', this.toggleUI);
				this.listenTo(this.toggleButton, 'toggle:secondaryBtn', this.changeShowCompetitorData);
			},

			renderControls: function (templateModel) {

				if (!this.toggleButton) {
					this.setupControls();
				}
				this.toggleButton.model.set('isOn', templateModel.properties.showCompetitorData);
				this.$('#competitorToggleContainer').html(this.toggleButton.render().el);
				this.toggleButton.delegateEvents();
			},

			removeControls: function () {

				if (this.toggleButton) {
					this.toggleButton.close();
					this.toggleButton = null;
				}

			},

			render: function () {

				var templateModel = this._getTemplateModel();

				if (!_.isEmpty(templateModel)) {
					this.$el.html(this.template(templateModel));

					this.renderControls(templateModel);

				}

			},

			onClose: function () {
				this.resetSessionFilters();
				this.removeControls();

			}
		});

	});
