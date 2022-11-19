import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { item } from './items';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsCol?: AngularFirestoreCollection<item>;
  items?: Observable<item[]>;

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges() as Observable<
      item[]
    >;
  }

  getItems() {
    return this.items;
  }
}
