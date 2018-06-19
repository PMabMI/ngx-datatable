import { EventEmitter, ElementRef } from '@angular/core';
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
export declare class VisibilityDirective {
    private element;
    isVisible: boolean | undefined;
    visible: EventEmitter<boolean>;
    constructor(element: ElementRef);
    checkVisibility(): void;
    onVisibilityChange(visible: boolean): void;
}
