import { FlightListService } from './flight-list.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/model/article';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  
  articleList: Article[] = [];
  articleListToShow: Article[] = [];
  showButton: boolean = true;

  constructor(private flightService: FlightListService) { }

  ngOnInit(): void {
     this.getArticles();
  }

  getArticles(){
    this.flightService.getArticles().subscribe(res => {
      this.articleList = res
      // retorna apenas 2 indices da API
      this.articleListToShow = this.articleList.slice(0, 2);
    })
  }

  showMore(){
      this.articleListToShow = this.articleList.slice(0, 10);
      this.showButton = false;
  }

  pesquisar(value: any){
    if(value == ''){
      this.getArticles();
      this.showButton = true;
    }else{
      this.articleListToShow = this.articleList.filter(article => {
        return article.title.includes(value)
      })
      this.showButton = false;
    }
  }

  sort(event: string){
    if(event == 'recent'){
      this.articleListToShow = this.articleList.sort((a, b) => {
        return <any>new Date(b.publishedAt) - <any>new Date(a.publishedAt);
      }).slice(0,2)
      this.showButton = true;
    }else{
      this.articleListToShow = this.articleList.sort((a, b) => {
        return <any>new Date(a.publishedAt) - <any>new Date(b.publishedAt);
      }).slice(0,2)
      this.showButton = true;
    }
  }
}