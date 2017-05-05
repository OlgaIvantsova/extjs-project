 Ext.define('Extjs.learning.view.main.List', {
   extend: 'Ext.grid.Panel',
   requires: ['Extjs.learning.view.main.ListController'],
   alias: 'carsList',
   title: 'Vehicles list',
   margin: '5',
   controller: 'list',
   xtype: 'list',
   layout: {
     type: 'hbox',
     align: 'stretch'
   },
   viewConfig:{
     markDirty: false
   },
   bind: {
     selection: '{car}'
   },
   fbar: [
     { xtype: 'button', text: 'Add new', handler: 'addRecord'},
     {
       xtype: 'button',
       text: 'Remove',
       handler: 'removeRecord',
       bind: {
         disabled: '{!car}'
       }
      }
   ],
   initComponent: function() {
     this.columns = [
       {header: 'Model',  dataIndex: 'model',  flex: 1},
       {header: 'Type',  dataIndex: 'type',  flex: 1},
       {header: 'Price', dataIndex: 'price', flex: 1}
      ];
     this.callParent(arguments);
    }
 });
