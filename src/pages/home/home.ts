import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { ContactPage } from '../contact/contact';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthProvider, private contacts: Contacts, private sms: SMS,private socialSharing: SocialSharing) {
  }
  signOut() {
    this.authData.logoutUser()
      .then(() => {
        this.navCtrl.push('LoginPage');
      });
  }
  GetAllContacts() {
    this.navCtrl.push(ContactPage);
  }
  inviteFriends() {
    let message = "Just Invited You to Group Alarm.Download Now https://play.google.com/store?hl=en";
    this.socialSharing.share(message);
  }
}
