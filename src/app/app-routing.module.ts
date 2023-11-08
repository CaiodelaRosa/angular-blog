import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NewsContentComponent } from "./pages/news-content/news-content.component";

const routes: Routes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news-content/:id',
    component: NewsContentComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }