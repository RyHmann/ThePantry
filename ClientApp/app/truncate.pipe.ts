import { Pipe, PipeTransform } from '@angular/core'


@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
    transform(text: string, charLimit = 50, ellipsis = '...'): string {
        let truncateIndex = text.substr(0, charLimit).lastIndexOf(" ");
        return text.length > charLimit ? text.substr(0, truncateIndex) + ellipsis : text;
    }
}