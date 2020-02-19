import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';

import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  imports: [
    CommonModule,
    DynamicModule.forRoot()
  ],
  declarations: [MyComponentComponent]
})
export class MyModuleModule { }