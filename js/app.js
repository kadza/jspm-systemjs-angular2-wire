import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import wire from 'wire/wire';
import kuku from './kuku';

wire(kuku).then((a) => console.log(a));

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
