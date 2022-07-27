import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Esta proiedad nos permite recibir parametros para el componente
  @Input() item: Item =new Item();

  constructor() { }

  ngOnInit(): void {
  }

}
