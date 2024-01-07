import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { scrollToTarget } from 'src/utils/scroll-to-target';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  viewBackToTopBtn = false;
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url === '/') {
          this.viewBackToTopBtn = true;
        } else {
          this.viewBackToTopBtn = false;
        }
      }
    });
  }
  feeds: any[] = [
    { title: 'IHF President', url: '' },
    { title: 'Introduction', url: '' },
    { title: 'About Us', url: '' },
    { title: 'Announcements', url: '' },
    { title: 'Terminology', url: '' },
    { title: 'Video Library', url: '' },
  ];

  socialLinks: any[] = [
    {
      logo: '../../../assets/Fe-kit/svg/facebook.svg',
      title: 'facebook',
      url: '',
      class: 'facebook-icon',
    },
    {
      logo: '../../../assets/Fe-kit/svg/twitter.svg',
      title: 'twitter',
      class: 'twitter-icon',
    },
    {
      logo: '../../../assets/Fe-kit/svg/youtube.svg',
      title: 'youtube',
      url: '',
      class: 'youtube-icon',
    },
    {
      logo: '../../../assets/Fe-kit/svg/instagram.svg',
      title: 'instagram',
      url: '',
      class: 'instagram-icon',
    },
  ];

  accessibilits: any[] = [
    {
      logo: '../../../assets/Fe-kit/svg/A-plus.svg',
      title: 'A plus',
      url: '',
      width: '28',
      height: '19',
    },
    {
      logo: '../../../assets/Fe-kit/svg/A-minus.svg',
      title: 'A minus',
      url: '',
      width: '24',
      height: '18',
    },
    {
      logo: '../../../assets/Fe-kit/svg/color.svg',
      title: 'color',
      url: '',
      width: '21',
      height: '21',
    },
  ];

  handleScroll() {
    scrollToTarget('carousel');
  }
}
