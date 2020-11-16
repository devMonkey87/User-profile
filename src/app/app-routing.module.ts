import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
