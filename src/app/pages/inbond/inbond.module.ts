import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InbondComponent } from './inbond.component';
import { SharedModule } from '../../shared/shared.module';  

const routes: Routes = [
  { path: '', component: InbondComponent }
];

@NgModule({
  declarations: [InbondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule   
  ]
})
export class InbondModule {}
