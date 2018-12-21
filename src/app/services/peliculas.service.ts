import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = '08041c6ca7bfd3a4ee73fa0f6e2b104e';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor(private jsonp: Jsonp) {}

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() +
      1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() +
      1}-${hasta.getDate()}`;

    const url = `${
      this.urlMoviedb
    }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.
    lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map(res => res.json().results));
  }

  getPopulares() {
    const url = `${
      this.urlMoviedb
    }/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map(res => res.json().results));
  }

  getPopularesNinos() {
    const url = `${
      this.urlMoviedb
    }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.
    desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map(res => res.json().results));
  }

  buscarpelicula(texto: string) {
    const url = `${
      this.urlMoviedb
    }/search/movie/?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(
      map(res => {
        this.peliculas = res.json().results;
        return res.json().results;
      })
    );
  }

  getPelicula(id: string) {
    const url = `${
      this.urlMoviedb
      }/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map(res => res.json()));
  }
}
