import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/services/http.service";
import { Certificate } from "app/models/certificate";
import { ENDPOINTS } from "app/settings/endpoints";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates : Certificate[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.get<Certificate[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (certificates: Certificate[]) => {
    //           this.certificates = certificates; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );
  }
}
