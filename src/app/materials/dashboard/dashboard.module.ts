import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const DashboardMaterialComponents = [
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule
]

@NgModule({
  imports: [ DashboardMaterialComponents ],
  exports: [ DashboardMaterialComponents ]
})
export class DashboardModule { }
