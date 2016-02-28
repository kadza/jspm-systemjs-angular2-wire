System.config({
  "baseURL": "/src",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "npm:*": "/node_modules/*"
  },
  "map": {
    "angular2": "npm:angular2/bundles/angular2-all.umd",
    "rx": "npm:rxjs/bundles/Rx.umd",
    "angular2-poly": "npm:angular2/bundles/angular2-polyfills",
    "babel": "npm:babel-core/index",
    "babel-runtime": "npm:babel-runtime/core-js"
  }
});
