import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.page.html',
  styleUrls: ['./home-login.page.scss'],
})
export class HomeLoginPage {

  userEmail: String = "";
  isLogged: boolean;

  
  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private callNumber: CallNumber, // Llamar por telefono
    public afAuth: AngularFireAuth
  ) { }
  
  ionViewDidEnter() {
    this.isLogged = false;
    this.afAuth.user.subscribe(user => {
      if(user){
        this.userEmail = user.email;
        this.isLogged = true;
      }
    })
  }

  login() {
    this.router.navigate(["/login"]);
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.userEmail = "";
      this.isLogged = false;
      console.log(this.userEmail);
    }, err => console.log(err));
  }

  mapa() {
    this.router.navigate(["/mapa/"]);
  }

  volver(){
    this.router.navigate(["/home"]);
  }

  perfil(){
    this.router.navigate(["/home-login"]);
  }

  llamar() {
    this.callNumber.callNumber("666666666", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
