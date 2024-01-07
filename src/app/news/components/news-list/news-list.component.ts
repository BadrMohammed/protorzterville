import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { INews } from '../../models/INews.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  news: INews[] = [];
  hasError: boolean = false;
  subscription!: Subscription;

  constructor(private _newsService: NewsService) {}
  ngOnInit(): void {
    console.log('test');
    this.fetchNews();
  }

  fetchNews() {
    this.subscription = this._newsService.getNews().subscribe({
      next: (response: any) => {
        if (response.status) {
          this.news = response.result;
          this.hasError = false;
        }
      },
      error: (err) => {
        this.hasError = true;
      },
    });
  }
  ngOnDestroy(): void {
    this?.subscription?.unsubscribe();
  }
}
