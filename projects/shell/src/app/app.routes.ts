import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Your route here:

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfeUser',
        exposedModule: './Module',
      }).then((m) => m.ProfileModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfeFAQ',
        exposedModule: './Module',
      }).then((m) => m.FaqModule),
  },
  {
    path: 'loss-report',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfeLossReport',
        exposedModule: './Module',
      }).then((m) => m.LossReportModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
