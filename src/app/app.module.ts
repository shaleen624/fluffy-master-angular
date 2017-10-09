import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/src/app/components/header/header.component';
import { SliderComponent } from './components/src/app/components/slider/slider.component';
import { CategoryRowComponent } from './components/src/app/components/category-row/category-row.component';
import { FeaturedItemsComponent } from './components/src/app/components/featured-items/featured-items.component';
import { RecommendedItemsComponent } from './components/src/app/components/recommended-items/recommended-items.component';
import { FooterComponent } from './components/src/app/components/footer/footer.component';
import { ProductDetailsComponent } from './components/src/app/components/product-details/product-details.component';
import { BaseComponent } from './components/src/app/components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CategoryRowComponent,
    FeaturedItemsComponent,
    RecommendedItemsComponent,
    FooterComponent,
    ProductDetailsComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
