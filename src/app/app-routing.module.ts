import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './_routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
