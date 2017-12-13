import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { ContactPage } from '../pages/contact/contact';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { LinkedIn } from '@ionic-native/linkedin';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage';
import { VerificationPage } from '../pages/verification/verification';
import { HttpModule } from '@angular/http';
import {Firebase} from '@ionic-native/firebase';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireDatabase } from 'angularfire2/database';


const firebaseConfig = {
    apiKey: "AIzaSyDoyBEPUb20hYby9T676KcqbF84UPIO7LA",
    authDomain: "firepro-56d7b.firebaseapp.com",
    databaseURL: "https://firepro-56d7b.firebaseio.com",
    projectId: "firepro-56d7b",
    storageBucket: "firepro-56d7b.appspot.com",
    messagingSenderId: "925682647131"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VerificationPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VerificationPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    LinkedIn,
    ThemeableBrowser,
    Facebook,
    NativeStorage,
    Firebase,
    Contacts,
    SMS,
    SocialSharing,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
