import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar: string;
  loading = false;

  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {

    this.route.params.subscribe( parametros => {
      console.log(parametros);
      if ( parametros['texto'] ) {
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    });

   }

  ngOnInit() {
  }

  buscarPelicula() {

    setTimeout(() => {
      this.loading = false;
      if (this.buscar.length === 0) {
        return;
      }

      this._ps.buscarpelicula(this.buscar)
        .subscribe(data => {
          console.log(data);
        });
    }, 2000);

    this.loading = true;
  }

}
