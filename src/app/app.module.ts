import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialImportModule } from 'src/material.module';
import { BreedListComponent } from './breed-list/breed-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DogGalleryComponent } from './dog-gallery/dog-gallery.component';
import { AddDogComponent } from './add-dog/add-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreedListComponent,
    DogGalleryComponent,
    AddDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
