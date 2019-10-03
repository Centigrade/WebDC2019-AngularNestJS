import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown',
})
export class SimpleMarkdownPipe implements PipeTransform {
  transform(value: string): any {
    let openSpan = true;
    let formattedText: string = '';
    for (const character of value) {
      if (character === '*') {
        if (openSpan) {
          formattedText += '<strong>';
        } else {
          formattedText += '</strong>';
        }

        openSpan = !openSpan;
      } else {
        formattedText += character;
      }
    }

    return formattedText;
  }
}
