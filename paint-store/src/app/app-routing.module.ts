import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintAddComponent } from './paint-add/paint-add.component';
import { PaintEditComponent } from './paint-edit/paint-edit.component';
import { PaintListComponent } from './paint-list/paint-list.component';

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: PaintListComponent},
  {path: "add", component: PaintAddComponent},
  {path: "edit/:id", component: PaintEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
