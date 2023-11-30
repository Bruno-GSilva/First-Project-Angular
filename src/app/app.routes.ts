import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

export const routes: Routes = [    
  {
    path: '',
    component: HomescreenComponent,
  },
  {
    path: 'homescreen',
    component: HomescreenComponent,
  },
];
