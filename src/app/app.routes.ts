import { Routes } from '@angular/router';

import { HomeComponent } from './module/home/home.component';
import { MainComponent } from './module/main/main.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
];
