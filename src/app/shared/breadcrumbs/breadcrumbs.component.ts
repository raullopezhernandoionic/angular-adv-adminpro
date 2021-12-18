import { Component } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent  {

  //public titulo: string;
  // public tituloSubs$: Subscription;


  constructor( private router: Router) {

  //   this.tituloSubs$ = this.getArgumentosRuta()
  //                       .subscribe( ({ titulo }) => {
  //                           this.titulo = titulo;
  //                           document.title = `AdminPro - ${ titulo }`;
  //                       });
  // }
  // ngOnDestroy(): void {
  //   this.tituloSubs$.unsubscribe();
  // }


  // getArgumentosRuta() {

  //   return this.router.events
  //     .pipe(
  //       //filter( event => event instanceof ActivationEnd ),
  //       //filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
  //       //map( (event: ActivationEnd) => event.snapshot.data ),
  //     );
  }




}
