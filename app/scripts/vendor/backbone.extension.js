define([
        'backbone',
        'backbone.marionette'
    ],
    function (Backbone, Marionette) {
        'use strict';
        //noinspection JSUnusedGlobalSymbols
        /**
         * Fix am issue with templateHelpers on marionette view and handlebars template. Basically with handlebars the templateHelpers
         * is NOT set with the serializeData as stated in marionette doc: https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.view.md#accessing-data-within-the-helpers
         *
         * see:
         *     http://mikefowler.me/2014/02/20/template-helpers-handlebars-backbone-marionette/
         *     https://github.com/asciidisco/Backbone.Marionette.Handlebars/issues/6
         *
         */
        Marionette.ItemView.prototype.mixinTemplateHelpers = function (target) {
            var self = this;
            var templateHelpers = Marionette.getOption(self, 'templateHelpers');
            var result = {};

            target = target || {};

            if (_.isFunction(templateHelpers)) {
                templateHelpers = templateHelpers.call(self);
            }

            // This _.each block is what we're adding
            _.each(templateHelpers, function (helper, index) {
                if (_.isFunction(helper)) {
                    result[index] = helper.call(self);
                } else {
                    result[index] = helper;
                }
            });

            return _.extend(target, result);
        };

        Backbone.Model.prototype.params = {};
        Backbone.Collection.prototype.params = {};

        /**
         * Add post remove view handler
         * http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
         * http://stackoverflow.com/questions/9513194/backbone-js-fire-event-on-remove
         */
        Backbone.View.prototype.close = function () {

            this.remove();
            this.unbind();
            if (this.onClose) {
                this.onClose();
            }
        };

        var setParam = function (params) {
            //don't allow to set to undefined

            if (params) {
                this.params = params;
            }
        };

        /**
         * setting params to be used for building the url
         * @param params
         */
        Backbone.Model.prototype.setParams = setParam;

        /**
         * setting params to be used for building the url
         * @param params
         */
        Backbone.Collection.prototype.setParams = setParam;


        /**
         * enable the spinner functionality in order to automatically show a spinner
         * when the view model/collection is fetching data
         *
         * @param targetSelector the target where to center the spinner; optional: if not passed the view.el is used
         */
        Backbone.View.prototype.enableSpinner = function(targetSelector){
            this._targetSelector = targetSelector;

            _.each(['model', 'collection'], function (attr) {
                var target = this[attr];
                if (target) {
                    this.listenTo(target, 'request', this._showSpinner, this);
                    this.listenTo(target, 'loading', this._showSpinner, this);
                    this.listenTo(target, 'sync', this._hideSpinner, this);
                    this.listenTo(target, 'loaded', this._hideSpinner, this);
                    this.listenTo(target, 'error', this._hideSpinner, this);
                }
            }, this);
        };

        /**
         * show manually the spinner centering it in the target configured by the view
         *
         * @param targetSelector the target where to center the spinner (optional). If not specified, the one
         * stored as class property and passed with enableSpinner function is used.
         */
        Backbone.View.prototype.showSpinner = function(targetSelector){

            this._targetSelector = targetSelector;
            this._showSpinner();
        };

        /**
         * hide the spinner
         */
        Backbone.View.prototype.hideSpinner = function() {
            this._hideSpinner();
        };

        /**
         * show the spinner centering it in the target configured by the view
         *
         * @private
         */
        Backbone.View.prototype._showSpinner = function(){
            console.log('_showSpinner: view.cid: ' + this.cid );
            var self = this;
            this._spinnerTimeoutActive = true;

            require(['spin'], function(Spinner) { // <= here!

                //the following configuration can be verified at http://fgnass.github.io/spin.js/
                var opts = {
                    lines: 11, // The number of lines to draw
                    length: 0, // The length of each line
                    width: 6, // The line thickness
                    radius: 9, // The radius of the inner circle
                    corners: 1, // Corner roundness (0..1)
                    rotate: 0, // The rotation offset
                    direction: 1, // 1: clockwise, -1: counterclockwise
                    color: $('.nav').css('color'), // #rgb or #rrggbb or array of colors
                    speed: 1, // Rounds per second
                    trail: 60, // Afterglow percentage
                    shadow: false, // Whether to render a shadow
                    hwaccel: false, // Whether to use hardware acceleration
                    className: 'spinner', // The CSS class to assign to the spinner
                    zIndex: 1039, // The z-index (defaults to 2000000000)
                    top: '50%', // Top position relative to parent
                    left: '50%' // Left position relative to parent
                };

                //set a timeout to prevent the spinner to show when the response arrives quickly.
                setTimeout(function(){

                    console.log('_showSpinner: view.cid: ' + self.cid + ', (after timeout) _spinnerTimeoutActive: '+ self._spinnerTimeoutActive);

                    if(self._spinnerTimeoutActive){
                        var $el;
                        if(self._targetSelector){
                            $el = $(self._targetSelector);
                        }else{
                            //if targetSelector is not passed use view.$el
                            $el = self.$el;
                        }
                        if($el && $el.length){
                            self._spinner = new Spinner(opts).spin($el[0]);
                            $el.block({
                                message: null,
                                // styles for the overlay
                                overlayCSS: {
                                    backgroundColor: $('.nav').css('background-color'),
                                    opacity: 0.5,
                                    cursor: 'default',
                                    'z-index': 1038
                                }
                            });
                        }

                    }

                }, 200);

            });
        };

        /**
         * hide the spinner
         *
         * @private
         */
        Backbone.View.prototype._hideSpinner = function() {
            console.log('_hideSpinner: view.cid: ' + this.cid + ', _spinnerTimeoutActive: '+ this._spinnerTimeoutActive);
            if(this._spinner){
                this._spinner.stop();
            }
            var $el;
            if(this._targetSelector){
                $el = $(this._targetSelector);
            }else{
                //if targetSelector is not passed use view.$el
                $el = this.$el;
            }
            if($el){
                $el.unblock();
            }
            this._spinnerTimeoutActive = false;
        };

    });