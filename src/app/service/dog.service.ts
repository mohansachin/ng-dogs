import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getBreedList(): Observable<any> {
    return this.http.get("https://dog.ceo/api/breeds/list/all")
  }

  getSubBreedList(subBreed: String): Observable<any> {
    return this.http.get("https://dog.ceo/api/breed/" + subBreed + "/list")
  }

  getSubBreedImages(breed: String, subBreed: String): Observable<any> {
    return this.http.get("https://dog.ceo/api/breed/" + breed + "/" + subBreed + "/images/random/12")
  }

  getBreedImages(breed: String): Observable<any> {
    return this.http.get("https://dog.ceo/api/breed/" + breed + "/images/random/12")
  }
}
