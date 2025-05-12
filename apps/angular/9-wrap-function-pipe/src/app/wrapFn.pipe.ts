import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
  pure: true,
})
export class WrapFnPipe implements PipeTransform {
  transform(fn: (...args: any[]) => any, ...args: any[]): any {
    return fn(...args);
  }
}
