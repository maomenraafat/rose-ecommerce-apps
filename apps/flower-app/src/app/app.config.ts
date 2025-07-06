import {
  ApplicationConfig,
  importProvidersFrom,
  provideAppInitializer,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appInit } from './core/utils/app.utils';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productsReducer } from './store/products/products.reducer';
import { filtersReducer } from './store/filters/filters.reducer';
import { ProductsEffects } from './store/products/products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(
      {                              
        products: productsReducer,
        filters : filtersReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability : true,
          strictActionImmutability: true,
        },
      }
    ),
    provideEffects(ProductsEffects),        

    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideAppInitializer(() => appInit()), // Here
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
  ],
};
