import { Component, OnInit } from '@angular/core';
import { IContact } from "app/models/contact";
// import { HttpService } from "app/services/http.service";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockContacts } from "app/mocks/contacts.mock";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: IContact[];

  // constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.get<Contact[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (contacts: Contact[]) => {
    //           this.contacts = contacts; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );

    this.contacts = mockContacts;
  }
}
