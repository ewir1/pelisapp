import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public _ps: PeliculasService) {
    this._ps.getCartelera()
        .subscribe(data => {
          this.cartelera = data;
          console.log(this.cartelera);
        });

    this._ps.getPopulares()
      .subscribe(data => {
        this.populares = data;
        console.log(this.populares);
      });

    this._ps.getPopularesNinos()
      .subscribe(data => {
        this.popularesNinos = data;
        console.log(this.popularesNinos);
      });
  }

  ngOnInit() {
  }


}
