import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'fabricate-ecom '),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
