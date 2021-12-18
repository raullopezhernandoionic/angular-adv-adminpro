import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs:Subscription;

  constructor() {
    // this.retornaObservable().pipe(
    //   retry(2)
    //     ).subscribe(
    //     //El valor emitido por next lo cogemos aqui
    //     valor => console.log('Subs', valor),
    //     error => console.warn('Error', error),
    //     () => console.info('Obs terminado')
    //   );
    this.intervalSubs = this.retornaIntervalo().subscribe((valor) => {
      console.log(valor)
    });

  }


  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo() {
    return interval(500)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0 ? true : false),
          take(10)
        ));

  }


  retornaObservable(): Observable<number> {
    //El simbolo $ lo ponemos en el nombre de la constante para indicar
    // de que se trata de un obsevable
    let i = -1;
    const obs$ = new Observable<number>(observer => {

      const interval = setInterval(() => {
        i++;
        //Para poder emitir el valor necesitamos el metodo o funcion next()
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          //Con 'complete()' notificamos que ya no se van a dar mas interval
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    })

    return obs$;
  }
}








