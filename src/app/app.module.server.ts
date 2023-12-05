import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {provideClientHydration} from "@angular/platform-browser";
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
