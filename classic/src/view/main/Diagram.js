Ext.define('Extjs.learning.view.main.Diagram', {
   extend: 'Ext.panel.Panel',
    header: false,
    requires: [
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar'
    ],
   // title: 'Diagram',
   width: 400,
   height: 400,
   layout: 'fit',
   xtype: 'diagram',
   items:[{
      xtype: 'chart',
      reference: 'chart',
      bind: {
        store: '{grid}'
      },
      axes: [{
          title: 'Price',
          type: 'numeric',
          position: 'left',
          fields: ['price']
        },
        {
          title: 'Model',
          type: 'category',
          position: 'bottom',
          fields: ['model']
      }],
      series: [{
        type: 'bar',
        xField: 'model',
        yField: 'price',
        column: true
      }]
   }]
});
