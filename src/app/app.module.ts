import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { SecondaryNewsComponent } from './components/secondary-news/secondary-news.component';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainTitleComponent,
    MainNewsComponent,
    SecondaryNewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
