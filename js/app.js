import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import wire from 'wire/wire';
import kuku from './kuku';

wire(kuku).then((context) => {
    let AppComponent =
        Component({
            selector: 'test-app',
            template: '<h1>' + context.message + '</h1>'
        })
        .Class({
            constructor: function() {
                this.name = context.message;
            }
        });

    bootstrap(AppComponent);
});
