import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA = '';
  busqueda = '';

  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {

    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];

      if ( parametros['busqueda'] ) {
        this.busqueda = parametros['busqueda'];
      }

      this._ps.getPelicula(parametros['id'])
          .subscribe( pelicula => {
           this.pelicula = pelicula;
           console.log(pelicula);
          });
    });

  }

  ngOnInit() {
  }

}
