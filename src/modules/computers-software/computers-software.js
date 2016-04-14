angular.module('ualib.computers', [
    'ngRoute',
    'ngResource',
    'oc.lazyLoad',
    'computersSoftware.templates',
    'ualib.computers.admin',
    'ualib.computers.signage'
])

    .value('mapStyles', {
        desktops: {
            available: {
                shape: 'fillRect',
                color: '#61a661'
            },
            taken: {
                shape: 'strokeRect',
                color: '#eee'
            }
        }
    });