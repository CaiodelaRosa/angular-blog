import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit {
  @Input()
  Id:string = ""
  @Input()
  mainImage:string = ""
  @Input()
  mainTitle:string = ""
  @Input()
  mainSubtitle:string =""
  @Input()
  mainContent:string = ""

  mainData = Intl.DateTimeFormat("pt-BR", {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date());

  constructor(private router: Router) { }

  navigateToNewsContent(){
    this.router.navigate(['/news-content', this.Id],{
      state: {
        newsImage: this.mainImage,
        newsTitle: this.mainTitle,
        newsSubtitle: this.mainSubtitle,
        newsContent: this.mainContent,
      }
    })
  }

  ngOnInit(): void {
  }
}
