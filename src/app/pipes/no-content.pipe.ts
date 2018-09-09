import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noContent'
})
export class NoContentPipe implements PipeTransform {

  transform(value: string): string {
    if (value === '') return 'Empty...';
    return value;
  }

}
