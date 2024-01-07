import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

const components = [
  FooterComponent,
  PageNotFoundComponent,
  HeaderComponent,
  SidebarComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    SharedModule,
    //layout here like header,footer,sidebar,loading,error model
  ],
  exports: [...components],
})
export class CoreModule {}
