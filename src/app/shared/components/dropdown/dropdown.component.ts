import { Component, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { IDropdown } from '../../models/IDropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class DropdownComponent {
  @Input() title: string = '';
  @Input() menuItems: IDropdown[] = [];
}
