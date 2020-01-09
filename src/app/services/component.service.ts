import { Injectable } from '@angular/core';

import { GlobalApiService } from './global-api.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private globalApi: GlobalApiService) { }

  apiCallGet() {
    return this.globalApi.get('').subscribe(
      (data) => {
        return data;
      }, (err) => {
        throw new Error(err);
      }
    )
  }
}
