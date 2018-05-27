import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imgify'
})
export class ImgifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const imgRegex = new RegExp('data:image\\/.*;base64,.*');
    const d = value.match(imgRegex);
    if (d === undefined || d === null || d.length === 0 || d.length > 1) {
      return value;
    }

    value = '<img src="' + d[0] + '">';
    return value;
  }

}
