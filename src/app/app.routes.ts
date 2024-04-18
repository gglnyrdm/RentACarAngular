import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { ModelsListComponent } from './features/models/components/models-list/models-list.component';
import { BrandsListComponent } from './features/brands/components/brands-list/brands-list.component';

export const routes: Routes = [
  // Home
  {
    path: '', // /
    pathMatch: 'full',
    redirectTo: 'home',
    // children: []
  },
  {
    path: 'home', // /home
    // pathMatch: 'prefix', // Default // ^(/home)
    component: MainLayoutComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        component:HomePageComponent 
      },
      {
        path: "models", // /home/models
        component: ModelsListComponent,
      },
      {
        path: "brands", // /home/brands
        component: BrandsListComponent,
      },


    ]
  },
  // Test Page
  {
    path: 'layout-test',
    component: TestPageComponent
  },
  // 404 Not Found Page
  {
    path: '**', // Her path'de çalışır. En sona yazılmalı.
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  }
];
