Ext.define('Extjs.learning.app.model.Car', {
  extend: 'Ext.data.Model',
  idProperty: 'clientId',
  clientIdProperty: 'clientId',
  fields: ['model', 'type', 'price', 'clientId']
});
