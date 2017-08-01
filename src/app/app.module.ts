// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// Ace
import { AceEditorDirective } from 'ng2-ace-editor';

// Custom
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { EditorComponent } from './editor/editor.component';
import { PlainTxtOutputComponent } from './plain-txt-output/plain-txt-output.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    AceEditorDirective,
    PlainTxtOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
