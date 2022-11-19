import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { item } from '../items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  items?: item[] | null;
  constructor(private service: ItemService) {}

  ngOnInit(): void {
    this.service.getItems()?.subscribe((item) => (this.items = item));
    console.log('working');
  }
}
