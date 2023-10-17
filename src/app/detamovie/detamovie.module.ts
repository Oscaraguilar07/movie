import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetamoviePageRoutingModule } from './detamovie-routing.module';

import { DetamoviePage } from './detamovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetamoviePageRoutingModule
  ],
  declarations: [DetamoviePage]
})
export class DetamoviePageModule {}
