import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'htmlHandle'
})
export class HtmlHandlePipe implements PipeTransform {
  constructor(private sanitzer: DomSanitizer){}
  transform(entry: string): SafeHtml{
    return this.sanitzer.bypassSecurityTrustHtml(entry);
  }
  
}
