import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Edit } from 'src/app/models/edit.model';
import { Home } from 'src/app/models/Home.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  home: Home = {
    id: 0,
    nama:'',
    year: ''
  }; 
  
  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    }
  
  onSubmit(form: NgForm){
    let edits : Edit = {
      id: form.value.id,
      email: form.value.email,
      note: form.value.note,
      star: form.value.star
    }
    this.homeService.onAdd(edits);
  }

}
