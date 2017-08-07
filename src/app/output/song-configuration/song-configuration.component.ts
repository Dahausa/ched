import { Component, OnInit } from '@angular/core';
import { Font } from './font';
import { FontType } from './font-type';
import { FontSize } from './fontSize';

@Component({
  selector: 'app-song-configuration',
  templateUrl: './song-configuration.component.html',
  styleUrls: ['./song-configuration.component.css']
})
export class SongConfigurationComponent implements OnInit {

  private textSize: Number = 10;
  private chordSize: Number = 10;
  private tabSize: Number = 10;

  // https://www.npmjs.com/package/angular4-color-picker
  private color: String = '#127bdc';

  constructor() {




   }

  ngOnInit() {

  }

}
