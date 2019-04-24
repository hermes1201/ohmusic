import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from 'ionic-angular';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent
{
   public musicas: Observable<any[]>;

  // 2. INJETAR O SERVIÇO NO CONSTRUTOR
  constructor (public db: AngularFirestore,
              public navCtrl: NavController
               )
  {
    this.musicas = db.collection ("musicas", ref => ref.orderBy('nome')).valueChanges();
  }

  cadastro() {
    this.navCtrl.push(CadastroComponent);
  }

}