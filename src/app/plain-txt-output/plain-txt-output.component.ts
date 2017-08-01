import { Component, OnInit } from '@angular/core';
import { TokenizerService } from '../tokenizer.service';

@Component({
  selector: 'app-plain-txt-output',
  templateUrl: './plain-txt-output.component.html',
  styleUrls: ['./plain-txt-output.component.css'],
  providers: [TokenizerService]
})
export class PlainTxtOutputComponent implements OnInit {

  private output: string[];

  constructor(private tokenizer:TokenizerService) { }

  ngOnInit() {
    this.output = this.tokenizer.getTokens("test test 1 2 3 !");
  }



}
