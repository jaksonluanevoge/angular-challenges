import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RatingControlComponent } from '../rating-control/rating-control.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RatingControlComponent],
  selector: 'app-feedback-form',
  templateUrl: 'feedback-form.component.html',
  styleUrls: ['feedback-form.component.scss'],
})
export class FeedbackFormComponent {
  @Output() submitForm: EventEmitter<Record<string, string | null>> =
    new EventEmitter();

  readonly feedbackForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required }),
    email: new FormControl('', { validators: Validators.required }),
    comment: new FormControl(),
    rating: new FormControl(null, { validators: Validators.required }),
  });

  submitFormData(): void {
    if (this.feedbackForm.valid) {
      this.submitForm.emit(this.feedbackForm.value);
    }
  }
}
