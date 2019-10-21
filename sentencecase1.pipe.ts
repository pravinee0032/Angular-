import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase1'
})
export class Sentencecase1Pipe implements PipeTransform {

  transform(str) {
      const filterLetter = str.charAt(0);
      const restLetter = str.substring(1);
      const sentence = filterLetter.toUpperCase() + restLetter.toLowerCase();
      return sentence;
         }

}
