import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICarousel } from '../../models/ICarousel.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isActive: boolean = false;
  hasError: boolean = false;
  subscription!: Subscription;
  data: ICarousel[] = [
    {
      id: 1,
      date: '',
      brief:
        'Karnak or the Karnak Temple Complex, which is known as the Karnak Temple, is a group of temples, buildings and columns',
      title: 'Karnak Temple,Luxor',
      image_url: '../../../../assets//Fe-kit/images/governorates/luxor.jpg',
      link: {
        url: '',
        title: 'Explore more',
        is_external_link: false,
      },
    },
    {
      id: 2,
      date: '',
      brief:
        'The Abu Simbel Temples is the most famous in all of Egypt after the Giza Pyramids,dedicated to Ramses II and his wife. Know more about the twin temples!',
      title: 'Abu Simbel,Aswan',
      image_url: '../../../../assets//Fe-kit/images/governorates/aswan2.jpg',
      link: {
        url: '',
        title: 'Explore more',
        is_external_link: false,
      },
    },
  ];

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    // this.getCarouselData();
  }

  getCarouselData() {
    this.subscription = this._homeService.getCarousel().subscribe({
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
  ngOnDestroy(): void {
    this?.subscription?.unsubscribe();
  }
}
