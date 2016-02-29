import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

let AppComponent =
    Component({
        selector: 'test-app',
        template: '<h1>My First Angular 2 App</h1>'
    })
    .Class({
        constructor: function() {
        this.name = 'Angular2';
        setTimeout(() => {
            this.name = 'Angular2!!!'
        },1500);

        }
    });

bootstrap(AppComponent);
