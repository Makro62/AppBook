import { Injectable } from '@angular/core';
import { Home } from '../models/Home.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homes: Home[]= [
    {
      "id": 1,
      "nama":"Harry Potter",
      "year": 2010,
    }
  ]

  constructor() { }

  onGet(){
    return this.homes;
  }
  
  onAdd(home: Home){
    this.homes.push(home);
}
