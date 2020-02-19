import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {provideRoutes} from '@angular/router';
import {lazyWidgets, lazyArrayToObj} from './lazy-widgets';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';
import { LazyLoaderService } from './lazy-loader.service';
import {LAZY_WIDGETS} from './tokens';

import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DynamicModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }, LazyLoaderService, provideRoutes(lazyWidgets)]
})
export class AppModule { }
