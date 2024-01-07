import { Component, Input } from '@angular/core';
import { INews } from 'src/app/news/models/INews.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() newItem: INews | any = {};

  @Input() dimension?: string = '355';
  @Input() dimensionClass?: string = '';
}
