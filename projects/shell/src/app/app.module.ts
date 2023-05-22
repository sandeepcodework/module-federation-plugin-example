import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from 'projects/mfe-user/src/app/profile/profile.component';
import { FaqComponent } from 'projects/mfe-faq/src/app/faq/faq.component';
import { LossReportComponent } from 'projects/mfe-loss-report/src/app/loss-report/loss-report.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    ProfileComponent,
    LossReportComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
