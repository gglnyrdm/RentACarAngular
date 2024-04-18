import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    //Var sayılan pathmatch prefix'tir. Default'uda prefixtir.

    {
        path: '',
        pathMatch:'full',
        redirectTo : 'home' //Eğer açılmazsa home path'ine yönlendir. Aşağıya home pathini tanımlıyoruz.
    },
    {
        path:'home',
        pathMatch:'prefix', //Defaultu prefix, yazmasanda olur.
        component: MainLayoutComponent,
        children:[
            {
                path: "",
                pathMatch: 'full',
                component: HomePageComponent
            }
        ]
    }
];
