import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inbond-template', 
  templateUrl: './inbond-template.component.html', 
  styleUrls: ['./inbond-template.component.scss']
})
export class InbondTemplateComponent {

  showFilters = false;


  columns: string[] = ['select', 'time', 'module', 'ref', 'status', 'user', 'carrier', 'remarks'];
  filterColumns: string[] = ['selectfilter', 'timefilter', 'modulefilter', 'reffilter', 'statusfilter', 'userfilter', 'carrierfilter', 'remarksfilter'];


  toggleFilterRow() {
    this.showFilters = !this.showFilters;
  }

  selection = new SelectionModel<any>(true, []);

  pageSize = 25;
  totalRecords = 0;
  goToPage!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<any>([
    {
      time: '10:45 AM',
      module: 'In-Bond',
      ref: 'IB12345',
      event: 'Created',
      status: 'SUCCESS',
      user: 'Admin',
      remarks: 'In-bond created successfully',
      carrier: '43278'
    },
    {
      time: '11:10 AM',
      module: 'In-Bond',
      ref: 'IB12346',
      event: 'Validated',
      status: 'SUCCESS',
      user: 'Officer',
      remarks: 'Validation completed',
      carrier: '4327343'
    },
    {
      time: '12:00 PM',
      module: 'In-Bond',
      ref: 'IB12347',
      event: 'Submitted',
      status: 'PENDING',
      user: 'User01',
      remarks: 'Awaiting approval',
      carrier: '43278'
    },
    {
      time: '01:15 PM',
      module: 'In-Bond',
      ref: 'IB12348',
      event: 'Rejected',
      status: 'FAILED',
      user: 'Supervisor',
      remarks: 'Incorrect document',
      carrier: '43826838'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to',
      carrier: '4338778'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to',
      carrier: '434578'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to',
      carrier: '43278'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to',
      carrier: '37338'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to',
      carrier: '163278'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to',
      carrier: '490278'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to', carrier: '7868'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to',
      carrier: '21278'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to',
      carrier: '00978'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to',
      carrier: '90432'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to',
      carrier: '43278'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to',
      carrier: '43278'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    },
    {
      time: '03:50 PM',
      module: 'ISF',
      ref: '78388',
      event: 'Inbond Added',
      status: 'INFO',
      user: 'USER',
      remarks: 'assigned to'
    },
    {
      time: '02:40 PM',
      module: 'In-Bond',
      ref: '78388',
      event: 'Inbond Status Changed',
      status: 'SUCCESS',
      user: 'CBP',
      remarks: 'assigned to'
    }
  ]);



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  toggleRow(row: any) {
    this.selection.toggle(row);
  }
}