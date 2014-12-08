define([
        'backbone',
        'components/controls/navigationMenu/NavigationMenuView',
        'components/controls/navigationMenu/NavigationMenuCollection',
        'utilities/ClavisUtils'
    ],
    /**
     * Class that builds and manage the lifecycle of the navigation menu component
     * @param Backbone
     * @param NavigationMenuControl
     * @param MenuCollection
     * @param Util
     * @returns {Function}
     */
    function (Backbone, NavigationMenuControl, MenuCollection, Util) {
        'use strict';

        /* Return a component definition */
        return function (sessionModel, links, customReports) {

            var component = {

                initialize: function (sessionModel, links, customReports) {

                    this.sessionModel = sessionModel;
                    this.links = links;
                    this.customReports = customReports;

                    this._views = {};
                    this._collections = {};
                },

                /**
                 * Create a navigation menu component and render the view in the el container
                 * @param id id of the DOM container
                 */
                closeComponent: function (id) {

                    if(this.isAdded(id)) {
                        this._views[id].close();
                        delete this._views[id];
                        delete this._collections[id];
                    }
                },

                /**
                 * Return true is a view id is managed by the component builder
                 * @param id
                 * @returns {boolean}
                 */
                isAdded: function (id) {

                    return  this.getView(id) !== undefined;
                },

                /**
                 * Return a view referenced by id
                 * @param id
                 * @returns {*}
                 */
                getView: function (id) {

                    return  this._views[id];
                },

                /**
                 * Return a collection referenced by id
                 * @param id
                 * @returns {*}
                 */
                getCollection: function (id) {
                    return this._collections[id];
                },

                /**
                 * Refresh the items in the menu container
                 * @param id
                 */
                resetComponent : function(id) {

                    var collection = this.getCollection(id);

                    if(collection) {
                        collection.reset();
                        this.addItemsToCollection(Util.isGlobal(), collection);
                    }
                },

                /**
                 * Create a navigation menu component and render the view in the el container
                 * @param el container id, where the view will be rendered
                 * @returns {view}
                 */
                buildComponent: function (el) {

                    // create the navigation control
                    this._views[el] = new NavigationMenuControl({
                        collection: this.buildMenuCollection(el),
                        hidden: Util.isGlobal()
                    });
                    this._views[el].render();
                    //we don't want to remove the left side navigation container when the menu view is closed. http://stackoverflow.com/questions/14083724/backbone-remove-view-deletes-the-el
                    $(this._views[el].el).appendTo(el);

                    return this._views[el];
                },

                /**
                 * Method that return the report name set up in the configuration or
                 * the default text
                 * @param reportName
                 * @param defaultText
                 * @returns {*}
                 */
                renderReportName : function(reportName, defaultText){

                    var reportConfig = Util.getReportConfig(reportName);

                    var reportNameObj = _.find(reportConfig, function(item) {
                        return item.name.toLowerCase() === 'name';
                    });

                    return reportNameObj ? reportNameObj.value : defaultText;
                },

                /** Add items to the menu container base on session parameter and the customer settings
                 * @param isGlobal
                 * @param collection
                 */
                addItemsToCollection: function (isGlobal, collection) {

                    if (isGlobal) {

                        collection.add([{
                            href: '#global',
                            label: 'nav.global_dashboard',
                            icon: 'glyphicon-globe',
                            id: 'global_menu_item'
                        }, {
                            href: '#global/' + sessionModel.get('countryName'),
                            label: 'nav.global_country_dashboard',
                            iconImg: '/images/flags/' + sessionModel.get('countryName') + '.svg',
                            id: 'global_country_menu_item'
                        }]);
                    }

                    if (Util.allowReport('quarterly scorecard')) {
                        collection.add([{
                            href: '#quarterly_scorecard',
                            label: 'nav.quarterly_scorecard',
                            icon: 'glyphicon-calendar',
                            id: 'quarterly_scorecard_menu_item'
                        }]);
                    }
                    if (Util.allowReport('executive dashboard')) {
                        collection.add([{
                            href: '#executive',
                            label: 'nav.executive_dashboard',
                            icon: 'glyphicon-home',
                            id: 'executive_menu_item'
                        }]);
                    }
                    if (Util.allowReport('operations dashboard')) {
                        collection.add([{
                            href: '#operations',
                            label: 'nav.operations_dashboard',
                            icon: 'glyphicon-wrench',
                            id: 'operations_menu_item'
                        }]);
                    }
                    if (Util.allowReport('retailer comparison')) {
                        collection.add([{
                            href: '#retailer_comparison',
                            label: 'nav.retailer_comparison',
                            icon: 'glyphicon-resize-horizontal',
                            id: 'retailer_comparison_menu_item'
                        }]);
                    }
                    if (Util.allowReport('name')) {
                        collection.add([{
                            href: '#name_report',
                            label: this.renderReportName('name', 'nav.name_report'),
                            icon: 'glyphicon-pencil',
                            id: 'name_report_menu_item'
                        }]);
                    }
                    if (Util.allowReport('price') || Util.allowReport('availability') || Util.allowReport('portfolio')) {
                        var presenceManagement = {
                            href: '#presence_management_submenu',
                            label: 'nav.presence_management',
                            icon: 'glyphicon-list',
                            id: 'presence_management_menu_item',
                            accordionId: 'presence_management_submenu',
                            accordion: true,
                            arrowClass: 'glyphicon-chevron-right',
                            subItems: []
                        };

                        if (Util.allowReport('availability')) {
                            presenceManagement.subItems.push({
                                href: '#portfolio_availability_submenu',
                                label: this.renderReportName('availability','nav.portfolio_availability'),
                                id: 'portfolio_availability_menu_item',
                                accordionId: 'portfolio_availability_submenu',
                                accordion: true,
                                arrowClass: 'glyphicon-chevron-right',
                                subItems: [{
                                    href: '#presence_management/availability/management',
                                    label: 'nav.summary',
                                    id: 'portfolio_availability_summary_menu_item'
                                }, {
                                    href: '#presence_management/availability/detailed',
                                    label: 'nav.products_not_listed',
                                    id: 'portfolio_availability_products_not_listed_menu_item'
                                }]
                            });
                        }

                        if (Util.allowReport('portfolio')) {

                            presenceManagement.subItems.push({
                                href: '#presence_management/portfolio',
                                label: this.renderReportName('portfolio', 'nav.portfolio_analysis'),
                                id: 'portfolio_menu_item'
                            });
                        }

                        if (Util.allowReport('price')) {
                            presenceManagement.subItems.push({
                                href: '#price_submenu',
                                label: this.renderReportName('price','nav.price'),
                                id: 'price_menu_item',
                                accordionId: 'price_submenu',
                                accordion: true,
                                arrowClass: 'glyphicon-chevron-right',
                                subItems: [{
                                    href: '#presence_management/price/management',
                                    label: 'nav.summary',
                                    id: 'price_summary_menu_item'
                                }, {
                                    href: '#presence_management/price/exceptions',
                                    label: 'nav.exceptions',
                                    id: 'price_exceptions_menu_item'
                                }]
                            });
                        }
                        collection.add([presenceManagement]);
                    }

                    if ((Util.allowReport('search') || Util.allowReport('ratings and reviews') || Util.allowReport('menu')) && !isGlobal) {

                        var performanceSubmenu = {
                            href: '#performance_insights_submenu',
                            label: 'nav.performance_insights',
                            icon: 'glyphicon-tasks',
                            id: 'performance_insights_menu_item',
                            accordionId: 'performance_insights_submenu',
                            accordion: true,
                            arrowClass: 'glyphicon-chevron-right',
                            subItems: []
                        };

                        collection.add([performanceSubmenu]);

                        if (Util.allowReport('ratings and reviews')) {
                            performanceSubmenu.subItems.push({
                                href: '#ratings_and_reviews_submenu',
                                label: this.renderReportName('ratings and reviews','nav.ratings_and_reviews'),
                                id: 'ratings_and_reviews_menu_item',
                                accordionId: 'ratings_and_reviews_submenu',
                                accordion: true,
                                arrowClass: 'glyphicon-chevron-right',
                                subItems: [{
                                    href: '#performance_insights/ratings_and_reviews/management',
                                    label: 'nav.summary',
                                    id: 'ratings_and_reviews_management_menu_item'
                                }, {
                                    href: '#performance_insights/ratings_and_reviews/detailed',
                                    label: 'nav.details',
                                    id: 'ratings_and_reviews_detailed_menu_item'
                                }]
                            });
                        }
                        if (Util.allowReport('search')) {
                            performanceSubmenu.subItems.push({
                                href: '#search_ranking_submenu',
                                label: this.renderReportName('search','nav.search'),
                                id: 'search_ranking_menu_item',
                                accordionId: 'search_ranking_submenu',
                                accordion: true,
                                arrowClass: 'glyphicon-chevron-right',
                                subItems: [{
                                    href: '#performance_insights/search_ranking/management',
                                    label: 'nav.search_scores',
                                    id: 'search_ranking_management_menu_item'
                                }, {
                                    href: '#performance_insights/search_ranking/share_of_search',
                                    label: 'nav.share_of_search',
                                    id: 'search_ranking_detailed_menu_item'
                                }]
                            });
                        }
                        if (Util.allowReport('menu')) {
                            performanceSubmenu.subItems.push({
                                href: '#performance_insights/menu',
                                label: this.renderReportName('menu','nav.menu_paths'),
                                id: 'menu_paths_menu_item'
                            });
                        }
                    }

                    if (Util.allowReport('geo')) {
                        collection.add([{
                            href: '#geo/mapDashboard',
                            label: this.renderReportName('geo','nav.geo'),
                            icon: 'glyphicon-map-marker',
                            id: 'geo_menu_item'
                        }]);
                    }

                    if (Util.allowReport('integrity')) {

                        var integritySubmenu = {
                            href: '#integrity_submenu',
                            label: this.renderReportName('integrity','nav.content_integrity_reports'),
                            icon: 'glyphicon-list',
                            id: 'integrity_menu_item',
                            accordionId: 'integrity_submenu',
                            accordion: true,
                            arrowClass: 'glyphicon-chevron-right',
                            subItems: [{
                                href: '#integrity/performance_summary',
                                label: 'nav.performance_summary',
                                id: 'performance_summary_menu_item'
                            }, {
                                href: '#integrity/performance_detail',
                                label: 'nav.performance_detail',
                                id: 'performance_detail_menu_item'
                            }, {
                                href: '#integrity/defect_summary',
                                label: 'nav.defect_summary',
                                id: 'defect_summary_menu_item'
                            }, {
                                href: '#integrity/defect_detail',
                                label: 'nav.defect_detail',
                                id: 'defect_detail_menu_item'
                            }]
                        };

                        collection.add([integritySubmenu]);
                    }

                    if (Util.allowReport('imaging')) {
                        collection.add([{
                            href: '#imaging',
                            label: this.renderReportName('imaging','nav.imaging'),
                            icon: 'glyphicon-picture',
                            id: 'imaging_menu_item'
                        }]);
                    }

                    if (Util.allowReport('ratings and reviews')) {
                        collection.add([{
                            href: '#performance_insights/ratings_and_reviews',
                            label: this.renderReportName('ratings and reviews','nav.ratings_and_reviews'),
                            icon: 'glyphicon-pencil',
                            id: 'ratings_and_reviews_menu_item'
                        }]);
                    }

                    if (Util.allowReport('search') && isGlobal) {
                        collection.add([{
                            href: '#search_report',
                            label: this.renderReportName('search','nav.search'),
                            icon: 'glyphicon-search',
                            id: 'global_country_search_menu_item'
                        }]);
                    }

                    if (Util.allowReport('enhanced content') && isGlobal) {
                        collection.add([{
                            href: '#enhanced_content',
                            label: this.renderReportName('enhanced content','nav.enhanced_content'),
                            icon: 'fa fa-file-video-o',
                            id: 'global_country_enhanced_content_menu_item'
                        }]);
                    }

                    //custom_reports
                    _.each(this.customReports, function(item) {
                        collection.add([{
                            href: '#custom/'+item.name,
                            label: item.name,
                            icon: 'glyphicon-stats',
                            id: item.name.toLowerCase()+'_menu_item'
                        }]);
                    },this);

                    ////links
                    _.each(this.links, function(item) {
                        collection.add([{
                            href: item.url,
                            label: item.text,
                            target: '_blank',
                            icon: 'glyphicon-link'
                        }]);
                    },this);
                },

                /**
                 * Method that create a collection that represents the items to be displayed
                 * in the navigation menu view
                 * @param id collection identifier
                 * @returns {collection}
                 */
                buildMenuCollection: function (id) {

                    this._collections[id] = new MenuCollection();

                    this.addItemsToCollection(Util.isGlobal(), this._collections[id]);

                    return this._collections[id];
                }
            };

            component.initialize(sessionModel, links, customReports);

            return component;
        };
    });
