import { Injectable } from '@angular/core';
import { Edit } from '../models/edit.model';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  edits: Edit[]= [
    {
    "id":1,
    "email": "john.doe@gmail.com",
    "note": "Great book to read",
    "star": 5
  }
];

  constructor() { }
onGet(){
  return this.edits;
}

onEdit(edit: Edit){
  this.edits.push(edit);
}

}
