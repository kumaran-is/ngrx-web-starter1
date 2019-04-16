import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    ScrollingModule
  ],
  exports: [
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    ScrollingModule
  ]
})
export class MaterialModule {}