import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputsComponent,
    ReactiveFormsModule]
})
export class SharedModule { }
