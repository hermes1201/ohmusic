import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MainpageComponent } from '../pages/mainpage/mainpage.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainpageComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
