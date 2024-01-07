import { Component, Input } from '@angular/core';
import { IForm } from 'src/app/shared/models/index.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputProps!: IForm;
  @Input() formGroupName?: any;
  @Input() inputContainerClass?: string = '';
}
