import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LossReportRoutingModule } from './loss-report-routing.module';
import { LossReportComponent } from './loss-report.component';

@NgModule({
  declarations: [LossReportComponent],
  imports: [CommonModule, LossReportRoutingModule],
  exports: [LossReportComponent],
})
export class LossReportModule {}
