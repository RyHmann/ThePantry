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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _meal_search_meal_search_component__WEBPACK_IMPORTED_MODULE_4__["MealSearchComponent"],
        _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_5__["MealDetailComponent"],
        _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__["MealsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


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
/* harmony import */ var _meal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meal.service */ "kciO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MealsComponent_div_0_div_1_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r4.name);
} }
function MealsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsComponent_div_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const meal_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onSelect(meal_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MealsComponent_div_0_div_1_li_12_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", meal_r2 === ctx_r1.selectedMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", meal_r2.ingredients);
} }
function MealsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MealsComponent_div_0_div_1_Template, 13, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.availableMeals));
} }
class MealsComponent {
    constructor(mealService) {
        this.mealService = mealService;
    }
    ngOnInit() {
    }
    onSelect(meal) {
        this.selectedMeal = meal;
    }
}
MealsComponent.ɵfac = function MealsComponent_Factory(t) { return new (t || MealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_meal_service__WEBPACK_IMPORTED_MODULE_1__["MealService"])); };
MealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealsComponent, selectors: [["meals"]], inputs: { availableMeals: "availableMeals" }, decls: 1, vars: 1, consts: [["class", "grid-container", 4, "ngIf"], [1, "grid-container"], ["class", "card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], [1, "card-container"], [1, "meal-ingredient-container"], [1, "ingredient-list"], [4, "ngFor", "ngForOf"]], template: function MealsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MealsComponent_div_0_Template, 3, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.availableMeals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["html[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    list-style-position: inside;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n    -moz-column-gap: 10px;\r\n         column-gap: 10px;\r\n    grid-row-gap: 10px;\r\n    width: auto;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);\r\n    width: auto;\r\n    background-color: #ffffff;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n        font-family: 'Lato', sans-serif;\r\n        margin: 10px;\r\n    }\r\n\r\n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        letter-spacing: 1px;\r\n        text-decoration: underline;\r\n        color: #444444\r\n    }\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.ingredient-list[_ngcontent-%COMP%] {\r\n    color: #999999;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsVUFBVTtJQUNWLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVJO1FBQ0ksK0JBQStCO1FBQy9CLFlBQVk7SUFDaEI7O0FBRUE7UUFDSSxtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCO0lBQ0o7O0FBRUo7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6Im1lYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxudWwsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiAgICAuY2FyZCBoNCwgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgaDQge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ0NDRcclxuICAgIH1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmluZ3JlZGllbnQtbGlzdCB7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


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







function MealSearchComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_div_7_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); ctx_r5.selectIngredient(_r4.innerText); return _r0.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r3.name);
} }
function MealSearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_div_7_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MealSearchComponent_div_7_li_2_Template, 4, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r1.ingredients$));
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
        // Map ignores all string items except for the last comma separated value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.split(",").pop().trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((term) => this.mealService.searchIngredients(term)));
    }
    // Push a search term into the observable stream
    search(term) {
        this.showSearchResults = true;
        this.queryString = term;
        this.searchTerms.next(term);
    }
    selectIngredient(ingredient) {
        // TODO: Change focus from search results to search bar on click
        this.incorporateSelectedIngredient(ingredient);
        // Clear search results
        this.searchTerms.next(" ");
        // TODO: clear this jank unit testing
        console.log(`Selected: ${ingredient}`);
        console.log("Current Query: " + this.queryString);
    }
    searchMeals() {
        // Clear current search results
        this.meals$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        // TODO: clear jank unit testing
        console.log("Current Query @ Button Press: " + this.queryString);
        // Return results based on new query string
        this.meals$ = this.mealService.searchMeals(this.queryString);
    }
    incorporateSelectedIngredient(ingredient) {
        var _a;
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = (_a = this.queryString) === null || _a === void 0 ? void 0 : _a.split(",");
        stringArray === null || stringArray === void 0 ? void 0 : stringArray.pop();
        stringArray === null || stringArray === void 0 ? void 0 : stringArray.push(ingredient + ", ");
        let newString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.join(", ");
        this.queryString = newString;
    }
}
MealSearchComponent.ɵfac = function MealSearchComponent_Factory(t) { return new (t || MealSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_meal_service__WEBPACK_IMPORTED_MODULE_3__["MealService"])); };
MealSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MealSearchComponent, selectors: [["meal-search"]], hostBindings: function MealSearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 22, vars: 3, consts: [[1, "meal-finder-container"], [1, "search-bar-heading-container"], [1, "search-bar-container"], ["type", "text", "placeholder", "ie: parsley, sage, rosemary, thyme", "id", "search-box", 1, "search-bar", 3, "ngModel", "ngModelChange", "input", "keyup.enter"], ["searchBox", ""], ["class", "search-results-container", 3, "click", 4, "ngIf"], [1, "search-button-container"], ["type", "submit", 1, "search-button", 3, "click"], [1, "selected-ingredients-container"], [1, "selected-ingredients"], [3, "availableMeals"], [1, "search-results-container", 3, "click"], [1, "search-result-list"], [4, "ngFor", "ngForOf"], [3, "click"], ["ingredientResult", ""]], template: function MealSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter ingredients separated by commas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MealSearchComponent_Template_input_ngModelChange_5_listener($event) { return ctx.queryString = $event; })("input", function MealSearchComponent_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx.search(_r0.value); })("keyup.enter", function MealSearchComponent_Template_input_keyup_enter_5_listener() { return ctx.searchMeals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MealSearchComponent_div_7_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealSearchComponent_Template_button_click_9_listener() { return ctx.searchMeals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "tomato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "onion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "garlic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "strawberry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "meals", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.queryString);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSearchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("availableMeals", ctx.meals$);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__["MealsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    list-style-position: inside;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.meal-finder-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 'auto auto auto auto auto';\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    width: auto;\r\n}\r\n\r\n.search-bar-heading-container[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    font-size: 20px;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1.5px;\r\n    text-shadow: 0px 1px 10px rgba(0,0,0,1);\r\n    margin: 0;\r\n}\r\n\r\n.search-bar-heading-container[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 2 / 1 / 4;\r\n    margin: 10px 0px 0px 0px\r\n}\r\n\r\n.search-bar-container[_ngcontent-%COMP%] {\r\n    grid-area: 2 / 2 / 2 / 4;\r\n    position: relative;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 25px;\r\n    font-size: 15px;\r\n    color: #5c5c5c;\r\n    letter-spacing: 1px;\r\n    border-radius: 5px;\r\n    border-width: 0px;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%]:focus {\r\n        outline-color: #6b8fc9;\r\n    }\r\n\r\n.search-button-container[_ngcontent-%COMP%] {\r\n    grid-area: 2 / 4 / 2 / 4;\r\n    padding: 0px 0px 0px 10px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    padding: 4px;\r\n}\r\n\r\n.search-results-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    border: solid;\r\n    border-color: #5c5c5c;\r\n    border-width: 1px;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    list-style-type: none;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    border: 2px;\r\n    color: #5c5c5c;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: cornflowerblue;\r\n        color: #fff;\r\n        cursor: default;\r\n    }\r\n\r\n.selected-ingredients-container[_ngcontent-%COMP%] {\r\n    position: static;\r\n    grid-area: 3 / 2 / 3 / 4;\r\n}\r\n\r\n.selected-ingredients[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 15px 5px;\r\n}\r\n\r\n.selected-ingredients[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n        display: inline;\r\n        font-size: 14px;\r\n        border: 2px;\r\n        border-radius: 5px;\r\n        border-style: solid;\r\n        color: green;\r\n        background-color: rgb(256,256,256,.5);\r\n        padding: 2px 20px 2px 6px;\r\n        margin: 1px 2px;\r\n    }\r\n\r\n.selected-ingredients[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n            color: red;\r\n            background-color: rgb(256,175,175,.5);\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLHVDQUF1QztJQUN2QyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0FBRUo7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVJO1FBQ0ksZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxlQUFlO0lBQ25COztBQUVKO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUk7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixxQ0FBcUM7UUFDckMseUJBQXlCO1FBQ3pCLGVBQWU7SUFDbkI7O0FBRUk7WUFDSSxVQUFVO1lBQ1YscUNBQXFDO1FBQ3pDIiwiZmlsZSI6Im1lYWwtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCwgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1lYWwtZmluZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAnYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvJztcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnNlYXJjaC1iYXItaGVhZGluZy1jb250YWluZXIgPiBoNCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyLWhlYWRpbmctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gNDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweFxyXG59XHJcblxyXG4uc2VhcmNoLWJhci1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDIgLyA0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNWM1YzVjO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcbiAgICAuc2VhcmNoLWJhcjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZS1jb2xvcjogIzZiOGZjOTtcclxuICAgIH1cclxuXHJcbi5zZWFyY2gtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gMiAvIDQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM1YzVjNWM7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtbGlzdCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHg7XHJcbiAgICBjb2xvcjogIzVjNWM1YztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbiAgICAuc2VhcmNoLXJlc3VsdC1saXN0IGE6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbi5zZWxlY3RlZC1pbmdyZWRpZW50cy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyAzIC8gNDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWluZ3JlZGllbnRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IDVweDtcclxufVxyXG5cclxuICAgIC5zZWxlY3RlZC1pbmdyZWRpZW50cyA+IGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTYsMjU2LDI1NiwuNSk7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDIwcHggMnB4IDZweDtcclxuICAgICAgICBtYXJnaW46IDFweCAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RlZC1pbmdyZWRpZW50cyA+IGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU2LDE3NSwxNzUsLjUpO1xyXG4gICAgICAgIH1cclxuIl19 */"] });


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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this._http.get(`${this.mealsUrl}${term}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => x.length ?
            console.log(`Found meals matching "${term}"`) :
            console.log(`No meals matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchMeals', [])));
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