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
  
  updateUser(u){
    let updateUserModal = this.alertController.create({
      title: 'edit user',
      message: 'plz',
      inputs: [
        {
          name : 'name',
          placeholder: 'Name',
          value: u.u_name
        },
        {
          name: 'age',
          placeholder: 'Age',
          value: u.u_age
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
          text: 'Edit',
          handler: data =>{
            this.user.update( u.$key, {
              u_name: data.name,
              u_age: data.age
            });
          }
        }
      ]
    });

    updateUserModal.present(updateUserModal);
  }

  removeUser(user){
    this.user.remove(user);
  }
}
