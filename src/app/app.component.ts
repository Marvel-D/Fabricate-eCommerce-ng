import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fabricate-eCommerce';

  constructor() {
    // this.items = firestore.collection('/items').valueChanges();
  }

  ngOnInit(): void {
    // this.retrieveItems();
  }
}
