import { EventEmitter, ElementRef, OnDestroy } from '@angular/core';
/**
 * ResizeObserverDirective is used to detect element resizes independent from a window resize event
 */
export declare class ResizeObserverDirective implements OnDestroy {
    resize: EventEmitter<ResizeObserverEntry>;
    enabled: boolean;
    private resizeElement;
    private resizeObserver;
    private _enabled;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
    private attach();
    private detach();
}
