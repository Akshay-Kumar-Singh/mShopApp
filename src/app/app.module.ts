import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopmainpageComponent } from './shopmainpage/shopmainpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ClickOutsideDirective } from './click-outside.directive';

const route: Routes = [
  {
    path: 'mainpage',
    component: ShopmainpageComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: '',
    component: ShopmainpageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShopmainpageComponent,
    PagenotfoundComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
