import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';
import { IMetaTag } from 'app/models/metaTag';
import { concat } from 'rxjs/operator/concat';

@Injectable()
export class MetaService {
  constructor(private httpService: HttpService) { }

  setMetaTags() {
    this.httpService.get<IMetaTag[]>('meta')
      .subscribe(metaTags => {
        metaTags.forEach(metaTag => {
          if (metaTag.isGlobal) {
            const tag = this.createMetaTag(metaTag.name, metaTag.content, false);
            const ogTag = this.createMetaTag(metaTag.name, metaTag.content, true);
            document.head.appendChild(tag);
            document.head.appendChild(ogTag);
          } else {
            const tag = this.createMetaTag(metaTag.name, metaTag.content, metaTag.isOg);
            document.head.appendChild(tag);
          }
        });
    });
  }

  createMetaTag(name: string, content: string, isOg: boolean) {
    const tag = document.createElement('meta');
    tag.setAttribute(isOg ? 'property' : 'name', isOg ? `og:${name}` : name);
    tag.setAttribute('content', content);

    return tag;
  }
}
