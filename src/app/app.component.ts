import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  editorText: string;

/**
 * Handles a textHasChangedEvent by the editor component
 * @param {string} text
 * @memberof AppComponent
 */
  handleTextHasChanged(text: string) {
    console.log(text);
    this.editorText = text;
  }

}
