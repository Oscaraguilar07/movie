import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listPelicula : any[]=[];

  constructor(
    public http: HttpClient,
    public route: Router
  ) { }

  ngOnInit() {

    this.http.get('../../assets/movies/movies_all.JSON').subscribe(data => {
      this.listPelicula = JSON.parse(JSON.stringify(data))[0].detailPelicula;


      
    });
  }

  Navigate(value:any){

    this.route.navigate(['detamovie'])
    localStorage.setItem('detallePelicula', JSON.stringify(value))



    
  }

}
