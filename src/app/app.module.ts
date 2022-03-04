import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { VentasModule } from './ventas/ventas.module';

/* Cambiar el local de la app, es decir, el idioma por defecto */
import localEsMX from '@angular/common/locales/es-MX';
import localEsFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsMX);
registerLocaleData(localEsFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRouterModule,
    SharedModule, 
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
