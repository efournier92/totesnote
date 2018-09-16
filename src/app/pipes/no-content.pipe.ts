import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noContent'
})
export class NoContentPipe implements PipeTransform {

  transform(value: string): string {
    if (value === '') return 'Empty...';
    if (value.includes('\n')) {
      value = value.substring(0, value.indexOf('\n'))
    }
    return value;
  }

}
