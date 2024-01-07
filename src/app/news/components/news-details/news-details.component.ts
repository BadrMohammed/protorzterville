import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { INews } from '../../models/INews.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  newDetails: INews | null = null;
  hasError: boolean = false;
  subscription!: Subscription;
  constructor(
    private _newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => this.getNewDetails(param['id']));
  }

  getNewDetails(newId: any) {
    this.subscription = this._newsService.getNewById(newId).subscribe({
      next: (response: any) => {
        if (response.status) {
          this.newDetails = response.result;
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
