/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextComponent } from './text.component';

@Component({
  selector: 'static-text',
  imports: [TextComponent],
  template: `
    <text class="static-text">This is a static text</text>
  `,
  styleUrls: ['./static-text.component.scss'],
})
export class TextStaticComponent {}
