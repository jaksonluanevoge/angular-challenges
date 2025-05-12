import { Component } from '@angular/core';
import { NavButtonComponent } from './nav-button.component';

@Component({
  imports: [NavButtonComponent],
  selector: 'app-foo',
  template: `
    <nav-button href="/home" class="fixed left-1/2 top-3">Home Page</nav-button>

    <div id="top1" class="h-screen bg-blue-200">
      Welcome to foo page
      <nav-button anchor="bottom1">Section 1</nav-button>
    </div>

    <div id="bottom1" class="h-screen bg-red-200">
      <nav-button anchor="top1">Section 2</nav-button>
    </div>
  `,
})
export class FooComponent {}
