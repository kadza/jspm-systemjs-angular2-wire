System.config({
  "baseURL": ".",
  },
  "paths": {
    "*": "*.js",
    "npm:*": "/node_modules/*.js"
  }
});

System.config({
  "map": {
    "angular2": "npm:angular2/bundles/angular2-all.umd.js",
    "rx": "npm:rxjs/bundles/Rx.umd.js",
    "angular2-poly": "npm:angular2/bundles/angular2-polyfills.js"
  }
});
