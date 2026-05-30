import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTaiga } from '@taiga-ui/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Taiga UI provides a provider factory `provideTaiga()` for standalone apps
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTaiga(),
  ],
};
