import { Component, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnChanges {
  @Input() hasNavigation?: boolean = true;
  @Input() hasPagination?: boolean = true;
  @Input() slidesPerView: number = 1;
  @Input() itemLength: number = 0;

  @Input() buttonTypeClassName?: string = 'primary';
  @Input() nextButtonClassName?: string = '';
  @Input() prevButtonClassName?: string = '';
  @Input() containerSlider?: string = '';
  @Input() hideCustomButtons?: boolean = false;

  @ViewChild('swiper', { static: false }) swiper?: any;
  @ViewChild('nextBtn', { static: false }) nextBtn?: any;
  @ViewChild('backBtn', { static: false }) backBtn?: any;

  checkButtonStatus() {
    const id = setTimeout(() => {
      if (this.swiper && this.nextBtn && this.backBtn && this.itemLength) {
        if (this.swiper.nativeElement.swiper.isEnd) {
          this.nextBtn.nativeElement.disabled = true;
        } else {
          this.nextBtn.nativeElement.disabled = false;
        }
        if (this.swiper.nativeElement.swiper.isBeginning) {
          this.backBtn.nativeElement.disabled = true;
        } else {
          this.backBtn.nativeElement.disabled = false;
        }
      }
      clearTimeout(id);
    }, 200);
  }

  ngOnChanges(): void {
    if (this.itemLength) {
      this.checkButtonStatus();
    }
  }
  ngAfterViewInit() {
    this.checkButtonStatus();
    if (this.nextBtn) {
      this.nextBtn.nativeElement.addEventListener('click', () => {
        this.swiper.nativeElement.swiper.slideNext();
        this.checkButtonStatus();
      });
    }
    if (this.backBtn) {
      this.backBtn.nativeElement.addEventListener('click', () => {
        this.swiper.nativeElement.swiper.slidePrev();
        this.checkButtonStatus();
      });
    }
  }
}
