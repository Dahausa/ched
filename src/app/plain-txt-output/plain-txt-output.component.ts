import { Component, OnInit , Input} from '@angular/core';

// Import of javascript library chordsheetjs
import ChordSheetJS from 'chordsheetjs';

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
  providers: []
})
export class PlainTxtOutputComponent implements OnInit {

  private formattedOutput: String = '';

  constructor() { }

  ngOnInit() {

  }

  /**
   * Input Binding to pass the song content that needs to be outputted
   *
   * @memberof PlainTxtOutputComponent
   */
  @Input()
  set songContentToOutput(content: string){

    if (content.length > 10) {
      // Usage of chordsheetjs library
      var parser = new ChordSheetJS.ChordProParser();
      var song = parser.parse(content);

      const htmlFormatter = new ChordSheetJS.HtmlFormatter();
      this.formattedOutput = htmlFormatter.format(song);
      console.log(this.formattedOutput);
    }
  }

}
