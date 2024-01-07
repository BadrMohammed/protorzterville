import { Component, Input } from '@angular/core';
import {
  ExernalAuthType,
  IExernalAuth,
} from 'src/app/shared/models/index.model';

@Component({
  selector: 'app-external-authentication',
  templateUrl: './external-authentication.component.html',
  styleUrls: ['./external-authentication.component.scss'],
})
export class ExternalAuthenticationComponent {
  @Input() serviceType: IExernalAuth = {
    type: ExernalAuthType.Facebook,
    title: '',
  };
}
