import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-table-demo',
  template: `
    <div>
      <h3>
        Flex Column Width Distribution
        <small>
          <a href="#"
             target="_blank">
            Source
          </a>
        </small>
        <small>
          <a href="javascript:void(0)" (click)="table.rowDetail.expandAllRows()">Expand All</a> | 
          <a href="javascript:void(0)" (click)="table.rowDetail.collapseAllRows()">Collapse All</a>
        </small>
      </h3>
      <ngx-datatable
        #myTable
        class="material"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [rows]="rows">
        <ngx-datatable-row-detail #detailRow [rowHeight]="'auto'" (toggle)="onDetailToggle($event)">
          <ng-template
            let-row="row"
            let-expanded="expanded"
            let-parentWidth="parentWidth"
            ngx-datatable-row-detail-template>
            <ngx-child-datatable
              #childDatatable
              [rows]="row.employees"
              [rowHeight]="'auto'"
              [columnMode]="'force'"
              [headerHeight]="50"
              [parentWidth]="parentWidth">
              <!-- Here just to line up the columns to demonstrate resizing -->
              <ngx-datatable-column
                [width]="50"
                [resizeable]="false"
                [sortable]="false"
                [draggable]="false"
                [canAutoResize]="false"
              ></ngx-datatable-column>
              <ngx-datatable-column name="Name" prop="name" [minWidth]="400"></ngx-datatable-column>
              <ngx-datatable-column name="Gender" prop="gender" [minWidth]="200"></ngx-datatable-column>
            </ngx-child-datatable>
          </ng-template>
        </ngx-datatable-row-detail>
      
        <ngx-datatable-column
          [width]="50"
          [resizeable]="false"
          [sortable]="false"
          [draggable]="false"
          [canAutoResize]="false"
        >
          <ng-template let-row="row" let-expanded="expanded" ngx-datatable-cell-template>
            <a
              *ngIf="row.employees.length > 0"
              class="datatable-expander"
              href="javascript:void(0)"
              [class.datatable-icon-right]="!expanded"
              [class.datatable-icon-down]="expanded"
              title="Expand/Collapse"
              (click)="toggleExpandRow(row)"
            ></a>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Name" prop="name" [minWidth]="400"></ngx-datatable-column>
        <ngx-datatable-column name="Employees" prop="employeeCount" [minWidth]="200"></ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ChildTableComponent {
  @ViewChild('myTable') table: any;

  rows = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/child-table-data.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
