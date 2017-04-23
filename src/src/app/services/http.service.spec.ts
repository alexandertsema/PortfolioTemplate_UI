import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './http.service';
import { ENDPOINTS } from "app/settings/endpoints";
import { Certificate } from "app/models/certificate";

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    },
    HttpService]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  it('should return some data from the service', inject([HttpService], (service: HttpService) => {
    var result = null;
    service.get<Certificate>(ENDPOINTS.certificate)
        .subscribe(
            (response: Certificate) => { result = response },
            (error: any) => this.errorMessage = error
        );
    expect(result).toBeTruthy();
  }));
});
