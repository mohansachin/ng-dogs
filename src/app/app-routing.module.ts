import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogGalleryComponent } from './dog-gallery/dog-gallery.component';

const routes: Routes = [
  { path: 'gallery/:breed', component: DogGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
