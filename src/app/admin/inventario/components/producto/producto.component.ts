import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  categorias: any = [
    { name: 'Ropa Dama', code: 'RD' },
    { name: 'Ropa Caballero', code: 'RC' },
    { name: 'Herramientas', code: 'He' },
    { name: 'Tecnologias', code: 'Tec' },
    { name: 'Hogar', code: 'Hgr' }
  ]
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
