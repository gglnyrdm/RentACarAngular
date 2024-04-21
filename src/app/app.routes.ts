import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { ModelsListComponent } from './features/models/components/models-list/models-list.component';
import { BrandsListComponent } from './features/brands/components/brands-list/brands-list.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
import { UpdateBrandPageComponent } from './routers/update-brand-page/update-brand-page.component';

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
  {
    path:'createbrand',
    component:CreateBrandPageComponent
  },
  {
    path:'updatebrand',
    component:UpdateBrandPageComponent
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
