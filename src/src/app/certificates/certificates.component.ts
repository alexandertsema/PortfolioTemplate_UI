import { Component, OnInit } from '@angular/core';
// import { HttpService } from "app/services/http.service";
import { ICertificate } from "app/models/certificate";
import { ENDPOINTS } from "app/settings/endpoints";
import { certificatesMock } from "app/mocks/certificates.mock";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  certificates : ICertificate[];

  // constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.get<Certificate[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (certificates: Certificate[]) => {
    //           this.certificates = certificates; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );

    this.certificates = certificatesMock;
  }
}
