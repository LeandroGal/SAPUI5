sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict"; // Nos advierte de posibles "errores silenciosos"

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () { // Cuando se inicia el objeto

            },

            onShowHello: function () {
                // Read text from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // Read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    })