import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { ModelsListComponent } from './features/models/components/models-list/models-list.component';
import { BrandsListComponent } from './features/brands/components/brands-list/brands-list.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
import { UpdateBrandPageComponent } from './routers/update-brand-page/update-brand-page.component';
import { CreateModelPageComponent } from './routers/create-model-page/create-model-page.component';
import { UpdateModelPageComponent } from './routers/update-model-page/update-model-page.component';
import { ModelDetailsPageComponent } from './routers/model-details-page/model-details-page.component';
import { CustomerListComponent } from './features/customers/components/customer-list/customer-list.component';
import { CarsListComponent } from './features/cars/components/cars-list/cars-list.component';
import { RentalListComponent } from './features/rentals/components/rental-list/rental-list.component';
import { PipeExampleComponent } from './features/pipes-example/pipe-example/pipe-example.component';
import { securedRouteGuard } from './shared/guards/SecuredRoute.guard';
import { logableRouteGuard } from './shared/guards/LogableRoute.guard';

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
      {
        path: "customers", 
        component: CustomerListComponent
      },
      {
        path: "cars", 
        component: CarsListComponent
      },
      {
        path: "rentals", 
        component: RentalListComponent
      },


    ]
  },
  {
    path:'createbrand',
    component:CreateBrandPageComponent,
    canActivate: [securedRouteGuard, logableRouteGuard],
    data:
      {
        requiredUserRole: 'admin',
      },
  },
  {
    path:'updatebrand',
    component:UpdateBrandPageComponent
  },
  {
    path:'createmodel',
    component:CreateModelPageComponent
  },
  {
    path:'updatemodel',
    component:UpdateModelPageComponent
  },
  {
    path:'models/:modelId',
    component:ModelDetailsPageComponent
  },
  {
    path:'pipes',
    component:PipeExampleComponent
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
