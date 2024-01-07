import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { breadcrumbs } from './_breadcrumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isViewFooter: boolean = true;
  isViewHeader: boolean = true;
  t: string = '';
  activePage!: any;
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (
          e.url.includes('register') ||
          e.url.includes('login') ||
          e.url === '/' ||
          e.urlAfterRedirects.includes('/404') ||
          e.urlAfterRedirects.includes('/error')
        ) {
          if (
            e.url !== '/' ||
            e.urlAfterRedirects.includes('/404') ||
            e.urlAfterRedirects.includes('/error')
          ) {
            this.isViewFooter = false;
          }
          this.isViewHeader = false;
        } else {
          this.isViewFooter = true;
          this.isViewHeader = true;
        }

        let name: any = e?.url?.replace('/', '').replace(/[0-9]/g, '');
        if (name) {
          // name = name.replaceAll('/', ' -> ');
          let breadcrumb = '';
          if (name.includes('/')) {
            name = name.split('/');
            let newName = name;
            name = name.length < 2 ? name : name[0] + '/';
            breadcrumb = newName.length > 1 ? newName[1] : '';
          }
          if (breadcrumbs[name]) {
            this.activePage = breadcrumbs[name];
            if (this.activePage.breadcrumb.length > 1) {
              this.activePage.breadcrumb[1].label = breadcrumb
                ? breadcrumb
                : this.activePage.breadcrumb[1].label;
            }
          } else {
            this.activePage = null;
          }
        }
      }
    });
  }
  title = 'angular-sessions';
}
