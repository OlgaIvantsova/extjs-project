Ext.define('Extjs.learning.view.main.FormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.form',

  cancel: function() {
    this.view.fireEvent('cancel');
  },

  submit: function() {
    this.view.fireEvent('save');
  },

  onEnable: function() {
    var view = this.view;
    Ext.defer(function() {
      view.getForm().getFields().first().focus();
    }, 100);
  }

});
