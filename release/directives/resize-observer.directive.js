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
var resize_observer_polyfill_1 = require("resize-observer-polyfill");
/**
 * ResizeObserverDirective is used to detect element resizes independent from a window resize event
 */
var ResizeObserverDirective = /** @class */ (function () {
    function ResizeObserverDirective(element) {
        var _this = this;
        this.resize = new core_1.EventEmitter();
        this._enabled = false;
        this.resizeElement = element.nativeElement;
        this.resizeObserver = new resize_observer_polyfill_1.default(function (entries, observer) {
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                if (entry.target === _this.resizeElement) {
                    _this.resize.emit(entry);
                    break;
                }
            }
        });
    }
    Object.defineProperty(ResizeObserverDirective.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (val) {
            this._enabled = val;
            if (val) {
                this.attach();
            }
            else {
                this.detach();
            }
        },
        enumerable: true,
        configurable: true
    });
    ResizeObserverDirective.prototype.ngOnDestroy = function () {
        this.detach();
        this.resizeObserver.disconnect();
    };
    ResizeObserverDirective.prototype.attach = function () {
        this.resizeObserver.observe(this.resizeElement);
    };
    ResizeObserverDirective.prototype.detach = function () {
        this.resizeObserver.unobserve(this.resizeElement);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ResizeObserverDirective.prototype, "resize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ResizeObserverDirective.prototype, "enabled", null);
    ResizeObserverDirective = __decorate([
        core_1.Directive({
            selector: '[resizeObserver]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ResizeObserverDirective);
    return ResizeObserverDirective;
}());
exports.ResizeObserverDirective = ResizeObserverDirective;
//# sourceMappingURL=resize-observer.directive.js.map