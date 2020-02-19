import { NgModuleFactory, Type } from '@angular/core';

export const lazyWidgets: { name: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    name: 'lazy-comp',
    loadChildren: () => import('./lazy-comp/lazy-mod.module').then(m => m.LazyModModule)
  },
  {
    name: 'my-component',
    loadChildren: () => import('./my-module/my-module.module').then(m => m.MyModuleModule)
  }
]

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.name] = w.loadChildren;
  }
  return result;
}