import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppInitModule }  from './app/app-init/app-init.module';
/* import { AppInitModule } from '../../../app-local/app.component' */
/* import { AppModule } from '../../../app-local/app.module'; */


import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppInitModule)
  .catch((err) => console.error(err));
