import { Component, OnInit } from '@angular/core';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {

  public links: any;
  Object = Object;
  constructor(public dogService: DogService) {
  }

  ngOnInit(): void {
    this.dogService.getBreedList().subscribe(resposne => {
      this.links = Object.keys(resposne.message)
    });
  }

}
