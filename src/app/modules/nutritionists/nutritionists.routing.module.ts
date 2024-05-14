// patients-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NutritionistDetailComponent } from './pages/nutri-detail/nutritionist-detail/nutritionist-detail.component';
import { NutritionistListComponent } from './pages/nutri-list/nutritrionist-list/nutritionist-list.component';
import { NutritionistCreateComponent } from './pages/nutri-create/nutritionist-create/nutritionist-create.component';

const routes: Routes = [
  { path: 'list', component: NutritionistListComponent },
  { path: 'detail/:id', component: NutritionistDetailComponent },
  { path: 'nutri-create', component: NutritionistCreateComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionistsRoutingModule {}
