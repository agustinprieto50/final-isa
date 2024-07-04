import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials).subscribe(
      async () => {
        await loading.dismiss();
        this.router.navigateByUrl('/home', { replaceUrl: true });
      },
      async (error) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: 'Please check your credentials and try again.',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }
}
