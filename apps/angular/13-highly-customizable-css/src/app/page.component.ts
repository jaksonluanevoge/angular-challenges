/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextStaticComponent } from './static-text.component';

@Component({
  selector: 'page',
  imports: [TextStaticComponent],
  template: `
    <static-text></static-text>
    <static-text class="error"></static-text>
    <static-text class="warning"></static-text>
    <static-text class="blue"></static-text>
  `,
  styleUrl: './static-text.component.scss',
})
export class PageComponent {}
