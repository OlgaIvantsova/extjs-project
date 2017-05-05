Ext.define('Extjs.learning.view.main.Form', {
  extend: 'Ext.form.Panel',
  requires: ['Extjs.learning.view.main.FormController'],
  xtype: 'form',
  layout:'form',
  margin: '5',
  controller: 'form',
  listeners: {
    enable: 'onEnable',
  },
  items: [
  {
    xtype: 'textfield',
    fieldLabel: 'Model',
    name: 'model',
    flex: 1,
    bind: '{car.model}',
    allowBlank : false,
    msgTarget: 'qtip',
    invalidText: 'must be present',
    min: 1
  },
  {
    xtype: 'textfield',
    fieldLabel: 'Price',
    name: 'price',
    flex: 1,
    bind: '{car.price}',
    vtype: 'numeric',
    msgTarget: 'qtip',
  },
  {
    xtype: 'combobox',
    fieldLabel: 'Type',
    name: 'type',
    flex: 1,
    displayField: 'type',
    valueField: 'type',
    store: ['sedan', 'truck'],
    // store: {
    //   fields: ['text'],
    //   proxy: {
    //     type: 'ajax',
    //     url: 'http://localhost:8080/cars'
    //   },
    //   listeners: {
    //     load: function(store) {
    //       var hits = {};
    //       store.filterBy(function(record) {
    //         var name = record.get('type');
    //         if (hits[name]) {
    //           return false;
    //         } else {
    //           hits[name] = true;
    //           return true;
    //         }
    //       });
    //     }
    //   }
    // },
    bind: '{car.type}'
  }],
  fbar: [
    {
      xtype: 'button',
      text: 'Save',
      handler: 'submit',
      reference: 'saveBtn',
      bind: {
        disabled: '{!isDirtyForm}'
      }

    },
    {
      xtype: 'button',
      text: 'Cancel',
      handler: 'cancel',
      reference: 'cancelBtn',
      bind: {
        disabled: '{!isDirtyForm}'
      }

    }
  ],

});
