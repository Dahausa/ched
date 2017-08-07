// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// ACE Editor imports
import {AceEditorModule} from 'ng2-ace-editor';
// Gesture for material
import 'hammerjs';

// Custom
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { EditorComponent } from './editor/editor.component';
import { OutputModule } from './output/output.module';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    OutputModule,
    AceEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
