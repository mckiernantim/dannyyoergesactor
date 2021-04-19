(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AboutComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block container one-column image ", image_r1.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AboutComponent {
    constructor() {
        this.colors = [
            'purple',
            'orange',
            'green',
            'blue',
        ];
        this.images = [
            { path: "../../assets/about/elephant.jpg",
                color: this.colors[0]
            },
            { path: "../../assets/about/arches.jpg",
                color: this.colors[1]
            },
            { path: "../../assets/about/cinque.jpg",
                color: this.colors[2]
            },
            { path: "../../assets/about/waterfall.jpg",
                color: this.colors[3]
            },
            { path: "../../assets/about/americanGothic.jpeg",
                color: this.colors[0]
            },
        ];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 8, vars: 1, consts: [[1, "container", "two-column", "no-center"], [1, "block", "main-image", "center"], [1, "block", "center"], [1, "text"], [3, "class", 4, "ngFor", "ngForOf"], [1, "about-image", 3, "src"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Tousled food truck polaroid, salvia bespoke small batch Pinterest Marfa. Fingerstache authentic craft beer, food truck Banksy Carles kale chips hoodie. Trust fund artisan master cleanse fingerstache post-ironic, fashion axe art party Etsy direct trade retro organic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutComponent_div_7_Template, 2, 4, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".main-image[_ngcontent-%COMP%]{\n    background-image:url('WarHorse.jpg');\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 92%;\n    height: 82%;\n    background-position-x: right\n\n}\n.about-image[_ngcontent-%COMP%]{\n    max-width: 50%;\n    margin:0 auto;\n    display:flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBMEQ7SUFDMUQsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsV0FBVztJQUNYOztBQUVKO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi9hc3NldHMvYWJvdXQvV2FySG9yc2UuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDkyJTtcbiAgICBoZWlnaHQ6IDgyJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0XG5cbn1cbi5hYm91dC1pbWFnZXtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/Sl2":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/breakpoint.service */ "dukj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/layout.service */ "nqAl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panel/panel.component */ "Ro/O");






class LandingComponent {
    constructor(ls) {
        this.ls = ls;
        this.images = [
            "../../assets/images/landing/AboutMe.png",
            "../../assets/images/landing/HeadshotImage.png",
            "../../assets/images/landing/MediaImage.png",
            "../../assets/images/landing/Resume_ReelImage.png"
        ];
        this.labels = [
            "About Me",
            "Media",
            "Resume/CV",
            "Teaching"
        ];
        // colors have intentionally left open parenthetheeeeth because 
        // opacity is established later in in the template of the panel
        this.colors = [
            "rgba(245, 166, 35, ",
            "rgba(74, 144, 226,",
            "rgba(126, 211, 33,",
            "rgba(200, 76, 225,"
        ];
        this.offset = [
            "55%",
            "52%",
            "105%",
            "55%"
        ];
        this.links = [
            "About Me",
            "Pics",
            "Media",
            "Resume"
        ];
        this.styling = "";
    }
    ngOnInit() {
        this.ls.subscribeToLayoutChanges().subscribe(observerResponse => {
            if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].extraSmall)) {
                this.styling = "one-column";
            }
            else if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].small)) {
            }
            else if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].medium)) {
                this.styling = "two-column";
            }
            else if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].large)) {
                this.styling = "two-column";
            }
        });
    }
    toggleLayout() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 5, vars: 21, consts: [[1, "main-container", 3, "ngClass"], [1, "slideRight", "fadeIn", "panel", "delay8", "fade6", 2, "width", "100%", "height", "100%", 3, "label", "color", "offset", "link", "path"], [1, "slideLeft", "fadeIn", "panel", "delay8", "fade6", 2, "width", "100%", "height", "100%", 3, "label", "color", "offset", "link", "path"], [1, "slideRight", "fadeIn", "panel", "delay10", "fade8", 2, "width", "100%", "height", "100%", 3, "label", "color", "offset", "link", "path"], [1, "slideLeft", "fadeIn", "panel", "delay10", "fade8", 2, "width", "100%", "height", "100%", 3, "label", "color", "offset", "link", "path"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.styling);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.labels[0])("color", ctx.colors[0])("offset", ctx.offset[0])("link", ctx.links[0])("path", ctx.images[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.labels[1])("color", ctx.colors[1])("offset", ctx.offset[1])("link", ctx.links[1])("path", ctx.images[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.labels[2])("color", ctx.colors[2])("offset", ctx.offset[2])("link", ctx.links[2])("path", ctx.images[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.labels[3])("color", ctx.colors[3])("offset", ctx.offset[3])("link", ctx.links[3])("path", ctx.images[3]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"]], styles: [".main-container[_ngcontent-%COMP%]{\n    display:grid;\n    align-items: center;\n    justify-items: center;\n\n    height:80vh;\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCOztJQUVyQixXQUFXOztBQUVmIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6ODB2aDtcbiBcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timmckiernan/Desktop/DannySite/src/main.ts */"zUnb");


/***/ }),

/***/ "0d/x":
/*!*****************************************************!*\
  !*** ./src/app/components/media/media.component.ts ***!
  \*****************************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pics_pics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pics/pics.component */ "vSMM");
/* harmony import */ var _headshots_headshots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../headshots/headshots.component */ "FSN1");





function MediaComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I filmed a co-star spot for AMC\u2019s Turn on location in Richmond, VA. I got to speak in a an earlier British-American Dialect, fire a musket, and clobber Jamie Bell with the butt of my rifle! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " My wife Rachel Rizzuto makes an anti-Valentine\u2019s day show every year called Love Sucks. I\u2019ve been in it four years running. This past year I wrote and directed eight scenes (found throughout). You\u2019ll also catch me dancing (7:31), acting (24:03, 30:28), playing the sax (28:45), and busting out my best Michael McDonald (42:31). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "When War Horse played the Kennedy Center in my home town of Washington DC, I got to speak with the lovely Jeffrey Brown on PBS News Hour\u2019s Art Beat. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "iframe", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-headshots");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MediaComponent {
    constructor() {
        this.modes = [
            "video",
            "production",
            "heads"
        ];
    }
    ngOnInit() {
        this.mode = this.modes[1];
        this.toggleMode(1, document.getElementById('1'));
    }
    toggleMode(num, target) {
        console.log(target);
        if (this.selected) {
            this.selected.classList.toggle("selected");
        }
        this.selected = target;
        target.classList.toggle("selected");
        this.mode = this.modes[num];
    }
}
MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(); };
MediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaComponent, selectors: [["app-media"]], decls: 17, vars: 3, consts: [[1, "button-container"], [1, "media-buttons"], ["id", "0", 1, "toggle", 3, "click"], ["video", ""], ["id", "1", 1, "toggle", 3, "click"], ["pics", ""], ["id", "2", 1, "toggle", 3, "click"], ["heads", ""], [4, "ngIf"], [1, "no-gap", "fadeIn", "fade4", "delay4"], [1, "orange", "two-column", "short", "container"], [1, "block", "blurb"], [1, "block"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://player.vimeo.com/video/488726306"), "width", "640", "height", "400", "frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", ""], [1, "blue", "two-column", "short", "container"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://player.vimeo.com/video/317841369"), "width", "640", "height", "360", "frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", ""], [1, "green", "two-column", "short", "container"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://player.pbs.org/viralplayer/2302386822/"), "allowfullscreen", "", "width", "640", "height", "400", "frameborder", "0", "allow", "autoplay; fullscreen"]], template: function MediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaComponent_Template_a_click_3_listener($event) { return ctx.toggleMode($event.target.id, $event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaComponent_Template_a_click_7_listener($event) { return ctx.toggleMode($event.target.id, $event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaComponent_Template_a_click_11_listener($event) { return ctx.toggleMode($event.target.id, $event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Heads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MediaComponent_div_14_Template, 22, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MediaComponent_div_15_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MediaComponent_div_16_Template, 2, 0, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === ctx.modes[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === ctx.modes[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === ctx.modes[2]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _pics_pics_component__WEBPACK_IMPORTED_MODULE_2__["PicsComponent"], _headshots_headshots_component__WEBPACK_IMPORTED_MODULE_3__["HeadshotsComponent"]], styles: [".blurb[_ngcontent-%COMP%]{\n    padding:15%;\n    margin:0 auto;\n    font-size:1.2em;\n    color:white;\n    text-align: center;\n    text-shadow: 1px 1px black;\n   \n}\n.selected[_ngcontent-%COMP%]{\n    color: #c84ce1 \n}\nh3[_ngcontent-%COMP%]{\n     border-bottom:1px solid white\n}\n.no-gap[_ngcontent-%COMP%]{\n    grid-gap: 0;\n}\n.media-buttons[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n.button-container[_ngcontent-%COMP%]{\n    margin:1% auto;\n}\na[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDBCQUEwQjs7QUFFOUI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtLQUNLO0FBQ0w7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJtZWRpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdXJie1xuICAgIHBhZGRpbmc6MTUlO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgZm9udC1zaXplOjEuMmVtO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcbiAgIFxufVxuLnNlbGVjdGVke1xuICAgIGNvbG9yOiAjYzg0Y2UxIFxufVxuaDN7XG4gICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlXG59XG4ubm8tZ2Fwe1xuICAgIGdyaWQtZ2FwOiAwO1xufVxuLm1lZGlhLWJ1dHRvbnN7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG59XG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBtYXJnaW46MSUgYXV0bztcbn1cbmF7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media',
                templateUrl: './media.component.html',
                styleUrls: ['./media.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ATnn":
/*!************************************************!*\
  !*** ./src/app/teaching/teaching.component.ts ***!
  \************************************************/
/*! exports provided: TeachingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingComponent", function() { return TeachingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/gallery/gallery.component */ "EgB/");



class TeachingComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeachingComponent.ɵfac = function TeachingComponent_Factory(t) { return new (t || TeachingComponent)(); };
TeachingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeachingComponent, selectors: [["app-teaching"]], decls: 2, vars: 0, consts: [[1, "container"], [1, "fadeIn", "fade4"]], template: function TeachingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-gallery", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeachingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teaching',
                templateUrl: './teaching.component.html',
                styleUrls: ['./teaching.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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

/***/ "EgB/":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gallery */ "j6s6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_img_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showGallery($event.target.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("thumb-container ", pic_r1.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pic_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GalleryComponent {
    constructor(gallery) {
        this.gallery = gallery;
        this.pics = [];
        this.colors = [
            'purple',
            'orange',
            'green',
            'blue',
        ];
        this.imgs = [];
    }
    ngOnInit() {
        let counter = 0;
        for (let i = 0; i < this.pics.length; i++) {
            if (counter > 3) {
                counter = 0;
            }
            this.pics[i].color = this.colors[counter];
            counter++;
            this.imgs.push({ path: this.pics[i].path });
        }
        console.log(this.pics);
    }
    //  ngOnChanges() {
    //   let counter = 0
    //   for(let i=0; i<this.pics.length;i++){
    //     if(counter > 3){
    //       counter = 0
    //     }
    //     this.pics[i].color = this.colors[counter]
    //     counter++
    //     this.imgs.push({path:this.pics[i].path})
    // }
    // console.log(this.pics)
    //  }
    showGallery(index) {
        let prop = {
            images: this.imgs,
            index,
        };
        // this.pics.forEach(pic=> prop.images.push({path:pic.path}))
        console.log(prop);
        this.gallery.load(prop);
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_gallery__WEBPACK_IMPORTED_MODULE_1__["Gallery"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { pics: "pics" }, decls: 2, vars: 1, consts: [[1, "gallery-container"], [3, "class", 4, "ngFor", "ngForOf"], [1, "thumbnail", 3, "id", "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pics);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".gallery-container[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n  \n    width: 90vw;\n  }\n  .thumb-container[_ngcontent-%COMP%]{\n      padding-top: 8%;\n      padding-left: 10%;\n      padding-right:10%;\n      padding-bottom:5%;\n  }\n  .thumbnail[_ngcontent-%COMP%]{\n    max-width:100%;\n  }\n  .thumbnail[_ngcontent-%COMP%]:hover{\n    transform: scale(1.02);\n  }\n  .thumbnail[_ngcontent-%COMP%]:hover{\n    opacity:.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7O0lBRTlCLFdBQVc7RUFDYjtFQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsaUJBQWlCO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFFRjtJQUNJO0FBQ0oiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnktY29udGFpbmVye1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIFxuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG4gIC50aHVtYi1jb250YWluZXJ7XG4gICAgICBwYWRkaW5nLXRvcDogOCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6MTAlO1xuICAgICAgcGFkZGluZy1ib3R0b206NSU7XG4gIH1cbiAgLnRodW1ibmFpbHtcbiAgICBtYXgtd2lkdGg6MTAwJTtcbiAgfVxuICAudGh1bWJuYWlsOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIH1cbiBcbi50aHVtYm5haWw6aG92ZXJ7XG4gICAgb3BhY2l0eTouOFxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: angular_gallery__WEBPACK_IMPORTED_MODULE_1__["Gallery"] }]; }, { pics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FSN1":
/*!*************************************************************!*\
  !*** ./src/app/components/headshots/headshots.component.ts ***!
  \*************************************************************/
/*! exports provided: HeadshotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadshotsComponent", function() { return HeadshotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gallery/gallery.component */ "EgB/");



class HeadshotsComponent {
    constructor() {
        this.heads = [
            {
                path: '../../assets/Headshots/legitS.jpg',
                color: ""
            },
            {
                path: '../../assets/Headshots/legits2.jpg',
                color: ""
            },
            {
                path: '../../assets/Headshots/shortC.jpg',
                color: ""
            },
            {
                path: '../../assets/Headshots/longC.jpg',
                color: ""
            },
            {
                path: '../../assets/Headshots/longL.jpg',
                color: ""
            },
            {
                path: '../../assets/Headshots/longL2.jpg',
                color: ""
            },
            {
                path: '../../assets/Headshots/IMG_8459.jpeg',
                color: ""
            },
            {
                path: '../../assets/Headshots/IMG_9560.jpeg',
                color: ""
            },
            {
                path: '../../assets/Headshots/IMG_9674.jpeg',
                color: ""
            },
            {
                path: '../../assets/Headshots/IMG_9717.JPG',
                color: ""
            },
            {
                path: '../../assets/Headshots/IMG_9757.jpeg',
                color: ""
            },
        ];
    }
    ngOnInit() {
    }
}
HeadshotsComponent.ɵfac = function HeadshotsComponent_Factory(t) { return new (t || HeadshotsComponent)(); };
HeadshotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadshotsComponent, selectors: [["app-headshots"]], decls: 2, vars: 1, consts: [[1, "container"], [1, "fadeIn", "fade4", 3, "pics"]], template: function HeadshotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-gallery", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pics", ctx.heads);
    } }, directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkc2hvdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadshotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-headshots',
                templateUrl: './headshots.component.html',
                styleUrls: ['./headshots.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FooterComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", link_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FooterComponent {
    constructor() {
        this.links = [
            {
                text: "Facebook",
                url: "",
                icon: "../../assets/icons/facebook.png"
            },
            {
                text: "Twitter",
                url: "",
                icon: "../../assets/icons/twitter.png"
            },
            {
                text: "Instagram",
                url: "",
                icon: "../../assets/icons/instagram.png"
            },
            {
                text: "Actors Access",
                url: "",
                icon: "../../assets/icons/AA.png"
            },
            {
                text: "Email",
                url: "",
                icon: "../../assets/icons/email.png"
            },
        ];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 1, consts: [[1, "border-top"], [1, "footer-container"], [1, "footer-bar"], [1, "icon-list"], [4, "ngFor", "ngForOf"], [1, "footer-link", 3, "href"], [1, "footer-item", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_li_4_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".footer-container[_ngcontent-%COMP%]{\n    \n   \n    align-items: center;\n    width: 100%; \n    margin:auto;\n\tdisplay: flex; \n\tflex-direction: row; \n\tjustify-content: space-evenly; \n\talign-items: center; \n    flex-wrap: wrap;\n    background: rgb(11,95,186);\n    background: linear-gradient(90deg, rgba(11,95,186,1) 0%, rgba(81,151,226,1) 100%)\n    \n}\n.footer-title[_ngcontent-%COMP%]{\n    text-align: left;\n   \n    margin-left:-5%;\n\n}\n.footer-tag[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n    padding-bottom:0;\n}\n.footer-item[_ngcontent-%COMP%]{\n    max-width: 40px;\n    max-height: 40px;\n}\n.footer-bar[_ngcontent-%COMP%]{\n    padding:0% 5%;\n    width:30%;\n   \n   \n}\n.icon-list[_ngcontent-%COMP%]{\n    display: inline-flex;\n    list-style-type:none;\n    justify-content: space-evenly;\n    width: 100%;\n}\n.footer-link[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n}\n.border-top[_ngcontent-%COMP%]{\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3QixtQkFBbUI7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQjs7QUFFSjtBQUNBO0lBQ0ksZ0JBQWdCOztJQUVoQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7OztBQUdiO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTs7QUFFQSIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY29udGFpbmVye1xuICAgIFxuICAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWFyZ2luOmF1dG87XG5cdGRpc3BsYXk6IGZsZXg7IFxuXHRmbGV4LWRpcmVjdGlvbjogcm93OyBcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxuXHRhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZDogcmdiKDExLDk1LDE4Nik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDExLDk1LDE4NiwxKSAwJSwgcmdiYSg4MSwxNTEsMjI2LDEpIDEwMCUpXG4gICAgXG59XG4uZm9vdGVyLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBcbiAgICBtYXJnaW4tbGVmdDotNSU7XG5cbn1cbi5mb290ZXItdGFne1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206MDtcbn1cbi5mb290ZXItaXRlbXtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbn1cbi5mb290ZXItYmFye1xuICAgIHBhZGRpbmc6MCUgNSU7XG4gICAgd2lkdGg6MzAlO1xuICAgXG4gICBcbn1cbi5pY29uLWxpc3R7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyLWxpbmt7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm9yZGVyLXRvcHtcbiAgIFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ro/O":
/*!*****************************************************!*\
  !*** ./src/app/components/panel/panel.component.ts ***!
  \*****************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PanelComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.link);
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], inputs: { path: "path", label: "label", color: "color", offset: "offset", link: "link" }, decls: 5, vars: 13, consts: [[1, "panel-container"], [1, "overlay"], [1, "label", "visible"], [3, "routerLink"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-image:url(", ctx.path, ") ;background-position-y:", ctx.offset, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-color:", ctx.color, "  .3);border:15px solid ", ctx.color, " .9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", ctx.color, " .9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".panel-container[_ngcontent-%COMP%]{\n    display: flex;\n    height:100%;\n    text-align: center;\n    width:100%;\n    background-size: cover;\n}\n.label[_ngcontent-%COMP%]{\n    margin-top:25%;\n    margin-left:25%;\n    margin-right:25%;\n    box-shadow: 3px 3px 5px 6px rgb(75, 74, 74);\n    z-index: 1;\n}\n.panel-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover, .panel-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:focus, .panel-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:hover  {\n  transform: scale(1.02);\n}\n.overlay[_ngcontent-%COMP%]{\n \n\n    height:100%;\n    width: 100%;\n\n   \n}\n.overlay[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\n    opacity:0.45 !important;\n   \n    background-color:blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsVUFBVTtBQUNkO0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUlBOzs7SUFHSSxXQUFXO0lBQ1gsV0FBVzs7O0FBR2Y7QUFDQTtJQUNJLHVCQUF1Qjs7SUFFdkIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5sYWJlbHtcbiAgICBtYXJnaW4tdG9wOjI1JTtcbiAgICBtYXJnaW4tbGVmdDoyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OjI1JTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggcmdiKDc1LCA3NCwgNzQpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wYW5lbC1jb250YWluZXIgLmxhYmVsOmhvdmVyICxcbi5wYW5lbC1jb250YWluZXIgLmxhYmVsOmZvY3VzLFxuLnBhbmVsLWNvbnRhaW5lciAub3ZlcmxheTpob3ZlciAge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG5cblxuLm92ZXJsYXl7XG4gXG5cbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgXG59XG4ub3ZlcmxheSA6aG92ZXJ7XG4gICAgb3BhY2l0eTowLjQ1ICFpbXBvcnRhbnQ7XG4gICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XG59ICAgXG5cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.css']
            }]
    }], function () { return []; }, { path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/breakpoint.service */ "dukj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/layout.service */ "nqAl");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");







class AppComponent {
    constructor(ls) {
        this.ls = ls;
        this.title = 'DannyYoerges';
    }
    ngOnInit() {
        let check = this.ls.isBreakpointActive;
        this.ls.subscribeToLayoutChanges().subscribe(observerResponse => {
            // You will have all matched breakpoints in observerResponse
            if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].extraSmall)) {
                console.log("extra small");
                this.ls.toggleLayout(0);
            }
            else if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].small)) {
                this.ls.toggleLayout(1);
                console.log("small");
            }
            else if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].medium)) {
                this.ls.toggleLayout(2);
                console.log("extra medium");
            }
            else if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].large)) {
                this.ls.toggleLayout(3);
                console.log("extra large");
            }
            else if (this.ls.isBreakpointActive(_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_0__["CustomBreakpointNames"].extraLarge)) {
                this.ls.toggleLayout(4);
                console.log("extra large");
            }
        });
    }
    ngOnDestroy() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[2, "padding", "0 5%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_headshots_headshots_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/headshots/headshots.component */ "FSN1");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panel/panel.component */ "Ro/O");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_media_media_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/media/media.component */ "0d/x");
/* harmony import */ var _components_pics_pics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pics/pics.component */ "vSMM");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/resume/resume.component */ "h+Is");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var angular_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-gallery */ "j6s6");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "EgB/");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./teaching/teaching.component */ "ATnn");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            angular_gallery__WEBPACK_IMPORTED_MODULE_15__["IvyGalleryModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["NoopAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _components_media_media_component__WEBPACK_IMPORTED_MODULE_10__["MediaComponent"],
        _components_pics_pics_component__WEBPACK_IMPORTED_MODULE_11__["PicsComponent"],
        _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
        _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_18__["TeachingComponent"],
        _components_headshots_headshots_component__WEBPACK_IMPORTED_MODULE_0__["HeadshotsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        angular_gallery__WEBPACK_IMPORTED_MODULE_15__["IvyGalleryModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["NoopAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _components_media_media_component__WEBPACK_IMPORTED_MODULE_10__["MediaComponent"],
                    _components_pics_pics_component__WEBPACK_IMPORTED_MODULE_11__["PicsComponent"],
                    _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
                    _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
                    _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_18__["TeachingComponent"],
                    _components_headshots_headshots_component__WEBPACK_IMPORTED_MODULE_0__["HeadshotsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    angular_gallery__WEBPACK_IMPORTED_MODULE_15__["IvyGalleryModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["NoopAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dukj":
/*!************************************************!*\
  !*** ./src/app/services/breakpoint.service.ts ***!
  \************************************************/
/*! exports provided: CustomBreakpointNames, BreakpointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBreakpointNames", function() { return CustomBreakpointNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointsService", function() { return BreakpointsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const CustomBreakpointNames = {
    extraSmall: 'extraSmall',
    small: 'small',
    medium: 'medium',
    large: 'large',
    extraLarge: 'extraLarge'
};
class BreakpointsService {
    constructor() {
        this.breakpoints = {
            '(max-width: 220px)': CustomBreakpointNames.extraSmall,
            '(max-width: 480px)': CustomBreakpointNames.small,
            '(max-width: 1200x)': CustomBreakpointNames.medium,
            '(max-width:2399px)': CustomBreakpointNames.large,
            '(min-width: 2400px)': CustomBreakpointNames.extraLarge
        };
    }
    getBreakpoints() {
        return Object.keys(this.breakpoints);
    }
    getBreakpointName(breakpointValue) {
        return this.breakpoints[breakpointValue];
    }
}
BreakpointsService.ɵfac = function BreakpointsService_Factory(t) { return new (t || BreakpointsService)(); };
BreakpointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreakpointsService, factory: BreakpointsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "h+Is":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "resume"], [1, "block"], ["href", "../../assets/resume.pdf", "download", ""]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "download resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".object-container[_ngcontent-%COMP%]{\n    max-width: 500px;\n    max-height:75vh\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0oiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2JqZWN0LWNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1heC1oZWlnaHQ6NzV2aFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return ["active"]; };
function NavbarComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border-color:", link_r1.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.text);
} }
class NavbarComponent {
    constructor() {
        this.links = [
            {
                text: "About Me",
                color: '#f6b74c'
            },
            {
                text: "Teaching",
                color: "#4991de"
            },
            {
                text: "Media",
                color: "#7ed320"
            },
            {
                text: "Resume",
                color: "#c74ce2"
            },
        ];
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 8, vars: 1, consts: [[1, "nav-container"], ["routerLink", "", 1, "nav-title"], ["class", "navbar", 4, "ngFor", "ngForOf"], [1, "nav-tag"], [2, "margin", "0"], [1, "navbar"], [3, "routerLink", "routerLinkActive"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Danny Yorgeus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_ul_4_Template, 3, 7, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Actor. AEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav-container[_ngcontent-%COMP%]{\n    width: 100%; \n\tdisplay: flex; \n\tflex-direction: row; \n\tjustify-content: space-evenly; \n\talign-items: center; \n\tflex-wrap: wrap;\n}\n.nav-title[_ngcontent-%COMP%]{\n    text-align: left;\n    \n    margin-left:-5%;\n\n}\n.nav-tag[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n    padding-bottom:0;\n    border-bottom:1px solid #4991de\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztDQUNkLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7O0lBRWhCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTsgXG5cdGRpc3BsYXk6IGZsZXg7IFxuXHRmbGV4LWRpcmVjdGlvbjogcm93OyBcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxuXHRhbGlnbi1pdGVtczogY2VudGVyOyBcblx0ZmxleC13cmFwOiB3cmFwO1xufVxuLm5hdi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIFxuICAgIG1hcmdpbi1sZWZ0Oi01JTtcblxufVxuLm5hdi10YWd7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM0OTkxZGVcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nqAl":
/*!********************************************!*\
  !*** ./src/app/services/layout.service.ts ***!
  \********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _breakpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breakpoint.service */ "dukj");





class LayoutService {
    constructor(breakpointObserver, breakpointService) {
        this.breakpointObserver = breakpointObserver;
        this.breakpointService = breakpointService;
        this.layouts = [
            "extraSmall",
            "smmall",
            "medium",
            "large",
            "extraLarge"
        ];
        this.layout = '';
        this.activeBreakpoints = [];
    }
    toggleLayout(ind) {
        this.layout = this.layouts[ind];
        console.log(this.layout + " !!!!!!!!!!!!!!! ");
    }
    subscribeToLayoutChanges() {
        return this.breakpointObserver
            .observe(this.breakpointService.getBreakpoints())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((observeResponse) => this.parseBreakpointsResponse(observeResponse.breakpoints)));
    }
    parseBreakpointsResponse(breakpoints) {
        this.activeBreakpoints = [];
        Object.keys(breakpoints).map((key) => {
            if (breakpoints[key]) {
                this.activeBreakpoints.push(this.breakpointService.getBreakpointName(key));
            }
        });
        return this.activeBreakpoints;
    }
    isBreakpointActive(breakpointName) {
        return this.activeBreakpoints.find(breakpoint => breakpoint === breakpointName);
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_breakpoint_service__WEBPACK_IMPORTED_MODULE_3__["BreakpointsService"])); };
LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }, { type: _breakpoint_service__WEBPACK_IMPORTED_MODULE_3__["BreakpointsService"] }]; }, null); })();


