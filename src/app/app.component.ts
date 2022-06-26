import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular14-login-auth0';
user:any={}
  isAuthenticated: boolean;

  constructor(@Inject(DOCUMENT) private document: Document,
              private authService: AuthService) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    });

   
      this.authService.user$.subscribe((success: any) => {
        this.user = success;
        console.log(success)
      });
    
  }

  public signOut(): void {
    this.authService.logout({
      returnTo: this.document.location.origin,
    });
  }
}
