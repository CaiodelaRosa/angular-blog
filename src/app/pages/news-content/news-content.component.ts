import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  newsImage:string | null  = ""
  newsTitle:string | null  = ""
  newsSubtitle:string | null  = ""
  newsContent:string | null = ""
  private Id:string = ""

  newsData = Intl.DateTimeFormat("pt-BR", {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date());


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.Id = value.get("Id") as string
      )

      this.setValuesToComponent(this.Id)
  };

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id == id)[0]

    this.newsTitle = result.title
    this.newsSubtitle = result.subtitle
    this.newsContent = result.content
    this.newsImage = result.image

  }

  }


