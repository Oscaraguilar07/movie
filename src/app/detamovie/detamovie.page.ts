 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detamovie',
  templateUrl: './detamovie.page.html',
  styleUrls: ['./detamovie.page.scss'],
})
export class DetamoviePage implements OnInit {

  peliDetail: any = [];
  
  show:String='';
  title: String='';
  alterTitle: String='';
  date: String='';
  genero: String='';

  text_small:String='';
  text_long :String='';
  url_imag: String='';
  url_imag_port: String='';



  stars: boolean[] = [false, false, false, false, false];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.peliDetail=localStorage.getItem('detallePelicula');
    this.peliDetail = JSON.parse(this.peliDetail);
    
    this.show=this.peliDetail[1];
    this.title=this.peliDetail.title;
    this.alterTitle=this.peliDetail.alterTitle;
    this.date=this.peliDetail.date;
    this.genero=this.peliDetail.genero;
    this.text_small=this.peliDetail[5];
    this.text_long =this.peliDetail.text_long;
    this.url_imag=this.peliDetail[7];
    this.url_imag_port=this.peliDetail.url_imag_port;

    console.log("detalle pelicula", this.peliDetail)

  }

  generateArray(length: number): any[] {
    return new Array(length);
  }
  

  rateStar(event: Event, index: number) {
    event.stopPropagation();
    this.stars = this.stars.map((_, i) => i <= index);
  }
  

}