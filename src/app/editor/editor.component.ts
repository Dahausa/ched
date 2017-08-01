import { Component, OnInit, AfterViewInit, Output, ViewChild, EventEmitter } from '@angular/core';

// ACE Editor imports
import { AceEditorComponent } from 'ng2-ace-editor';

import 'brace/theme/clouds';
import 'brace/mode/sql';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {

  // Output to handOver the text in the editor
  @Output() textHasChangedEvent = new EventEmitter();

 @ViewChild('editor') editor;
  text: String = '';

    ngOnInit() {    }

    ngAfterViewInit() {
        this.editor.setTheme('eclipse');

        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });

        this.editor.getEditor().commands.addCommand({
            name: 'showOtherCompletions',
            bindKey: 'Ctrl-.',
            exec: function (editor) {

            }
        });
    }

    /**
     * Gets the update of the ace-editor and emits an "textHasChangedEvent"
     *
     * @param {Event} textInEditor
     * @memberof EditorComponent
     */
    textChanged(textInEditor: Event) {
      this.textHasChangedEvent.emit(textInEditor);
      this.text = textInEditor.toString();
    }

}
