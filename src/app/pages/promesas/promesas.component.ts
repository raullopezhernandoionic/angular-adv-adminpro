import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })

    // Cuando la promesa se ejecuta correctamente llamamos a la funcion resolve()
    // const promesa = new Promise((resolve, reject) => {

    //   if ( false ) {
    //     resolve('Hola Mundo')
    //   } else {
    //     reject('Algo salio mal');
    //   }

    // });

    // then() --> Es lo que queremos ejecutar cuando la promesa se resuelva
    //La parte del then es la parte que es async o asincrona
    // El mensaje es la parte que queremos que nos devuelva cuando
    // se resuelva la promesa en este caso cuando se resuelva nos mostrara por consola "Hola Mundo"

    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch( error =>{
    //   console.log('Error en mi promesa ' + error)
    // })

    // console.log('Fin Init');
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });
  }

}
