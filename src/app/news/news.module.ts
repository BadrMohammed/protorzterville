import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewsListComponent, NewsDetailsComponent],
  imports: [NewsRoutingModule, SharedModule],
  // providers: [NewsService], can use it in component instead of module
})
export class NewsModule {}
