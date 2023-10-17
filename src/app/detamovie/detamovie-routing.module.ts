import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetamoviePage } from './detamovie.page';

const routes: Routes = [
  {
    path: '',
    component: DetamoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetamoviePageRoutingModule {}
