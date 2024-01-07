import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor() {}

  getLocalStorage(key: string): string | null {
    const entry = localStorage.getItem(key);
    return entry;
  }

  getUser() {
    return this.getLocalStorage('userData') || null;
  }

  isLoggedIn() {
    return this.getLocalStorage('token') ? true : false;
  }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }
}
