import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { WidgetOneComponent } from '../pages/inbond/widgets/widget-one/widget-one.component';
import { WidgetTwoComponent } from '../pages/inbond/widgets/widget-two/widget-two.component';
import { WidgetThreeComponent } from '../pages/inbond/widgets/widget-three/widget-three.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class SharedModule {}
