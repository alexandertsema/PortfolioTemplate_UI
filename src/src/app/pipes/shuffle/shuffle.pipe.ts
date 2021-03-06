import { Pipe, PipeTransform } from '@angular/core';
import { shuffle } from 'app/utils/helpers';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return shuffle(value);
  }
}
