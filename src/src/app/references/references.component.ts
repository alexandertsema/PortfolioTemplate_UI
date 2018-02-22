import { Component, OnInit } from '@angular/core';
import { IReference } from 'app/models/reference';
import { Router } from '@angular/router';
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';
import { generateSlugFromTitle } from 'app/utils/helpers';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  public references: Observable<IReference[]>;

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.references = this.httpService.get<IReference[]>('references');
  }

  getSlug(input: string[]): string {
    return generateSlugFromTitle(input);
  }
}
