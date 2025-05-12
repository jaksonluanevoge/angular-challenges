import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../candeactivate.guard';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="onSubmit()"
      class="mx-auto max-w-screen-sm	space-y-4">
      <div>
        <label class="sr-only" for="name">Name</label>
        <input
          class="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Name"
          type="text"
          formControlName="name"
          id="name" />
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label class="sr-only" for="email">Email</label>
          <input
            class="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Email address"
            type="email"
            formControlName="email"
            id="email" />
        </div>

        <div>
          <label class="sr-only" for="phone">Phone</label>
          <input
            class="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Phone Number"
            type="tel"
            formControlName="phone"
            id="phone" />
        </div>
      </div>

      <div>
        <label class="sr-only" for="message">Message</label>

        <textarea
          class="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Message"
          rows="8"
          formControlName="message"
          id="message"></textarea>
      </div>

      <div class="mt-4">
        <button
          [disabled]="form.invalid"
          type="submit"
          class="inline-block w-full rounded-lg border bg-gray-50 px-5 py-3 font-medium text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto">
          Submit
        </button>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements CanComponentDeactivate {
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    name: ['', { validators: [Validators.required] }],
    email: ['', [Validators.required, Validators.email]], // other syntax
    phone: '',
    message: '',
  });

  onSubmit() {
    if (this.form.valid) this.form.reset();
  }

  canDeactivate(): boolean {
    if (this.form.dirty) {
      return window.confirm(
        'Você tem informações não salvas, deseja realmente sair?',
      );
    }
    return true;
  }
}
