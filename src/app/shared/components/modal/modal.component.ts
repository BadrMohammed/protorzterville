import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  modalRef?: BsModalRef;
  @Input() buttonClass?: string = '';
  @Input() buttonAction: any = { action: 'label' || 'icon' };
  @Input() fullScreen!: boolean;
  config = {
    animated: true,
    class: this.fullScreen ? 'full-screen-modal' : '',
  };

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
