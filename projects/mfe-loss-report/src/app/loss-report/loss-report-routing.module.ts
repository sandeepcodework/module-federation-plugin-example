import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LossReportComponent } from './loss-report.component';

const routes: Routes = [{ path: '', component: LossReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LossReportRoutingModule { }
