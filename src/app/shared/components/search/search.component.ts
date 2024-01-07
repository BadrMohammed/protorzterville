import { Component, Input } from '@angular/core';
import { IForm } from 'src/app/shared/models/index.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchClass?: string = '';
  searchForm: IForm[] = [
    {
      type: 'text',
      title: '',
      name: 'Title',
      placeholder: 'Title',
      required: false,
    },
    {
      type: 'date',
      title: '',
      name: 'Title',
      placeholder: 'dateFrom',
      required: false,
    },
    {
      type: 'date',
      title: '',
      name: 'dateTo',
      placeholder: 'Date to',
      required: false,
    },
  ];
}
