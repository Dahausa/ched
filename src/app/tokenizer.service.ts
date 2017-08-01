import { Injectable } from '@angular/core';

@Injectable()
export class TokenizerService {

  private separator: string = " ";

  constructor() { }

  getTokens(stringToTokenize : string) : string[] {
    return stringToTokenize.split(this.separator);
  }

}
