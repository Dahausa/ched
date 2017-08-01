import { Component, OnInit , Input} from '@angular/core';
import { TokenizerService } from '../tokenizer.service';

/**
 * Component that handles song content and output it as plain old chords sheets
 *
 * @export
 * @class PlainTxtOutputComponent
 * @implements {OnInit}
 */
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

  }

  /**
   * Input Binding to pass the song content that needs to be outputted
   *
   * @memberof PlainTxtOutputComponent
   */
  @Input()
  set songContentToOutput(content: string){
    this.output = this.tokenizer.getTokens(content);
  }

}
