import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },


  // Your route here:

  // {
  //   path: 'flights',
  //   loadChildren: () => import('mfe1/flights.module').then( m => m.FlightsModule)
  // },
  {
    path: 'flights',
    // Remove the need to write any remote configuration in webpack.config.js file
    // Make the application and components more dynamic in nature and webpack config 
    // during the webpack was compiled and showing the information of where the mfe need to be pull from.
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      exposedModule: './flights.module'
    }).then(m => m.FlightsModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

