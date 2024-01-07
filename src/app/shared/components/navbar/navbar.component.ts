import { Component, DoCheck, HostListener, Input, OnInit } from '@angular/core';
import { IDropdown } from '../../models/IDropdown';
import { SecurityService } from '../../services/security/security.service';
import { LoginService } from 'src/app/authentication/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  constructor(
    private _securityService: SecurityService,
    private _loginService: LoginService
  ) {}
  languageMenuItems: IDropdown[] = [
    { title: 'EN', onClick: () => console.log('en') },
    { title: 'AR', onClick: () => console.log('ar') },
  ];
  userMenuItems: IDropdown[] = [
    { title: 'Sign out', onClick: () => this._loginService.logout() },
  ];
  isSearchable: boolean = false;
  innerWidth!: any;
  @Input() isViewSearch?: boolean = false;
  isLoggedIn!: boolean;
  userName: string = '';

  authUser() {
    this.isLoggedIn = this._securityService.isLoggedIn();
    let user = this._securityService.getUser();
    if (user) {
      this.userName = JSON.parse(user)?.userName;
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.authUser();
  }
  ngDoCheck(): void {
    this.authUser();
  }
  toggleSearch(value: boolean) {
    // this.isSearchable = value;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
