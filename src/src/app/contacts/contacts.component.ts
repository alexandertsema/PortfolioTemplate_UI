import { Component, OnInit } from '@angular/core';
import { IContact } from "app/models/contact";
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: IContact[];

  constructor(private httpService: HttpService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/github.svg'));
    iconRegistry.addSvgIcon(
      'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin.svg'));
   }

  ngOnInit() {
    this.httpService
      .get<IContact[]>('contacts')
        .subscribe(contacts =>
          this.contacts = contacts
        );
  }
}
