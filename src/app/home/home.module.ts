import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/home/home.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
