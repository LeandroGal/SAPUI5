sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (UIComponent, Models, ResourceModel) { // UIComponent para extender y devolver la instancia del componente de la App 

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest: "json"
                // "rootView": {
                //     "viewName": "logaligroup.SAPUI5.view.App", // Como llegar al objeto
                //     "type": "XML", // Tipo de la vista
                //     "async": true, // Como se va a cargar, de forma asincrona en este caso
                //     "id": "app" // El identificado de la vista
                // }
            },

            init: function () {
                // Call the init function 
                UIComponent.prototype.init.apply(this, arguments);

                // Set data Model on the view
                this.setModel(Models.createRecipient()); // Trae de Models.js el JSON

                // set i18n Model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });