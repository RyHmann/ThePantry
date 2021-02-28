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


function MealDetailComponent_div_0_li_16_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
} }
class MealDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
MealDetailComponent.ɵfac = function MealDetailComponent_Factory(t) { return new (t || MealDetailComponent)(); };
MealDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealDetailComponent, selectors: [["meal-detail"]], inputs: { meal: "meal" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function MealDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MealDetailComponent_div_0_Template, 17, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWFsLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meal-detail/meal-detail.component */ "A/EL");




function MealsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const meal_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(meal_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", meal_r1 === ctx_r0.selectedMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r1.name);
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
MealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealsComponent, selectors: [["meals"]], inputs: { availableMeals: "availableMeals" }, decls: 6, vars: 4, consts: [[1, "meals"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "meal"], [3, "click"], [1, "meal"]], template: function MealsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Available Meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MealsComponent_li_3_Template, 3, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meal-detail", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.availableMeals));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meal", ctx.selectedMeal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _meal_detail_meal_detail_component__WEBPACK_IMPORTED_MODULE_3__["MealDetailComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".meals[_ngcontent-%COMP%] {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 30em;\r\n}\r\n\r\n    .meals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n        position: relative;\r\n        left: 0;\r\n        background-color: #EEE;\r\n        margin: .5em;\r\n        padding: .3em 0;\r\n        height: 1.6em;\r\n        border-radius: 4px;\r\n    }\r\n\r\n    .meals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n            color: #607D8B;\r\n            background-color: #DDD;\r\n            left: .1em;\r\n        }\r\n\r\n    .meals[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n            background-color: #CFD8DC;\r\n            color: white;\r\n        }\r\n\r\n    .meals[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\r\n                background-color: #BBD8DC;\r\n                color: white;\r\n            }\r\n\r\n    .meals[_ngcontent-%COMP%]   .meal[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        font-size: small;\r\n        color: white;\r\n        padding: 0.8em 0.7em 0 0.7em;\r\n        background-color: #405061;\r\n        line-height: 1em;\r\n        position: relative;\r\n        left: -1px;\r\n        top: -4px;\r\n        height: 1.8em;\r\n        margin-right: .8em;\r\n        border-radius: 4px 0 0 4px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0lBRUk7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCOztJQUVJO1lBQ0ksY0FBYztZQUNkLHNCQUFzQjtZQUN0QixVQUFVO1FBQ2Q7O0lBRUE7WUFDSSx5QkFBeUI7WUFDekIsWUFBWTtRQUNoQjs7SUFFSTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFlBQVk7WUFDaEI7O0lBRVI7UUFDSSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLDBCQUEwQjtJQUM5QiIsImZpbGUiOiJtZWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lYWxzIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAzMGVtO1xyXG59XHJcblxyXG4gICAgLm1lYWxzIGxpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgICAgICBtYXJnaW46IC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogLjNlbSAwO1xyXG4gICAgICAgIGhlaWdodDogMS42ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgICAubWVhbHMgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgICAgICAgbGVmdDogLjFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZWFscyBsaS5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVhbHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC5tZWFscyAubWVhbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTA2MTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgIH1cclxuIl19 */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _meals_meals_component__WEBPACK_IMPORTED_MODULE_6__["MealsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    list-style-position: inside;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.meal-finder-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 'auto auto auto auto auto';\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    width: auto;\r\n}\r\n\r\n.search-bar-heading-container[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    font-size: 20px;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1.5px;\r\n    text-shadow: 0px 1px 10px rgba(0,0,0,.25);\r\n    margin: 0;\r\n}\r\n\r\n.search-bar-heading-container[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 2 / 1 / 4;\r\n    margin: 10px 0px 0px 0px\r\n}\r\n\r\n.search-bar-container[_ngcontent-%COMP%] {\r\n    grid-area: 2 / 2 / 2 / 4;\r\n    position: relative;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 30px;\r\n    font-size: 15px;\r\n    color: #5c5c5c;\r\n    letter-spacing: 1px\r\n}\r\n\r\n.search-button-container[_ngcontent-%COMP%] {\r\n    grid-area: 2 / 4 / 2 / 4;\r\n    padding: 0px 0px 0px 10px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n}\r\n\r\n.search-results-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    border: solid;\r\n    border-color: #5c5c5c;\r\n    border-width: 1px;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    list-style-type: none;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    border: 2px;\r\n    color: #5c5c5c;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.search-result-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: cornflowerblue;\r\n        color: #fff;\r\n        cursor: default;\r\n    }\r\n\r\n.selected-ingredients-container[_ngcontent-%COMP%] {\r\n    position: static;\r\n    grid-area: 3 / 2 / 3 / 4;\r\n}\r\n\r\n.selected-ingredients[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 15px 5px;\r\n}\r\n\r\n.selected-ingredients[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n        display: inline;\r\n        font-size: 14px;\r\n        border: 2px;\r\n        border-radius: 5px;\r\n        border-style: solid;\r\n        color: green;\r\n        background-color: rgb(256,256,256,.5);\r\n        padding: 2px 20px 2px 6px;\r\n        margin: 1px 2px;\r\n    }\r\n\r\n.selected-ingredients[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n            color: red;\r\n            background-color: rgb(256,175,175,.5);\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLHlDQUF5QztJQUN6QyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUk7UUFDSSxnQ0FBZ0M7UUFDaEMsV0FBVztRQUNYLGVBQWU7SUFDbkI7O0FBRUo7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFSTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLHFDQUFxQztRQUNyQyx5QkFBeUI7UUFDekIsZUFBZTtJQUNuQjs7QUFFSTtZQUNJLFVBQVU7WUFDVixxQ0FBcUM7UUFDekMiLCJmaWxlIjoibWVhbC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWVhbC1maW5kZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICdhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8nO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhci1oZWFkaW5nLWNvbnRhaW5lciA+IGg0IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLDAsMCwuMjUpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhci1oZWFkaW5nLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDQ7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHhcclxufVxyXG5cclxuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAyIC8gNDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzVjNWM1YztcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHhcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDQgLyAyIC8gNDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWM1YzVjO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LWxpc3QgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMnB4O1xyXG4gICAgY29sb3I6ICM1YzVjNWM7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4gICAgLnNlYXJjaC1yZXN1bHQtbGlzdCBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4uc2VsZWN0ZWQtaW5ncmVkaWVudHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1pbmdyZWRpZW50cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCA1cHg7XHJcbn1cclxuXHJcbiAgICAuc2VsZWN0ZWQtaW5ncmVkaWVudHMgPiBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU2LDI1NiwyNTYsLjUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAyMHB4IDJweCA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxcHggMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0ZWQtaW5ncmVkaWVudHMgPiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NiwxNzUsMTc1LC41KTtcclxuICAgICAgICB9XHJcbiJdfQ== */"] });


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