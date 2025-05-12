import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngFor]',
  standalone: true,
})
class NgForOfWithEmptyDirective<T> implements DoCheck {
  private vcr = inject(ViewContainerRef);

  @Input() ngForOf?: T[] = undefined;

  @Input() ngForEmpty!: TemplateRef<unknown>;

  private ref?: EmbeddedViewRef<unknown>;

  ngDoCheck(): void {
    this.ref?.destroy();

    if (!this.ngForOf || this.ngForOf.length === 0) {
      this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
    } else {
      this.ref?.destroy();
    }
  }
}

export { NgForOfWithEmptyDirective as NgForEmpty };
