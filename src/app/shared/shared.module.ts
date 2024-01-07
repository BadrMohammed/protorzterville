import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { StatusComponent } from './components/status/status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { register } from 'swiper/element/bundle';
import { SliderComponent } from './components/slider/slider.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ExternalAuthenticationComponent } from './components/external-authentication/external-authentication.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DepartmentCardComponent } from './components/department-card/department-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
  ButtonComponent,
  NewsCardComponent,
  StatusComponent,
  CarouselComponent,
  CourseCardComponent,
  SliderComponent,
  InputComponent,
  CheckboxComponent,
  ExternalAuthenticationComponent,
  SearchComponent,
  NavbarComponent,
  ModalComponent,
  DepartmentCardComponent,
  DropdownComponent,
];
const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  CarouselModule,
  ReactiveFormsModule,
  BsDropdownModule,
  ModalModule,
  NgxSpinnerModule,
];
@NgModule({
  declarations: [...components],
  imports: [...modules, ModalModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components, ...modules],
})
export class SharedModule {
  constructor() {
    register();
  }
}
