import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-news',
  templateUrl: './secondary-news.component.html',
  styleUrls: ['./secondary-news.component.css']
})
export class SecondaryNewsComponent implements OnInit {

  @Input()
  Id:string = ""
  @Input()
  secondaryImage:string = ""
  @Input()
  secondaryTitle:string = ""
  @Input()
  secondarySubtitle:string = ""
  @Input()
  secondaryContent:string = ""

  secondaryData = Intl.DateTimeFormat("pt-BR", {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
