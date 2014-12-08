/**
 * @author djimenez
 */
define([
		'backbone',
		'application',
		'communicator',
		'helpers/i18n',
		'views/messages/ErrorMessageView',
		'views/messages/LoadingMessageView',
		'hbs!tmpl/messages/validationMessage_tmpl'
	],
	/**
	 * Controller to handle the info and error message display workflow using the pub/sub system
	 * @param Backbone
	 * @param App Marionette Application
	 * @param Communicator backbone wreqr plugin
	 * @param i18n
	 * @param ErrorMessageView
	 * @param LoadingMessageView
	 * @param validationMessageTmpl
	 * @returns {*}
	 */
	function (Backbone, App, Communicator, i18n, ErrorMessageView, LoadingMessageView, validationMessageTmpl) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			/**
			 * Init method that define the message values that this controller is listening.
			 */
			initialize: function (App) {
				console.log('initialize a MessageController');


				/**
				 * function for displaying an error message using the AJAX jqXHR parameter
				 *
				 * @param event
				 * @param jqXHR
				 */
				App.ajaxErrorHandler = function (event, jqXHR) {
					console.log('default AJAX error handler');

					if (jqXHR.skipGlobalHandling) {
						return;
					}
					var validationErrorMessages;
					var errorCode;
					if (jqXHR.responseText) {
						try {
							var json = JSON.parse(jqXHR.responseText);
							errorCode = json.errorCode;
							validationErrorMessages = json.validationErrorMessages;
						} catch (err) {
							console.error('Error parsing error response text');
						}
					}
					if(errorCode === 401){
						// specific handling for Unauthorized client error: the page is reloaded to force redirect to login page

						//noinspection JSCheckFunctionSignatures
						Communicator.mediator.trigger('message:showError', i18n.translate('messages.error'), i18n.translate('messages.errors.unauthorized'), function () {
							Communicator.mediator.trigger('message:hideError');

							location.reload(true);

						}, this);

					}else{
						// handling all the others errors with validationMessageTmpl

						var responseText = jqXHR.statusText;
						//if the reponse desn't contain the statusText, then try to build the label using the status code
						if (!responseText) {
							responseText = i18n.translate('messages.statusCodes.' + status, {}, status);
						}
						var errorText;
						if (errorCode) {
							errorText = i18n.translate('messages.errorCodes.' + errorCode, {}, errorCode);
						}
						var text = validationMessageTmpl({
							responseText: responseText,
							errorText: errorText,
							errorCode: errorCode,
							validationErrorMessages: validationErrorMessages
						});

						//noinspection JSCheckFunctionSignatures
						Communicator.mediator.trigger('message:showError', i18n.translate('messages.error'), text, function () {
							Communicator.mediator.trigger('message:hideError');
						}, this);

					}
				};

				// set global AJAX error handler
				$(document).ajaxError(App.ajaxErrorHandler);

				Communicator.mediator.on('message:showLoadingMask', this.showLoadingMask);
				Communicator.mediator.on('message:hideLoadingMask', this.hideLoadingMask);
				Communicator.mediator.on('message:showError', $.proxy(this.errorMessage, this));
				Communicator.mediator.on('message:hideError', this.hideErrorMessage);
			},

			/**
			 * Return the jquery object associate with the primary button in the error popup
			 * @returns {*|jQuery|HTMLElement}
			 */
			getPrimaryBtn: function () {
				return $('.modal-footer > .btn-primary');
			},

			/**
			 * Method that display an error message popup
			 * @param title
			 * @param message
			 * @param okCallbackFn
			 * @param okCallbackScope
			 * @param cancelCallbackFn
			 * @param cancelCallbackScope
			 */
			errorMessage: function (title, message, okCallbackFn, okCallbackScope, cancelCallbackFn, cancelCallbackScope) {
				console.log('Display error' + title + ' Msg:' + message);

				var showOk = okCallbackFn ? true : false;
				var showCancel = cancelCallbackFn ? true : false;

				//_getPleaseWaitDialog().addClass('hide');

				var view = new ErrorMessageView({attributes: {
					title: title,
					msg: message,
					showOk: showOk,
					showCancel: showCancel
				},
					okCallbackFn: okCallbackFn,
					okCallbackScope: okCallbackScope,
					cancelCallbackFn: cancelCallbackFn,
					cancelCallbackScope: cancelCallbackScope
				});
				App.modal.showModal(view);
				App.modal.loadingMaskVisible = false;
				this.getPrimaryBtn().focus();
			},

			/**
			 * Method to hide the modal panel
			 */
			hideErrorMessage: function () {
				console.log('Hiding error popup');
				App.modal.hideModal();
			},

			/**
			 * Method to show the loading mask with an specific message
			 *
			 * @param title
			 * @param message
			 */
			showLoadingMask: function (title, message) {
				console.log('Display loading mask' + title + ' Msg:' + message);

				var view = new LoadingMessageView({
					attributes: {
						title: title,
						msg: message
					}
				});
				App.modal.showModal(view);
				App.modal.loadingMaskVisible = true;
			},

			/**
			 * Method to hide the loading mask with an specific message
			 *
			 */
			hideLoadingMask: function () {
				console.log('Hiding loading mask');

				if(App.modal.loadingMaskVisible) {
					App.modal.hideModal();
					App.modal.loadingMaskVisible = false;
				}
			}
		});
	});
