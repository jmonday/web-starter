import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../_services';
import { User } from '../_interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public user: User | null = null;

  constructor(private authorizationService: AuthorizationService) {
    this.authorizationService.user.subscribe(
      (user: User | null) => {this.user = user;}
    );
  }

  ngOnInit(): void {}
}
