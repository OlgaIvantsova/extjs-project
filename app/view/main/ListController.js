Ext.define('Extjs.learning.view.main.ListController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.list',

  addRecord: function() {
    this.view.fireEvent('addRecord');
    this.view.selModel.doSelect(this.view.getStore().getNewRecords()[0]); //select added record
  },

  removeRecord: function() {
    var view = this.view;
    Ext.Msg.confirm('Confirm', 'Do you really want to remove this car?', function (btn) {
       if(btn === 'yes') {
         view.fireEvent('removeRecord');
       }
    });
  }

});
