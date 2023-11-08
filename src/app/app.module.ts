import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { SecondaryNewsComponent } from './components/secondary-news/secondary-news.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsContentComponent } from './pages/news-content/news-content.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainTitleComponent,
    MainNewsComponent,
    SecondaryNewsComponent,
    HomeComponent,
    NewsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
