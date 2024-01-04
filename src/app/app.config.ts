import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
    // Inicializa e fornece a aplicação Firebase
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId":"portfolio-gerson",
      "appId":"1:839480551558:web:13995edc9a0505cd9c8907",
      "storageBucket":"portfolio-gerson.appspot.com","apiKey":"AIzaSyCkozmxp-tpEHDzU2qd-gDUFE637l4XrUA",
      "authDomain":"portfolio-gerson.firebaseapp.com",
      "messagingSenderId":"839480551558"
    }))),
    // Fornece o Firestore do Firebase
    importProvidersFrom(provideFirestore(() => getFirestore())),
    // Fornece o Storage do Firebase
    importProvidersFrom(provideStorage(() => getStorage()))]
};
