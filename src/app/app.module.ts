import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


export const firebaseConfig = {
  apiKey: "AIzaSyAkviHEWDO0mAER7uihfu0AfRQIceC1v8s",
  authDomain: "ionic-firebase-6a6e6.firebaseapp.com",
  databaseURL: "https://ionic-firebase-6a6e6.firebaseio.com",
  storageBucket: "ionic-firebase-6a6e6.appspot.com",
  messagingSenderId: "150265599149"
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
