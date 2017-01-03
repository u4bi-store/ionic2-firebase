import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

}
