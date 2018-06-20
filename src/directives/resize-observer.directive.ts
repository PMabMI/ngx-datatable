import { Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';

@Directive({
  selector: '[resizeObserver]',
})
export class ResizeObserverDirective implements OnDestroy {
  @Output() resize: EventEmitter<Element> = new EventEmitter();

  @Input() set enabled(val: boolean) {
    this._enabled = val;
    if (val) {
      this.attach();
    } else {
      this.detach();
    }
  }
  get enabled(): boolean {
    return this._enabled;
  }

  private readonly resizeElement: Element;
  private resizeObserver: ResizeObserver;

  private _enabled: boolean = false;

  constructor(element: ElementRef) {
    this.resizeElement = element.nativeElement;
    this.resizeObserver = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.target === this.resizeElement) {
          this.resize.emit(entry.target);
          break;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.detach();
    this.resizeObserver.disconnect();
  }

  private attach(): void {
    this.resizeObserver.observe(this.resizeElement);
  }

  private detach(): void {
    this.resizeObserver.unobserve(this.resizeElement);
  }
}
