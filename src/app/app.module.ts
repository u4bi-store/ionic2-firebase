import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


export const firebaseConfig = {
  apiKey: "AIzaSyDnXo3gy2cLF-WS7AByVaWhARgu_gPaj7A",
  authDomain: "u4bi-crud-app.firebaseapp.com",
  databaseURL: "https://u4bi-crud-app.firebaseio.com",
  storageBucket: "u4bi-crud-app.appspot.com",
  messagingSenderId: "328438803411"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
