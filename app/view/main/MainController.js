Ext.define('Extjs.learning.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function () {
        this.callParent(arguments);
        var vm = this.getViewModel();
        var store = this.getView().getViewModel().get('grid');

        store.on('update', function (store, record) {
            if (record === vm.get('car')) {
                vm.set('isDirtyForm', true);
            }
        });

        vm.bind('{car}', function (car) {
            vm.set('isDirtyForm', false);
        });
    },

    getStore: function() {
        return this.view.getGrid();
    },

    onBeforeselect: function() {
        if(this.view.getCar() && this.isRecordEmpty()) {
            this.rejectChanges();
            return true;
        }
        if(this.view.getIsDirtyForm()) {
            this.confirmChanges();
        }
    },

    onSelect: function(grid, record) {
        this.view.setCar(record);
    },

    addRecord: function() {
        if(this.view.getIsDirtyForm()) {
            this.confirmChanges();
        } else {
            if(this.view.getCar() && this.isRecordEmpty()) return;
            var model = this.getStore().getModel();
            var record = model.create({model: '', price: '', type: '', clientId: ''});
            this.getStore().add(record);
        }
    },

    save: function() {
        var form = this.view.lookupReference('form');
        if(form.getForm().isValid()) {
            console.log(form.getForm().getValues());
            this.syncData();
        } else {
            Ext.Msg.alert('Fill all fields correctly!');
        }
    },

    removeRecord: function() {
        var car = this.view.getCar();
        this.getStore().remove(car);
        this.syncData();
    },

    confirmChanges: function() {
        var controller = this;

        Ext.Msg.confirm('Confirm', 'Do you want to save data changes?', function (btn) {
            if (btn === 'yes') {
                controller.save();
            }
            if (btn === 'no') {
                controller.rejectChanges();
            }
        });

    },

    rejectChanges: function() {
        this.getStore().rejectChanges();
        this.view.setCar(null);
    },

    isRecordEmpty: function() {
        var car = this.view.getCar().getData();
        for (var key in car) {
            if(key === 'clientId') continue;
            if(car[key] !== '') {
                return false;
            }
        }
        return true;
    },

    syncData: function() {
        var view = this.view;
        this.getStore().sync({
          success: function () {
            view.setCar(null);
          },
          error: function (err) {
            view.setCar(null);
          }
        });
    }

});

