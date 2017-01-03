import { Component } from '@angular/core';

import { NavController, AlertController} from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  user: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
              public alertController: AlertController,
              public database: AngularFireDatabase) {
    this.user = this.database.list('/agenda');
  }
  
  createUser(){
    let newUserModal = this.alertController.create({
      title: 'user',
      message: 'plz',
      inputs: [
        {
          name : 'name',
          placeholder: 'Name'
        },
        {
          name: 'age',
          placeholder: 'Age'
        }
      ],
      buttons:[
        {
          text: 'exit',
          handler: data =>{
            console.log('exit');
          }
        },
        {
          text: 'Add',
          handler: data =>{
            this.user.push({
              u_name: data.name,
              u_age: data.age
            });
          }
        }
      ]
    });
   
    newUserModal.present(newUserModal);
  }
}
