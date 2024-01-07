import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { fadeInUpOnEnterAnimation } from 'angular-animations';
import { ICarousel } from 'src/app/home/models/ICarousel.model';
import { scrollToTarget } from 'src/utils/scroll-to-target';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation({
      anchor: 'enter',
      duration: 1000,
      delay: 300,
      translate: '30px',
    }),
  ],
})
export class CarouselComponent {
  @Input() photos: ICarousel[] = [];
  counter: number = 0;

  onSliderChange(event: any) {
    this.counter = event;
  }

  handleScroll() {
    scrollToTarget('departments');
  }
}
