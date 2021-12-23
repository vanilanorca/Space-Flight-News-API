import { Routes } from '@angular/router';
import { Article } from 'src/model/article';
import { FlightListService } from './../flight-list/flight-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {

  articleList: Article[] = [];
  hrefId: string = '';
  currentArticle = {};
  
  articleTitle: any = '';
  articlePublishedAt: any = '';
  articleSummary: any = '';
  articleImage: any = '';

  ngOnInit(): void {
    this.getIdByHref()
    this.takeArticleInformationsById()
  }

  constructor(private flightService: FlightListService) { }

  getIdByHref(){
    let href = location.href
    this.hrefId = href.split('details/')[1];
  }

  takeArticleInformationsById(){
      let hrefId = parseInt(this.hrefId)

      this.flightService.getArticles().subscribe(res => {
        this.articleList = res

        this.articleList.forEach(res => {

          if(hrefId == res.id){
            let currentArticle = this.articleList.find(item => item.id === hrefId)

            this.articleTitle = currentArticle?.title
            this.articlePublishedAt = currentArticle?.publishedAt
            this.articleSummary = currentArticle?.summary
            this.articleImage = currentArticle?.imageUrl

            console.log(this.articleTitle)
          }

        });
        
      })
  }

  
  

}
