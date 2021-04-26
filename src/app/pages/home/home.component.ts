import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Home } from 'src/app/models/Home.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homes: Home[]; 

  constructor(private homeService:HomeService ) { }

  ngOnInit(): void {
  this.homes = this.homeService.onGet();  
  }

  
  onSubmit(form: NgForm){
    let home: Home = {
      id: form.value.id,
      nama: form.value.nama,
      year: form.value.year
    }
    this.homeService.onAdd(home);
  }
}