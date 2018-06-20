import { EventEmitter, DoCheck, ChangeDetectorRef, KeyValueDiffers } from '@angular/core';
export declare class DataTableRowWrapperComponent implements DoCheck {
    private cd;
    private differs;
    rowDetail: any;
    groupHeader: any;
    offsetX: number;
    detailRowHeight: any;
    row: any;
    groupedRows: any;
    rowContextmenu: EventEmitter<{
        event: MouseEvent;
        row: any;
    }>;
    rowIndex: number;
    expanded: boolean;
    innerWidth: number;
    groupContext: any;
    rowContext: any;
    private rowDiffer;
    private _expanded;
    private _rowIndex;
    private _innerWidth;
    constructor(cd: ChangeDetectorRef, differs: KeyValueDiffers);
    ngDoCheck(): void;
    onContextmenu($event: MouseEvent): void;
    getGroupHeaderStyle(): any;
}
