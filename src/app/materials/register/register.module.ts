import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';




const RegisterMaterialComponents =[
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatRadioModule,MatSelectModule,
]


@NgModule({

  imports: [ RegisterMaterialComponents ],
  exports: [ RegisterMaterialComponents ],
})
export class RegisterModule {

 }
