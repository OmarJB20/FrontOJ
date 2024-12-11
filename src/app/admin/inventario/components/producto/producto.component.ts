import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"},
    {id:1, nombre:"CompuGamer", precio:334.99, categoria_id: 3, stock:12, estado:"Completado"}, 
   ];
   cols: any[]=[];


  openNew(){

  }

editProduct(prod:any){

}

deleteProduct(prod:any){

}

}
