import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeQuotes'
})
export class RemovequotesPipe implements PipeTransform {

  transform(text: string): string {
      let revisedString = text.replace(/^"|$"/g, "");
      return revisedString;
  }

}
