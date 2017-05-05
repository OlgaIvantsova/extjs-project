Ext.define('Extjs.learning.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Extjs.learning.view.main.MainModel',
        'Extjs.learning.view.main.MainController',
        'Extjs.learning.view.main.Form',
        'Extjs.learning.view.main.List',
        'Extjs.learning.view.main.Diagram'
    ],
    controller: 'main',
    padding: 100,
    header: false,
    viewModel: {
        type: 'cars'
    },
    config: {
        car: '{car}',
        isDirtyForm: '{isDirtyForm}',
        grid: '{grid}'
    },
    bind: {
        car: '{car}',
        isDirtyForm: '{isDirtyForm}',
        grid: '{grid}'
    },
    twoWayBindable: ['car', 'grid', 'isDirtyForm'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 2,
            items: [{
                xtype: 'list',
                flex: 1,
                bind: {
                    store: '{grid}',
                    data: {
                        car: '{car}',
                        isDirtyForm: '{isDirtyForm}'
                    }
                },
                listeners: {
                    select: 'onSelect',
                    addRecord: 'addRecord',
                    removeRecord: 'removeRecord',
                    beforeselect: 'onBeforeselect'
                }
            },
                {
                    xtype: 'form',
                    flex: 1,
                    bind: {
                        data: {
                            car: '{car}',
                            isDirtyForm: '{isDirtyForm}'
                        },
                        disabled: '{!car}'
                    },
                    reference: 'form',
                    listeners: {
                        save: 'save',
                        cancel: 'rejectChanges'
                    }
                }
            ]
        },
        {
            xtype: 'diagram',
            flex: 1,
            bind: {
                data: '{grid}'
            }
        }
    ],
    initComponent: function() {
        this.callParent(arguments);
    }
});


