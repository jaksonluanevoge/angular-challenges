import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private roles: string[] = [];

  login(roles: string[]) {
    this.roles = roles;
  }

  logout() {
    this.roles = [];
  }

  getUserRoles(): string[] {
    return this.roles;
  }
}
