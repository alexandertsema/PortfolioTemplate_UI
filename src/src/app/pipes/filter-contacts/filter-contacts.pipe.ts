import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from 'app/models/contact';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'filterContacts'
})
export class FilterContactsPipe implements PipeTransform {

  transform(contacts: IContact[], isDisplayed: boolean): any {
    if (!contacts) {
      return null;
    }
    return contacts.filter(x => x.isLink === isDisplayed);
  }

}
