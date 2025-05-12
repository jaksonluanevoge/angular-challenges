import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective {
  private roles: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
  ) {}

  @Input()
  set hasRole(roles: string[] | string) {
    this.roles = Array.isArray(roles) ? roles : [roles];
  }

  ngOnInit(): void {
    const userRoles = this.authService.getUserRoles();
    const hasPermission = this.roles.some((role) => userRoles.includes(role));

    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
