import { Component, OnInit } from '@angular/core';
import { IContact } from "app/models/contact";
import { mockContacts } from "app/mocks/contacts.mock";
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Observable<IContact[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.contacts = this.httpService.get<IContact[]>('contacts');
  }
}
