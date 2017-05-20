import { RouterModule, Routes } from '@angular/router';

import {
  ExampleComponent
} from './';

import { Angular2TokenService } from 'angular2-token';

const routerConfig: Routes = [
  { path: '', component: ExampleComponent }
];

export const routes = RouterModule.forRoot(routerConfig, { useHash: true });

