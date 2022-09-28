import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-dog-gallery',
  templateUrl: './dog-gallery.component.html',
  styleUrls: ['./dog-gallery.component.css']
})
export class DogGalleryComponent implements OnInit {

  routeSub: any;
  breed: String;
  subBreeds: any;
  images: any;
  constructor(private route: ActivatedRoute, public dogService: DogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subBreeds = null;
      this.breed = params['breed'];
      if (this.breed) {
        forkJoin({
          breedImages: this.dogService.getBreedImages(this.breed),
          subBreedList: this.dogService.getSubBreedList(this.breed)
        }).subscribe(({ breedImages, subBreedList }) => {
          if (breedImages.message.length > 0) {
            this.images = breedImages.message;
          }
          if (subBreedList.message.length > 0) {
            this.subBreeds = subBreedList.message;
          }
        });
      }
    });
  }

  loadImagesForSubBreed(breedName: string) {
    this.dogService.getSubBreedImages(this.breed, breedName).subscribe(result => {
      if (result.message.length > 0) {
        this.images = result.message;
      }
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}