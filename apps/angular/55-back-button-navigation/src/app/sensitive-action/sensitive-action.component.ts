import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink } from '@angular/router';
import { CanComponentDeactivate } from '../can-deactivate.guard';
import { DialogService } from '../dialog.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  imports: [MatButtonModule, RouterLink],
  selector: 'app-simple-action',
  templateUrl: './sensitive-action.component.html',
})
export class SensitiveActionComponent implements CanComponentDeactivate {
  readonly #dialogService = inject(DialogService);

  openDialog(): void {
    this.#dialogService.openDialog(DialogComponent, {
      width: '250px',
      data: { strategy: { type: 'confirm' } },
      closeOnNavigation: false,
    });
  }

  canDeactivate() {
    return (
      this.#dialogService.getStrategyType()?.onBackBrowserNavigation() ?? true
    );
  }
}
