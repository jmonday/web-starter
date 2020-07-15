import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './_services';
import { User } from './_interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'App';
  public user: User | null = null;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
    this.authorizationService.user.subscribe(
      (user: User | null) => (this.user = user)
    );
  }

  logout(): void {
    this.authorizationService.logout().subscribe((_) => {
      this.router.navigate(['/login']);
    });
  }
}
