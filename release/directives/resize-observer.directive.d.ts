import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class ResizeObserverDirective implements OnDestroy {
    resize: EventEmitter<Element>;
    enabled: boolean;
    private readonly resizeElement;
    private resizeObserver;
    private _enabled;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
    private attach();
    private detach();
}
