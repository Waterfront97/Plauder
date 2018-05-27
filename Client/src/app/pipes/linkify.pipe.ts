import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const urlRegex = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)', 'g');
    const d = value.match(urlRegex);
    if (d === undefined || d === null || d.length === 0) {
      return value;
    }

    for (let i = 0; i < d.length; i++) {
      value = value.replace(d[i], '<a href="' + d[i] + '">' + d[i] + '</a>');
    }
    return value;
  }

}
