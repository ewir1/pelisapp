import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenLogo'
})
export class ImagenLogoPipe implements PipeTransform {

  transform(pelicula: any): any {

    const url = 'http://image.tmdb.org/t/p/w500';

    if ( pelicula.production_companies[0].logo_path ) {
      return url + pelicula.production_companies[0].logo_path;

    } else {
      return 'assets/noimage.png';
    }

  }

}
