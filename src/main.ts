import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {App2Module} from './app2/app2.module';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(App2Module)
  .catch(err => console.error(err));