/***/ }),

/***/ "vSMM":
/*!***************************************************!*\
  !*** ./src/app/components/pics/pics.component.ts ***!
  \***************************************************/
/*! exports provided: PicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicsComponent", function() { return PicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gallery/gallery.component */ "EgB/");



class PicsComponent {
    constructor() {
        this.pics = [
            {
                path: '../../assets/images/head1.jpg',
                color: ""
            },
            {
                path: '../../assets/images/head2.jpg',
                color: ""
            },
            {
                path: '../../assets/images/head3.jpg',
                color: ""
            },
            {
                path: '../../assets/images/head4.jpg',
                color: ""
            }
        ];
    }
    ngOnInit() {
    }
}
PicsComponent.ɵfac = function PicsComponent_Factory(t) { return new (t || PicsComponent)(); };
PicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicsComponent, selectors: [["app-pics"]], decls: 2, vars: 1, consts: [[1, "container"], [1, "fadeIn", "fade4", 3, "pics"]], template: function PicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-gallery", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pics", ctx.pics);
    } }, directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pics',
                templateUrl: './pics.component.html',
                styleUrls: ['./pics.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teaching/teaching.component */ "ATnn");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/resume/resume.component */ "h+Is");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_media_media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/media/media.component */ "0d/x");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");









const routes = [
    { path: "", component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: "About Me", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: "Media", component: _components_media_media_component__WEBPACK_IMPORTED_MODULE_4__["MediaComponent"] },
    { path: "Resume", component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__["ResumeComponent"] },
    { path: "Teaching", component: _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_0__["TeachingComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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