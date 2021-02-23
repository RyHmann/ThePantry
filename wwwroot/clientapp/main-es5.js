(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!*********************************!*\
      !*** multi ./ClientApp/main.ts ***!
      \*********************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Repos\csharp\Projects\ThePantry\ClientApp\main.ts */
      "QqbR");
      /***/
    },

    /***/
    "A/EL":
    /*!************************************************************!*\
      !*** ./ClientApp/app/meal-detail/meal-detail.component.ts ***!
      \************************************************************/

    /*! exports provided: MealDetailComponent */

    /***/
    function AEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealDetailComponent", function () {
        return MealDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MealDetailComponent_div_0_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ingredient_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r2.name);
        }
      }

      function MealDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ingredients:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MealDetailComponent_div_0_li_16_Template, 3, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r0.meal.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meal.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Link: ", ctx_r0.meal.url, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Thumbnail: ", ctx_r0.meal.thumbnail, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.meal.ingredients);
        }
      }

      var MealDetailComponent = /*#__PURE__*/function () {
        function MealDetailComponent() {
          _classCallCheck(this, MealDetailComponent);
        }

        _createClass(MealDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MealDetailComponent;
      }();

      MealDetailComponent.ɵfac = function MealDetailComponent_Factory(t) {
        return new (t || MealDetailComponent)();
      };

      MealDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MealDetailComponent,
        selectors: [["meal-detail"]],
        inputs: {
          meal: "meal"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]],
        template: function MealDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MealDetailComponent_div_0_Template, 17, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meal);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWFsLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "FhR5":
    /*!***********************************************!*\
      !*** ./ClientApp/environments/environment.ts ***!
      \***********************************************/

    /*! exports provided: environment */

    /***/
    function FhR5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "HJlE":
    /*!****************************************!*\
      !*** ./ClientApp/app/app.component.ts ***!
      \****************************************/

    /*! exports provided: AppComponent */

    /***/
    function HJlE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meal-search/meal-search.component */
      "kNrY");
      /* harmony import */


      var _meals_meals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meals/meals.component */
      "dYJp");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'The Pantry';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meal-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meals");
          }
        },
        directives: [_meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_1__["MealSearchComponent"], _meals_meals_component__WEBPACK_IMPORTED_MODULE_2__["MealsComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "J4hL":
    /*!*************************************!*\
      !*** ./ClientApp/app/app.module.ts ***!
      \*************************************/

    /*! exports provided: AppModule */

    /***/
    function J4hL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "HJlE");
      /* harmony import */


      var _meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./meal-search/meal-search.component */
      "kNrY");
      /* harmony import */


      var _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meal-detail/meal-detail.component */
      "A/EL");
      /* harmony import */


      var _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./meals/meals.component */
      "dYJp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_4__["MealSearchComponent"], _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_5__["MealDetailComponent"], _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__["MealsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "QqbR":
    /*!***************************!*\
      !*** ./ClientApp/main.ts ***!
      \***************************/

    /*! no exports provided */

    /***/
    function QqbR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "J4hL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "FhR5");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "dYJp":
    /*!************************************************!*\
      !*** ./ClientApp/app/meals/meals.component.ts ***!
      \************************************************/

    /*! exports provided: MealsComponent */

    /***/
    function dYJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealsComponent", function () {
        return MealsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _meal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../meal.service */
      "kciO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../meal-detail/meal-detail.component */
      "A/EL");

      function MealsComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsComponent_li_3_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var meal_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onSelect(meal_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var meal_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", meal_r1 === ctx_r0.selectedMeal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r1.name);
        }
      }

      var MealsComponent = /*#__PURE__*/function () {
        function MealsComponent(mealService) {
          _classCallCheck(this, MealsComponent);

          this.mealService = mealService;
        }

        _createClass(MealsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMeals();
          }
        }, {
          key: "getMeals",
          value: function getMeals() {
            var _this = this;

            this.mealService.getMeals().subscribe(function (meals) {
              return _this.meals = meals;
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(meal) {
            this.selectedMeal = meal;
          }
        }]);

        return MealsComponent;
      }();

      MealsComponent.ɵfac = function MealsComponent_Factory(t) {
        return new (t || MealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_meal_service__WEBPACK_IMPORTED_MODULE_1__["MealService"]));
      };

      MealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MealsComponent,
        selectors: [["meals"]],
        decls: 5,
        vars: 2,
        consts: [[1, "meals"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "meal"], [3, "click"], [1, "meal"]],
        template: function MealsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Available Meals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MealsComponent_li_3_Template, 3, 3, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meal-detail", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meals);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meal", ctx.selectedMeal);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_3__["MealDetailComponent"]],
        styles: [".meals[_ngcontent-%COMP%] {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 30em;\r\n}\r\n\r\n    .meals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n        position: relative;\r\n        left: 0;\r\n        background-color: #EEE;\r\n        margin: .5em;\r\n        padding: .3em 0;\r\n        height: 1.6em;\r\n        border-radius: 4px;\r\n    }\r\n\r\n    .meals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n            color: #607D8B;\r\n            background-color: #DDD;\r\n            left: .1em;\r\n        }\r\n\r\n    .meals[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n            background-color: #CFD8DC;\r\n            color: white;\r\n        }\r\n\r\n    .meals[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\r\n                background-color: #BBD8DC;\r\n                color: white;\r\n            }\r\n\r\n    .meals[_ngcontent-%COMP%]   .meal[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        font-size: small;\r\n        color: white;\r\n        padding: 0.8em 0.7em 0 0.7em;\r\n        background-color: #405061;\r\n        line-height: 1em;\r\n        position: relative;\r\n        left: -1px;\r\n        top: -4px;\r\n        height: 1.8em;\r\n        margin-right: .8em;\r\n        border-radius: 4px 0 0 4px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0lBRUk7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCOztJQUVJO1lBQ0ksY0FBYztZQUNkLHNCQUFzQjtZQUN0QixVQUFVO1FBQ2Q7O0lBRUE7WUFDSSx5QkFBeUI7WUFDekIsWUFBWTtRQUNoQjs7SUFFSTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFlBQVk7WUFDaEI7O0lBRVI7UUFDSSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLDBCQUEwQjtJQUM5QiIsImZpbGUiOiJtZWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lYWxzIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAzMGVtO1xyXG59XHJcblxyXG4gICAgLm1lYWxzIGxpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgICAgICBtYXJnaW46IC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogLjNlbSAwO1xyXG4gICAgICAgIGhlaWdodDogMS42ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgICAubWVhbHMgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgICAgICAgbGVmdDogLjFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZWFscyBsaS5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVhbHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC5tZWFscyAubWVhbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTA2MTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgIH1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "kNrY":
    /*!************************************************************!*\
      !*** ./ClientApp/app/meal-search/meal-search.component.ts ***!
      \************************************************************/

    /*! exports provided: MealSearchComponent */

    /***/
    function kNrY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealSearchComponent", function () {
        return MealSearchComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _meal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../meal.service */
      "kciO");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MealSearchComponent_div_6_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_div_6_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r6.selectIngredient(_r5.innerText);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ingredient_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r4.name);
        }
      }

      function MealSearchComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_div_6_Template_div_click_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MealSearchComponent_div_6_li_2_Template, 4, 1, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r1.ingredients$));
        }
      }

      function MealSearchComponent_div_9_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var meal_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meal_r10.name);
        }
      }

      function MealSearchComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Available Meals:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MealSearchComponent_div_9_li_4_Template, 3, 1, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx_r2.meals$));
        }
      }

      var MealSearchComponent = /*#__PURE__*/function () {
        function MealSearchComponent(mealService) {
          _classCallCheck(this, MealSearchComponent);

          this.mealService = mealService;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.showSearchResults = false;
        }

        _createClass(MealSearchComponent, [{
          key: "onDocumentClick",
          value: function onDocumentClick() {
            this.showSearchResults = false;
          } // Push a search term into the observable stream

        }, {
          key: "search",
          value: function search(term) {
            this.showSearchResults = true;
            this.queryString = term;
            this.searchTerms.next(term);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.ingredients$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), // Map ignores all string items except for the last comma separated value
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
              return term.split(",").pop().trim();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (term) {
              return _this2.mealService.searchIngredients(term);
            }));
          }
        }, {
          key: "selectIngredient",
          value: function selectIngredient(ingredient) {
            // TODO: Change focus from search results to search bar on click
            this.incorporateSelectedIngredient(ingredient); // Clear search results

            this.searchTerms.next(" "); // TODO: clear this jank unit testing

            console.log("Selected: ".concat(ingredient));
            console.log("Current Query: " + this.queryString);
          }
        }, {
          key: "searchMeals",
          value: function searchMeals() {
            // Clear current search results
            this.meals$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]); // TODO: clear jank unit testing

            console.log("Current Query @ Button Press: " + this.queryString); // Return results based on new query string

            this.meals$ = this.mealService.searchMeals(this.queryString);
          }
        }, {
          key: "incorporateSelectedIngredient",
          value: function incorporateSelectedIngredient(ingredient) {
            var _a; // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString


            var stringArray = (_a = this.queryString) === null || _a === void 0 ? void 0 : _a.split(",");
            stringArray === null || stringArray === void 0 ? void 0 : stringArray.pop();
            stringArray === null || stringArray === void 0 ? void 0 : stringArray.push(ingredient + ", ");
            var newString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.join(", ");
            this.queryString = newString;
          }
        }]);

        return MealSearchComponent;
      }();

      MealSearchComponent.ɵfac = function MealSearchComponent_Factory(t) {
        return new (t || MealSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_meal_service__WEBPACK_IMPORTED_MODULE_3__["MealService"]));
      };

      MealSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MealSearchComponent,
        selectors: [["meal-search"]],
        hostBindings: function MealSearchComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_click_HostBindingHandler($event) {
              return ctx.onDocumentClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
          }
        },
        decls: 10,
        vars: 3,
        consts: [["id", "search component"], ["for", "search-box"], ["type", "text", "id", "search-box", 3, "ngModel", "ngModelChange", "input"], ["searchBox", ""], ["class", "search-result-container", 3, "click", 4, "ngIf"], ["type", "submit", 3, "click"], ["class", "meal-search-results", 4, "ngIf"], [1, "search-result-container", 3, "click"], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "click"], ["ingredientResult", ""], [1, "meal-search-results"]],
        template: function MealSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Meal Finder");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MealSearchComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.queryString = $event;
            })("input", function MealSearchComponent_Template_input_input_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MealSearchComponent_div_6_Template, 4, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_Template_button_click_7_listener() {
              return ctx.searchMeals();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MealSearchComponent_div_9_Template, 6, 3, "div", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.queryString);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSearchResults);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.meals$);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width: 100%;\r\n\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n    overflow-y: auto;\r\n}\r\n\r\n    .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n        background-color: white;\r\n    }\r\n\r\n    .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #888;\r\n        display: block;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n            color: white;\r\n            background-color: #C2C2C2;\r\n        }\r\n\r\n    .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n            color: white;\r\n        }\r\n\r\n    #search-box[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 30px;\r\n}\r\n\r\n    ul.search-result[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixXQUFXOztJQUVYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0lBRUk7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLHFCQUFxQjtJQUN6Qjs7SUFFSTtZQUNJLFlBQVk7WUFDWix5QkFBeUI7UUFDN0I7O0lBRUE7WUFDSSxZQUFZO1FBQ2hCOztJQUVSO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0lBR0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQiIsImZpbGUiOiJtZWFsLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4gICAgLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQzJDMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiNzZWFyY2gtYm94IHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcbnVsLnNlYXJjaC1yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "kciO":
    /*!***************************************!*\
      !*** ./ClientApp/app/meal.service.ts ***!
      \***************************************/

    /*! exports provided: MealService */

    /***/
    function kciO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealService", function () {
        return MealService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MealService = /*#__PURE__*/function () {
        function MealService(_http) {
          _classCallCheck(this, MealService);

          this._http = _http;
          this.mealsUrl = '/api/mealfinder/include?ingr=';
          this.ingredientsUrl = '/api/ingredient/';
        }

        _createClass(MealService, [{
          key: "getMeals",
          value: function getMeals() {
            return this._http.get(this.mealsUrl);
          }
        }, {
          key: "searchMeals",
          value: function searchMeals(term) {
            if (!term.trim) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }

            return this._http.get("".concat(this.mealsUrl).concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) {
              return x.length ? console.log("Found meals matching \"".concat(term, "\"")) : console.log("No meals matching \"".concat(term, "\""));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchMeals', [])));
          }
        }, {
          key: "searchIngredients",
          value: function searchIngredients(term) {
            if (term.trim().length < 3) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }

            return this._http.get("".concat(this.ingredientsUrl).concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) {
              return x.length ? console.log("Found ingredients matching \"".concat(term, "\"")) : console.log("No ingredients matching \"".concat(term, "\""));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchIngredients', [])));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.error(error);
              console.log("".concat(operation, " failed: ").concat(error.message));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
            };
          }
        }]);

        return MealService;
      }();

      MealService.ɵfac = function MealService_Factory(t) {
        return new (t || MealService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      MealService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MealService,
        factory: MealService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map