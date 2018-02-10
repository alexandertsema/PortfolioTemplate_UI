import { Component, OnInit } from '@angular/core';
import { ICertificate } from 'app/models/certificate';
import { HttpService } from 'app/services/http/http.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  public certificates: ICertificate[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get<ICertificate[]>('certificates')
      .subscribe(certificates => {
        this.certificates = certificates;
      });
  }
}
