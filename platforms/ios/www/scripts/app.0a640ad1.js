"use strict";var ApplicationConfiguration=function(){var a="angularjsapp",b=["ngResource","ngCookies","ngAnimate","ngTouch","ngSanitize","ui.router","ui.bootstrap","ui.utils"],c=function(b){angular.module(b,[]),angular.module(a).requires.push(b)};return{applicationModuleName:a,applicationModuleVendorDependencies:b,registerModule:c}}();angular.module(ApplicationConfiguration.applicationModuleName,ApplicationConfiguration.applicationModuleVendorDependencies),angular.module(ApplicationConfiguration.applicationModuleName).config(["$locationProvider",function(a){a.hashPrefix("!")}]),angular.element(document).ready(function(){"#_=_"===window.location.hash&&(window.location.hash="#!"),angular.bootstrap(document,[ApplicationConfiguration.applicationModuleName])}),function(){ApplicationConfiguration.registerModule("core")}(),function(){function a(){var a=this;a.title="Home"}angular.module("core").controller("Home",a)}(),function(){function a(a,b){b.otherwise("/");var c={name:"home",url:"/",templateUrl:"modules/core/views/home.html",controller:"Home"};a.state(c)}angular.module("core").config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}(),angular.module("angularjsapp").run(["$templateCache",function(a){a.put("modules/core/views/home.html",'<div class="page-header">\n    <h1 id="home-h1">Congratulations!</h1>\n</div>\n<p id="home-content">\n    You have successfully created an AngularJs application running within a cordova app !\n</p>\n')}]);