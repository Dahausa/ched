import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongConfigurationComponent } from './song-configuration/song-configuration.component';
import { PlainTxtOutputComponent } from './plain-txt-output/plain-txt-output.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ColorPickerModule} from 'angular4-color-picker';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    ColorPickerModule
  ],
  declarations: [SongConfigurationComponent, PlainTxtOutputComponent],
  exports: [SongConfigurationComponent, PlainTxtOutputComponent]
})
export class OutputModule { }
