import { Observable, retry } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/model/article';

@Injectable({
  providedIn: 'root'
})
export class FlightListService {

  url = 'https://api.spaceflightnewsapi.net/v3/articles'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os Articles
  getArticles(): Observable<Article[]> {
    var articles = this.httpClient.get<Article[]>(this.url)
    return articles
  }

}
