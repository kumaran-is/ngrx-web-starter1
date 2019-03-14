import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderMaintenanceComponent } from '@app/under-maintenance/under-maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: UnderMaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnderMaintenanceRoutingModule {
  static components = [UnderMaintenanceComponent];
}
