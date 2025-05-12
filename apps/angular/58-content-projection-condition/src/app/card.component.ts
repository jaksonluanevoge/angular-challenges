import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="p-4">
      <ng-container *ngIf="small(); else largeTitle">
        <ng-content select="[title]" />
      </ng-container>

      <ng-template #largeTitle>
        <div class="text-2xl">
          <ng-content select="[title]" />
        </div>
      </ng-template>

      <ng-content select="[message]" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
})
export class CardComponent {
  small = input<boolean>(false);
}
