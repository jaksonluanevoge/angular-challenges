import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-default-dashboard',
  imports: [RouterLink, ButtonComponent],
  template: `
    <p>dashboard padrão para usuários sem role especifica</p>
    <button app-button routerLink="/">Logout</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultDashboardComponent {}
