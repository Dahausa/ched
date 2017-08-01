import { Component, OnInit, ViewChild } from '@angular/core';

//ACE Editor imports
import { AceEditorComponent } from 'ng2-ace-editor';

import 'brace/theme/clouds';
import 'brace/mode/sql';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

 @ViewChild('editor') editor;
  text: string = "";

    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

    }
    ngAfterViewInit() {
        this.editor.setTheme("eclipse");

        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });

        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {

            }
        })
    }

    textChanged(textInEditor: Event) {
      console.log(textInEditor);
      this.text = textInEditor.toString();
    }

}
