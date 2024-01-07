import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() className: string = '';
  @Input() hasIcon: boolean = false;
  @Input() buttonLabel: string = '';
  @Input() buttonTitleClassName?: string = '';
  @Input() handleAction?: any;
  @Input() routerLink?: any;
  @Input() item?: any;
  @Input() buttonType? = 'button';

  onClick() {
    if (this.handleAction) {
      this.item ? this.handleAction(this.item) : this.handleAction();
    }
  }
}
