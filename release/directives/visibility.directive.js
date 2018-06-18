"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(element) {
        this.element = element;
        this.visible = new core_1.EventEmitter();
    }
    VisibilityDirective.prototype.checkVisibility = function () {
        var _a = this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
        this.onVisibilityChange(offsetHeight > 0 && offsetWidth > 0);
    };
    VisibilityDirective.prototype.onVisibilityChange = function (visible) {
        var _this = this;
        if (visible === this.isVisible)
            return;
        this.isVisible = visible;
        // trigger zone recalc for columns
        setTimeout(function () {
            _this.visible.emit(visible);
        });
    };
    __decorate([
        core_1.HostBinding('class.visible'),
        __metadata("design:type", Boolean)
    ], VisibilityDirective.prototype, "isVisible", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], VisibilityDirective.prototype, "visible", void 0);
    VisibilityDirective = __decorate([
        core_1.Directive({ selector: '[visibilityObserver]' }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], VisibilityDirective);
    return VisibilityDirective;
}());
exports.VisibilityDirective = VisibilityDirective;
//# sourceMappingURL=visibility.directive.js.map