import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  private invitelistToShow:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private contacts: Contacts,private sms: SMS,private socialSharing: SocialSharing) {
    this.invitelistToShow = this.navParams.get('allContacts');
    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
    .then(data => {
      alert('to send =>'+JSON.stringify(data));
      this.invitelistToShow = data;     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  invite(number){
  let message="Just Invited You to Group Alarm.Download Now https://play.google.com/store?hl=en";
   this.socialSharing.share(message);

  // this.sms.send(number, message).then((data)=>{
  //     alert("data =>"+data);
  // }), (error) => {
  //   alert("error =>"+JSON.stringify(error));
  // }
  }
}
