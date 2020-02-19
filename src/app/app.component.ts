import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import {LazyLoaderService} from './lazy-loader.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
  name = 'Angular';
  constructor(private loader: LazyLoaderService){}

  load(){
    this.container.clear();
    this.loader.load('my-component', this.container);
  }
}
