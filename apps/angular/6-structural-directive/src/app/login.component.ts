import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from './button.component';
import { InformationComponent } from './information.component';
import { UserStore } from './user.store';

@Component({
  imports: [InformationComponent, RouterLink, ButtonComponent],
  selector: 'app-login',
  template: `
    <header class="flex items-center gap-3">
      Log as :
      <button app-button (click)="loginAs('Admin')">Admin</button>
      <button app-button (click)="loginAs('Manager')">Manager</button>
      <button app-button (click)="loginAs('Reader')">Reader</button>
      <button app-button (click)="loginAs('Writer')">Writer</button>
      <button app-button (click)="loginAs('Reader and Writer')">
        Reader and Writer
      </button>
      <button app-button (click)="loginAs('Client')">Client</button>
      <button app-button (click)="loginAs('Everyone')">Everyone</button>
    </header>

    <app-information></app-information>

    <button app-button class="mt-10" routerLink="enter">
      Enter application
    </button>
  `,
})
export class LoginComponent {
  constructor(
    private userStore: UserStore,
    private router: Router,
  ) {}

  loginAs(role: string) {
    this.userStore.add([role]);

    this.redirectToDashboard(role);
  }

  private redirectToDashboard(role: string) {
    let targetRoute: string;

    switch (role) {
      case 'Admin':
        targetRoute = '/dashboard/admin';
        break;
      case 'Manager':
        targetRoute = '/dashboard/manager';
        break;
      case 'Reader and Writer':
        targetRoute = '/dashboard/reader-writer';
        break;
      case 'Reader':
        targetRoute = '/dashboard/reader';
        break;
      case 'Writer':
        targetRoute = '/dashboard/writer';
        break;
      case 'Client':
        targetRoute = '/dashboard/client';
        break;
      case 'Everyone':
        targetRoute = '/dashboard/default';
        break;
      default:
        targetRoute = '/dashboard/default';
    }

    this.router.navigate([targetRoute]);
  }
}
