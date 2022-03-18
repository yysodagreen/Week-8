<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartSummaryComponent } from '../book-store/cart-summary/cart-summary.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    CartSummaryComponent,
    BasePageComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent
    ]
})
export class PartialsModule {}
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartSummaryComponent } from '../book-store/cart-summary/cart-summary.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    CartSummaryComponent,
    BasePageComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent
    ]
})
export class PartialsModule {}
>>>>>>> ce1d2bf032d726585d7be6cf965ba2db66a2cd6a
