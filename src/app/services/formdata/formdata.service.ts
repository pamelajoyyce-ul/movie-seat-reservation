import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  constructor(public http: HttpClient) { }
  generate(data: any) {
    const formData = new FormData();
    Object.keys(data).map((item, index) => {
      if (Array.isArray(data[item])) {
        (data[item]).map((_item: any) => {
          formData.append(`${item}[]`, _item);
        });
      } else {
        formData.append(item, data[item]);
      }
    });

    return formData;
  }

  generateBlob(dataurl: any) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }


}
