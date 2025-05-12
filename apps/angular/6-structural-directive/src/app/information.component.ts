import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserStore } from './user.store';

@Component({
  selector: 'app-information',
  imports: [CommonModule],
  template: `
    <h2 class="mt-10 text-xl">Information Panel</h2>
    <!-- admin can see everything -->
    <div *hasRole="'Admin'">visible only for super admin</div>
    <div *hasRole="'Manager'">visible if manager</div>
    <div *hasRole="'Reader'">visible if manager and/or reader</div>
    <div *hasRole="'Writer'">visible if manager and/or writer</div>
    <div *hasRole="'Client'">visible if client</div>
    <div *hasRole="'Default'">visible for everyone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  user$ = this.userStore.user$;
  constructor(private userStore: UserStore) {}
}
