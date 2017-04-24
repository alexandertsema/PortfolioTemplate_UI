import { Component, OnInit } from '@angular/core';
import { Contact } from "app/models/contact";
import { HttpService } from "app/services/http.service";
import { ENDPOINTS } from "app/settings/endpoints";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get<Contact[]>(ENDPOINTS.certificate)
        .subscribe(
            (contacts: Contact[]) => {
              this.contacts = contacts; 
            },
            (error: any) => 
              console.error(error)
        );
  }

}
