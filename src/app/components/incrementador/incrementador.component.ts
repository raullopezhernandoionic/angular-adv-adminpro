import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, Output, EventEmitter ,OnInit} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  // Como la instruccion esta en el ngOnInit solo se va a realizar una vez
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  //Indicamos con el @Input que podemos recibir una propiedad desde padre llamada "progress"

  @Input() progress: number = 50;

  //Output() Mandamos la propiedad dell hijo al padre
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  @Input() btnClass: string = 'btn-primary';


  changeValue(valor: number) {

    if (this.progress >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progress = 0;
    }
    this.valorSalida.emit(this.progress);
    return this.progress = this.progress + valor;
  }

  onChange(nuevoValor:any){

    if(nuevoValor >=100){
      this.progress = 100;
    }else if(nuevoValor <=0){
      this.progress = 0;
    }else{
      this.progress = nuevoValor
    }
    this.progress;
  }


}
