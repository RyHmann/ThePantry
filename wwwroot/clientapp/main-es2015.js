(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repos\csharp\Projects\ThePantry\ClientApp\main.ts */"QqbR");


/***/ }),

/***/ "A/EL":
/*!************************************************************!*\
  !*** ./ClientApp/app/meal-detail/meal-detail.component.ts ***!
  \************************************************************/
/*! exports provided: MealDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailComponent", function() { return MealDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MealDetailComponent_div_0_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r2.name);
} }
function MealDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MealDetailComponent_div_0_li_24_Template, 3, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r0.meal.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meal.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx_r0.meal.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meal.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Link: ", ctx_r0.meal.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Thumbnail: ", ctx_r0.meal.thumbnail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.meal.ingredients);
} }
class MealDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
MealDetailComponent.ɵfac = function MealDetailComponent_Factory(t) { return new (t || MealDetailComponent)(); };
MealDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealDetailComponent, selectors: [["meal-detail"]], inputs: { meal: "meal" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "card-meal-detail"], [1, "card-container"], [4, "ngFor", "ngForOf"]], template: function MealDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MealDetailComponent_div_0_Template, 25, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".card-meal-detail[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n}\r\n\r\n    .card-meal-detail[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n    }\r\n\r\n    .card-container[_ngcontent-%COMP%] {\r\n    padding: 2px 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0FBQ3BCOztJQUVJO1FBQ0ksd0NBQXdDO0lBQzVDOztJQUVKO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Im1lYWwtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1tZWFsLWRldGFpbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4gICAgLmNhcmQtbWVhbC1kZXRhaWw6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB9XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "EP3p":
/*!********************************************!*\
  !*** ./ClientApp/app/removequotes.pipe.ts ***!
  \********************************************/
/*! exports provided: RemovequotesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovequotesPipe", function() { return RemovequotesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RemovequotesPipe {
    transform(text) {
        let revisedString = text.replace(/^"|$"/g, "");
        return revisedString;
    }
}
RemovequotesPipe.ɵfac = function RemovequotesPipe_Factory(t) { return new (t || RemovequotesPipe)(); };
RemovequotesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "removeQuotes", type: RemovequotesPipe, pure: true });


/***/ }),

/***/ "FhR5":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "HJlE":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-search/meal-search.component */ "kNrY");


class AppComponent {
    constructor() {
        this.title = 'The Pantry';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meal-search");
    } }, directives: [_meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_1__["MealSearchComponent"]], encapsulation: 2 });


/***/ }),

/***/ "J4hL":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "HJlE");
/* harmony import */ var _meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meal-search/meal-search.component */ "kNrY");
/* harmony import */ var _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meal-detail/meal-detail.component */ "A/EL");
/* harmony import */ var _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meals/meals.component */ "dYJp");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./truncate.pipe */ "PrUn");
/* harmony import */ var _active_ingredients_active_ingredients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./active-ingredients/active-ingredients.component */ "cHBO");
/* harmony import */ var _removequotes_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./removequotes.pipe */ "EP3p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_4__["MealSearchComponent"],
        _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_5__["MealDetailComponent"],
        _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__["MealsComponent"],
        _truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"],
        _active_ingredients_active_ingredients_component__WEBPACK_IMPORTED_MODULE_8__["ActiveIngredientsComponent"],
        _removequotes_pipe__WEBPACK_IMPORTED_MODULE_9__["RemovequotesPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "PrUn":
/*!****************************************!*\
  !*** ./ClientApp/app/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TruncatePipe {
    transform(text, charLimit = 50, ellipsis = '...') {
        let truncateIndex = text.substr(0, charLimit).lastIndexOf(" ");
        return text.length > charLimit ? text.substr(0, truncateIndex) + ellipsis : text;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });


/***/ }),

/***/ "QqbR":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "J4hL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "FhR5");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "cHBO":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/active-ingredients/active-ingredients.component.ts ***!
  \**************************************************************************/
/*! exports provided: ActiveIngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveIngredientsComponent", function() { return ActiveIngredientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ActiveIngredientsComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invalidIngredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](invalidIngredient_r1);
} }
class ActiveIngredientsComponent {
    constructor() { }
    ngOnInit() {
    }
    invalidIngredientsPresent(array) {
        return (array.length > 0 ? true : false);
    }
}
ActiveIngredientsComponent.ɵfac = function ActiveIngredientsComponent_Factory(t) { return new (t || ActiveIngredientsComponent)(); };
ActiveIngredientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActiveIngredientsComponent, selectors: [["active-ingredients"]], inputs: { userIngredients: "userIngredients", invalidIngredients: "invalidIngredients" }, decls: 5, vars: 1, consts: [[1, "active-ingredients"], [4, "ngFor", "ngForOf"]], template: function ActiveIngredientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sorry, we didn't recognize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActiveIngredientsComponent_span_4_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invalidIngredients);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".active-ingredients[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 15px 5px;\r\n}\r\n.invalid-ingredient-container[_ngcontent-%COMP%] {\r\n    background-color: #FFDDDD;\r\n    border: 2px solid #FFB3B3;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.ingredient-button[_ngcontent-%COMP%]{\r\n    display: inline;\r\n    font-size: 14px;\r\n    border: 2px;\r\n    border-radius: 5px;\r\n    border-style: solid;\r\n    color: green;\r\n    background-color: rgb(256,256,256,.5);\r\n    padding: 2px 20px 2px 6px;\r\n    margin: 1px 2px;\r\n\r\n}\r\n.ingredient-button[_ngcontent-%COMP%]:hover {\r\n    color: red;\r\n    background-color: rgb(256,175,175,0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZS1pbmdyZWRpZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDIiwiZmlsZSI6ImFjdGl2ZS1pbmdyZWRpZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1pbmdyZWRpZW50cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCA1cHg7XHJcbn1cclxuLmludmFsaWQtaW5ncmVkaWVudC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRERERDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkIzQjM7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uaW5ncmVkaWVudC1idXR0b257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU2LDI1NiwyNTYsLjUpO1xyXG4gICAgcGFkZGluZzogMnB4IDIwcHggMnB4IDZweDtcclxuICAgIG1hcmdpbjogMXB4IDJweDtcclxuXHJcbn1cclxuLmluZ3JlZGllbnQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU2LDE3NSwxNzUsMC41KTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "dYJp":
/*!************************************************!*\
  !*** ./ClientApp/app/meals/meals.component.ts ***!
  \************************************************/
/*! exports provided: MealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsComponent", function() { return MealsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../truncate.pipe */ "PrUn");



function MealsComponent_div_0_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r5.name);
} }
function MealsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsComponent_div_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const meal_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onSelect(meal_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MealsComponent_div_0_div_1_span_14_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", meal_r3 === ctx_r2.selectedMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://thepantryblob.blob.core.windows.net/the-pantry-blob/", meal_r3.thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", meal_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, meal_r3.description, 145));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", meal_r3.ingredients);
} }
function MealsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MealsComponent_div_0_div_1_Template, 15, 10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meals_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", meals_r1);
} }
class MealsComponent {
    ngOnInit() {
    }
    onSelect(meal) {
        this.selectedMeal = meal;
    }
}
MealsComponent.ɵfac = function MealsComponent_Factory(t) { return new (t || MealsComponent)(); };
MealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealsComponent, selectors: [["meals"]], inputs: { availableMeals: "availableMeals" }, decls: 2, vars: 3, consts: [["class", "grid-container", 4, "ngIf"], [1, "grid-container"], ["class", "card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], [3, "src"], [1, "card-container"], ["target", "_blank", 3, "href"], [1, "meal-ingredient-container"], [1, "ingredient-list"], ["class", "ingredients", 4, "ngFor", "ngForOf"], [1, "ingredients"]], template: function MealsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MealsComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.availableMeals)) == null ? null : tmp_0_0.meals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncatePipe"]], styles: ["html[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: scroll;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n    -moz-column-gap: 10px;\r\n         column-gap: 10px;\r\n    grid-row-gap: 10px;\r\n    width: 80%;\r\n    margin: 0px auto;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.3);\r\n    width: auto;\r\n    background-color: #ffffff;\r\n    padding: 10px;\r\n    margin: 20px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n        font-family: 'Lato', sans-serif;\r\n        margin: 10px;\r\n    }\r\n\r\n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        letter-spacing: 1px;\r\n        text-decoration: underline;\r\n        color: #444444\r\n    }\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.ingredients[_ngcontent-%COMP%] {\r\n    color: #999999;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.ingredients[_ngcontent-%COMP%]:after {\r\n    content: \", \";\r\n}\r\n\r\n.ingredients[_ngcontent-%COMP%]:last-child:after {\r\n    content: \"\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVJO1FBQ0ksK0JBQStCO1FBQy9CLFlBQVk7SUFDaEI7O0FBRUE7UUFDSSxtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCO0lBQ0o7O0FBRUo7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6Im1lYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbiAgICAuY2FyZCBoNCwgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgaDQge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ0NDRcclxuICAgIH1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmluZ3JlZGllbnRzIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaW5ncmVkaWVudHM6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIsIFwiO1xyXG59XHJcbi5pbmdyZWRpZW50czpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "kNrY":
/*!************************************************************!*\
  !*** ./ClientApp/app/meal-search/meal-search.component.ts ***!
  \************************************************************/
/*! exports provided: MealSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealSearchComponent", function() { return MealSearchComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _meal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meal.service */ "kciO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meals/meals.component */ "dYJp");
/* harmony import */ var _active_ingredients_active_ingredients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../active-ingredients/active-ingredients.component */ "cHBO");








function MealSearchComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_div_7_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ingredient_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); ctx_r6.selectIngredient(ingredient_r4); return _r0.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r4.name);
} }
function MealSearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_div_7_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MealSearchComponent_div_7_li_2_Template, 4, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r1.ingredients$));
} }
function MealSearchComponent_div_8_active_ingredients_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "active-ingredients", 16);
} if (rf & 2) {
    const ingredients_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("invalidIngredients", ingredients_r9);
} }
function MealSearchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MealSearchComponent_div_8_active_ingredients_1_Template, 1, 1, "active-ingredients", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredients_r9 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.invalidIngredientsDetected(ingredients_r9));
} }
class MealSearchComponent {
    constructor(mealService) {
        this.mealService = mealService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.showSearchResults = false;
    }
    onDocumentClick() {
        this.showSearchResults = false;
    }
    ngOnInit() {
        this.ingredients$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), 
        // Map ignores all string items except for the last comma separated value and removes minus sign
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.split(",").pop().replace("-", "").trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((term) => this.mealService.searchIngredients(term)));
    }
    // Push a search term into the observable stream
    search(term) {
        this.showSearchResults = true;
        this.queryString = term;
        this.searchTerms.next(term);
    }
    selectIngredient(ingredient) {
        this.incorporateSelectedIngredient(ingredient.name);
        this.searchTerms.next("");
    }
    searchMeals() {
        this.queryResult$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
        this.queryResult$ = this.mealService.searchMeals(this.queryString);
    }
    invalidIngredientsDetected(array) {
        return array.length > 0 ? true : false;
    }
    incorporateSelectedIngredient(ingredient) {
        var _a;
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = (_a = this.queryString) === null || _a === void 0 ? void 0 : _a.split(", ");
        let ingredientString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.pop().trim();
        this.checkForMinusSign(ingredientString) ? stringArray === null || stringArray === void 0 ? void 0 : stringArray.push("-" + ingredient + ", ") : stringArray === null || stringArray === void 0 ? void 0 : stringArray.push(ingredient + ", ");
        let newString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.join(", ");
        this.queryString = newString;
    }
    checkForMinusSign(term) {
        return term.slice(0, 1) === '-' ? true : false;
    }
}
MealSearchComponent.ɵfac = function MealSearchComponent_Factory(t) { return new (t || MealSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_meal_service__WEBPACK_IMPORTED_MODULE_3__["MealService"])); };
MealSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MealSearchComponent, selectors: [["meal-search"]], hostBindings: function MealSearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 14, vars: 6, consts: [[1, "meal-finder-container"], [1, "search-bar-heading-container"], [1, "search-bar-container"], ["type", "text", "placeholder", "ie: parsley, sage, rosemary, thyme", "id", "search-box", 1, "search-bar", 3, "ngModel", "ngModelChange", "input", "keyup.enter"], ["searchBox", ""], ["class", "search-results-container", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "search-button-container"], ["type", "submit", 1, "search-button", 3, "click"], [3, "availableMeals"], [1, "search-results-container", 3, "click"], [1, "search-result-list"], [4, "ngFor", "ngForOf"], [3, "click"], ["ingredientResult", ""], [3, "invalidIngredients", 4, "ngIf"], [3, "invalidIngredients"]], template: function MealSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter ingredients separated by commas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MealSearchComponent_Template_input_ngModelChange_5_listener($event) { return ctx.queryString = $event; })("input", function MealSearchComponent_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx.search(_r0.value); })("keyup.enter", function MealSearchComponent_Template_input_keyup_enter_5_listener() { return ctx.searchMeals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MealSearchComponent_div_7_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MealSearchComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_Template_button_click_11_listener() { return ctx.searchMeals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "meals", 9);
    } if (rf & 2) {
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.queryString);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSearchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, ctx.queryResult$)) == null ? null : tmp_2_0.invalidIngredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("availableMeals", ctx.queryResult$);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__["MealsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _active_ingredients_active_ingredients_component__WEBPACK_IMPORTED_MODULE_7__["ActiveIngredientsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    list-style-position: inside;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.meal-finder-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 'auto auto auto auto auto';\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    width: auto;\r\n}\r\n\r\n.search-bar-heading-container[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    font-size: 20px;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1.5px;\r\n    text-shadow: 0px 1px 10px rgba(0,0,0,1);\r\n    margin: 0;\r\n}\r\n\r\n.search-bar-heading-container[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 2 / 1 / 4;\r\n    margin: 10px 0px 0px 0px\r\n}\r\n\r\n.search-bar-container[_ngcontent-%COMP%] {\r\n    grid-area: 2 / 2 / 2 / 4;\r\n    position: relative;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 25px;\r\n    font-size: 15px;\r\n    color: #5c5c5c;\r\n    letter-spacing: 1px;\r\n    border-radius: 5px;\r\n    border-width: 0px;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%]:focus {\r\n        outline-color: #6b8fc9;\r\n    }\r\n\r\n.search-button-container[_ngcontent-%COMP%] {\r\n    grid-area: 2 / 4 / 2 / 4;\r\n    padding: 0px 0px 0px 10px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    padding: 4px;\r\n    color: #fff;\r\n    background-color: #3EAED9;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    border: 1px solid #9F9F9F;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%]:hover {\r\n        background-color: #33B5E6;\r\n        border: 1px solid #fff;\r\n    }\r\n\r\n.search-button[_ngcontent-%COMP%]:active {\r\n        background-color: #FBDA8C;\r\n        color: #fff;\r\n        border: 1px solid #fff;\r\n    }\r\n\r\n.search-results-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    border: solid;\r\n    border-color: #5c5c5c;\r\n    border-width: 1px;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    list-style-type: none;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    border: 2px;\r\n    color: #5c5c5c;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: cornflowerblue;\r\n        color: #fff;\r\n        cursor: default;\r\n    }\r\n\r\nactive-ingredients[_ngcontent-%COMP%] {\r\n    position: static;\r\n    grid-area: 3 / 2 / 3 / 4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLHVDQUF1QztJQUN2QyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0FBRUo7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVJO1FBQ0kseUJBQXlCO1FBQ3pCLHNCQUFzQjtJQUMxQjs7QUFDQTtRQUNJLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsc0JBQXNCO0lBQzFCOztBQUVKO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFSTtRQUNJLGdDQUFnQztRQUNoQyxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7QUFFSjtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoibWVhbC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWVhbC1maW5kZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICdhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8nO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhci1oZWFkaW5nLWNvbnRhaW5lciA+IGg0IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLDAsMCwxKTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNlYXJjaC1iYXItaGVhZGluZy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyA0O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMiAvIDQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1YzVjNWM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuICAgIC5zZWFyY2gtYmFyOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lLWNvbG9yOiAjNmI4ZmM5O1xyXG4gICAgfVxyXG5cclxuLnNlYXJjaC1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDQgLyAyIC8gNDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRUFFRDk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlGOUY5RjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNCNUU2O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkRBOEM7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzVjNWM1YztcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdC1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdC1saXN0IGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDJweDtcclxuICAgIGNvbG9yOiAjNWM1YzVjO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuICAgIC5zZWFyY2gtcmVzdWx0LWxpc3QgYTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuYWN0aXZlLWluZ3JlZGllbnRzIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "kciO":
/*!***************************************!*\
  !*** ./ClientApp/app/meal.service.ts ***!
  \***************************************/
/*! exports provided: MealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealService", function() { return MealService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MealService {
    constructor(_http) {
        this._http = _http;
        this.mealsUrl = '/api/mealfinder/include?ingr=';
        this.ingredientsUrl = '/api/ingredient/';
    }
    getMeals() {
        return this._http.get(this.mealsUrl);
    }
    searchMeals(term) {
        if (!term.trim) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
        }
        return this._http.get(`${this.mealsUrl}${term}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => typeof x != "undefined" ?
            console.log(`Found meals matching "${term}"`) :
            console.log(`No meals matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(data => console.log('Query Results: ', JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchMeals')));
    }
    searchIngredients(term) {
        if (term.trim().length < 3) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this._http.get(`${this.ingredientsUrl}${term}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => x.length ?
            console.log(`Found ingredients matching "${term}"`) :
            console.log(`No ingredients matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchIngredients', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
}
MealService.ɵfac = function MealService_Factory(t) { return new (t || MealService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MealService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MealService, factory: MealService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map