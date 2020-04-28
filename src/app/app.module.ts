import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from '././home/welcome.component';
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    UserModule,
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
