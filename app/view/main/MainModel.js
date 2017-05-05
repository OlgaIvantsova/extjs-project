Ext.define('Extjs.learning.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['Extjs.learning.app.model.Car'],
    alias: 'viewmodel.cars',
    data: {
        car: null,
        isDirtyForm: false
    },
    stores: {
        grid: {
            model: 'Extjs.learning.app.model.Car',
            autoLoad: true,
            storeId: 'CarsStore',
            data: {
                cars: [
                    {
                        "model": "renault",
                        "price": 30000,
                        "type": "Truck",
                        "id": "1",
                        "clientId": "1"
                    },
                    {
                        "model": "volvo",
                        "price": 3000000,
                        "type": "Truck",
                        "id": "2",
                        "clientId": "2"
                    },
                    {
                        "model": "audi",
                        "price": 200,
                        "type": "sedan",
                        "id": "3",
                        "clientId": "3"
                    }
                ]
            },
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'cars'
                }
                // type: 'rest',
                // reader: {
                //     type: 'json',
                //     rootProperty: 'cars'
                // },
                // writer: {
                //     type: 'json'
                // },
                // actionMethods: {
                //     create: 'POST',
                //     read: 'GET',
                //     update: 'PUT',
                //     destroy: 'DELETE'
                // },
                // api: {
                //     read: ' http://localhost:8080/cars',
                //     create: ' http://localhost:8080/cars',
                //     update: ' http://localhost:8080/cars',
                //     destroy: ' http://localhost:8080/cars',
                // }
            }
        }
    }

});

