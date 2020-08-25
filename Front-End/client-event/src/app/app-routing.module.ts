import { DetailsEventComponent } from './details-event/details-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEventComponent } from './list-event/list-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  { path: '', redirectTo: 'eventos', pathMatch: 'full' },
  { path: 'eventos', component: ListEventComponent },
  { path: 'cadastrar', component: CreateEventComponent },
  { path: 'atualizar/:id', component: UpdateEventComponent },
  { path: 'detalhes/:id', component: DetailsEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }