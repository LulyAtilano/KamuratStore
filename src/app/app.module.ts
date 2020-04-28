import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from '././home/welcome.component';
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found-component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Default route
      { path: '**', component: PageNotFoundComponent }, // In case the requested URL doesn't match or uses as 404 page;
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
