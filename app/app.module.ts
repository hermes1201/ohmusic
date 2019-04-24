import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainpageComponent } from '../pages/mainpage/mainpage.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Firebase
var config = {
    apiKey: "AIzaSyCFQsHo-2VjXKQIl_0kq6QZTnY_Y0hoghc",
    authDomain: "ohmusic1201.firebaseapp.com",
    databaseURL: "https://ohmusic1201.firebaseio.com",
    projectId: "ohmusic1201",
    storageBucket: "ohmusic1201.appspot.com",
    messagingSenderId: "244466396921"
  };

@NgModule({
  declarations: [
    MyApp,
    MainpageComponent,
    CadastroComponent
  
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainpageComponent,
    CadastroComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
