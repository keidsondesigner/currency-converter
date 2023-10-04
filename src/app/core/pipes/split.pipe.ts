import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(value: string, index: number): string {
    const parts = value.split('/');
    if (index >= 0 && index < parts.length) {
      return parts[index].trim();
    }
    return value;
  }
}
