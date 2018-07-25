import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ApiHealthComponent } from './api_health/api_health.component'

import { ApiHealthService } from './api_health/api_health.service'

@NgModule({
  declarations: [
    AppComponent, ApiHealthComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ApiHealthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
