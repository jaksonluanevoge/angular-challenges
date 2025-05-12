import { Component } from '@angular/core';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  selector: 'app-root',
  template: `
    <app-feedback-form (submitForm)="apiCall($event)"></app-feedback-form>
  `,
  imports: [FeedbackFormComponent],
})
export class AppComponent {
  apiCall(event: Record<string, string | null>): void {
    console.log(event);
  }
}
