import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  newsImage:string = ""
  newsTitle:string = ""
  newsSubtitle:string = ""
  newsContent:string = ""
  private Id:string | null = ""

  newsData = Intl.DateTimeFormat("pt-BR", {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date());


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.Id = params['id'];

      // Use the RouterStateSnapshot to access the state
      const routerState = this.router.routerState.snapshot;
      if (routerState.root.firstChild) {
        const state = routerState.root.firstChild.firstChild?.data;
        if (state) {
          this.newsImage = state.newsImage;
          this.newsTitle = state.newsTitle;
          this.newsSubtitle = state.newsSubtitle;
          this.newsContent = state.newsContent;
        }

    // Carregue os detalhes da notícia, se necessário
    this.loadNewsDetails(this.Id);
  });

  }

  loadNewsDetails(id: string) {

  }

}
