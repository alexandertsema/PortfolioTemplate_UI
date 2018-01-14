import { Component, OnInit } from '@angular/core';
import { IReference } from "app/models/reference";
// import { HttpService } from "app/services/http.service";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockReferences } from "app/mocks/references.mock";
import { Router } from '@angular/router';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  references: IReference[]

  constructor(private router: Router) { }

  ngOnInit() {
    // this.httpService.get<Reference[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (references: Reference[]) => {
    //           this.references = references; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );
    this.references = mockReferences;
  }
  detailedView(id: number) {
    this.router.navigate([`references/details/${id}`]);
  }
}
