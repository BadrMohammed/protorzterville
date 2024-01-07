import { Component, Input } from '@angular/core';
import { IForm } from 'src/app/shared/models/index.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() checkBoxContainerClass?: string = '';
  @Input() inputProps!: IForm;
  @Input() label?: string = '';
}
