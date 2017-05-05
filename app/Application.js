Ext.define('Extjs.learning.Application', {
    extend: 'Ext.app.Application',
    name: 'Extjs.learning',
    requires: [
        'Extjs.learning.store.Personnel',
        'Ext.tab.Panel',
        'Extjs.learning.validation.Numeric',
        'Extjs.learning.view.main.MainModel',
        'Ext.chart.Chart',
        'Extjs.learning.view.main.Diagram'
    ]
});
