import { Component, Input } from '@angular/core';
import { IDepartment } from '../../../departments/models/IDepartments';

@Component({
  selector: 'app-department-card',
  templateUrl: './department-card.component.html',
  styleUrls: ['./department-card.component.scss'],
})
export class DepartmentCardComponent {
  @Input() department!: IDepartment;
  photos: any = {
    Luxor: '../../../assets/Fe-kit/images/governorates/luxor.jpg',
    Aswan: '../../../assets/Fe-kit/images/governorates/Aswan.jpg',
    Hurghada: '../../../assets/Fe-kit/images/governorates/hurghada.jpg',
    Safaga: '../../../assets/Fe-kit/images/governorates/safaga.jpg',
    ['Sharm-el-Sheikh']: '../../../assets/Fe-kit/images/governorates/sharm.jpg',
  };
}
