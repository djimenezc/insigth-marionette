define([
        'backbone',
        'hbs!components/controls/navigationMenu/NavigationMenuTpl',
        'hbs!components/controls/navigationMenu/NavigationMenuEntryTpl'
    ],
    function (Backbone, Template, MenuEntryTpl) {
        'use strict';

        return Backbone.View.extend({
            initialize: function (opts) {
                //console.log('initialize a NavigationMenu View');

                Handlebars.registerPartial('menuEntry', MenuEntryTpl);

                this.opts = opts;
                this.collection = opts.collection;
            },

            template: Template,

            events: {
                'click [data-parent=#accordion]': '_uiClickAccordionItem'
            },

            className : 'nav-scroll-wrapper',

            render: function () {
                //console.log('Rendering Navigation Menu');

                var attributes = this.collection ? this.collection.toJSON() : {};
                this.$el.html(this.template(attributes));
            },

            /**
             * Method that handle the click event on the menu items and switch the
             * arrow direction
             * @private
             */
            _uiClickAccordionItem: function(evt) {

                var itemId = $(evt.target).attr('data-item-id');

                console.log('_uiClickAccordionItem '+ itemId);

                $('a[data-item-id="'+itemId+'"]').find('.submenu_item')
                    .toggleClass('glyphicon-chevron-right')
                    .toggleClass('glyphicon-chevron-down');
            },

            /**
             * When the router changes the current displayed view the active item in
             * the menu has to be changed.
             * @param view
             * @private
             */
            _updateMenu: function(view) {
                var menuItems = view.menuItems || [];

                this.$el.find('.active').removeClass('active');

                if (menuItems[0]) {
                    var $menuItem = this.$el.find('#' + menuItems[0] + '_menu_item');
                    $menuItem.addClass('active');

                    $menuItem.next('.submenu').collapse('show');
                    $menuItem.find('.submenu_item').removeClass('glyphicon-chevron-right')
                        .addClass('glyphicon-chevron-down');

                    if (menuItems[1]) {
                        var $subMenuItem = this.$el.find('#' + menuItems[1] + '_menu_item');
                        $subMenuItem.addClass('active');

                        $subMenuItem.next('.submenu').collapse('show');
                        $subMenuItem.find('.submenu_item').removeClass('glyphicon-chevron-right')
                            .addClass('glyphicon-chevron-down');

                        if (menuItems[2]) {
                            var $subSubMenuItem = this.$el.find('#' + menuItems[1] + '_' + menuItems[2] + '_menu_item');
                            $subSubMenuItem.addClass('active');
                        }
                    }
                }
            }


        });
    });
