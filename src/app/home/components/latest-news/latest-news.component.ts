import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NewsService } from 'src/app/news/services/news.service';
import { INews } from '../../../news/models/INews.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('news-swiper-wrapper', { static: false }) newsSwiperWrapper?: any;
  @ViewChild('nextBtn', { static: false }) nextBtn?: any;
  @ViewChild('backBtn', { static: false }) backBtn?: any;
  swiperWrapper: any = document.getElementsByClassName('news-slider');
  data: INews[] = [];
  hasError: boolean = false;
  subscription!: Subscription;
  innerWidth: any;
  constructor(private _newsService: NewsService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.getLatestNews();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  getLatestNews() {
    this.subscription = this._newsService.getLatestNews().subscribe({
      next: (response: any) => {
        if (response?.status) {
          this.data = response.result;
          this.hasError = false;
        }
      },
      error: (err) => {
        this.hasError = true;
      },
    });
  }

  checkButtonStatus() {
    const id = setTimeout(() => {
      if (
        this.swiperWrapper &&
        this.nextBtn &&
        this.backBtn &&
        this.data.length
      ) {
        if (
          this.swiperWrapper[0].querySelector('swiper-container').swiper.isEnd
        ) {
          this.nextBtn.nativeElement.disabled = true;
        } else {
          this.nextBtn.nativeElement.disabled = false;
        }
        if (
          this.swiperWrapper[0].querySelector('swiper-container').swiper
            .isBeginning
        ) {
          this.backBtn.nativeElement.disabled = true;
        } else {
          this.backBtn.nativeElement.disabled = false;
        }
      }
      clearTimeout(id);
    }, 200);
  }
  ngAfterViewInit() {
    this.checkButtonStatus();
    this.nextBtn.nativeElement.addEventListener('click', () => {
      this.swiperWrapper[0]
        .querySelector('swiper-container')
        .swiper.slideNext();
      this.checkButtonStatus();
    });
    this.backBtn.nativeElement.addEventListener('click', () => {
      this.swiperWrapper[0]
        .querySelector('swiper-container')
        .swiper.slidePrev();
      this.checkButtonStatus();
    });
  }
  ngOnDestroy(): void {
    this?.subscription?.unsubscribe();
  }
}
