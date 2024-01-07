import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  errorMessage = this.activatedRoute.snapshot.queryParams['errorMessage'];

  items: any = {
    Error: {
      url: '../../../../assets/Fe-kit/images/error.png',
      title: 'Error !',
      content: this.errorMessage || 'You already have enrolled to the course.',
      class: 'error-image',
    },
    ['No Content']: {
      url: '../../../../assets/Fe-kit/images/no-content.png',
      title: 'No Content to show!',
      content: 'There is no Content to show right now',
      class: 'no-content-image',
    },
    Success: {
      url: '../../../../assets/Fe-kit/images/success.png',
      title: 'Thank you !',
      content: 'You have applied in this course successfully. ',
      class: 'success-image',
    },
  };
  @Input() status: string = 'Error';
}
