import { Routes } from '@angular/router';
import { TodosLosProductosPageComponent } from './pages/todos-los-productos-page/todos-los-productos-page.component';
import { QuienesSomosPageComponent } from './pages/quienes-somos-page/quienes-somos-page.component';
import path from 'path';
import { Component } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'todos-los-productos',
    component: TodosLosProductosPageComponent
  },
  {
    path: '',
    component: QuienesSomosPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];
