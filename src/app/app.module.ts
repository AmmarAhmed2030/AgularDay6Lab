import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { TexthighlightDirective } from './directives/texthighlight.directive';
import { ProductShadowDirective } from './directives/product-shadow.directive';
import { CreditCardFormatPipe } from './pipes/credit-card-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SidebarComponent,
    CategoryComponent,
    ProductComponent,
    TexthighlightDirective,
    ProductShadowDirective,
    CreditCardFormatPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
