import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }



  ngOnInit(): void {
  }
}
