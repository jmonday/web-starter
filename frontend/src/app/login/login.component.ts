import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../_services';
import { User } from '../_interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  loading = false;
  submitted = false;
  returnUrl = '/';
  errors: { [key: string]: string } = {};

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
    if (this.authorizationService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authorizationService
      .login(this.f.email.value, this.f.password.value)
      .subscribe(
        (user: User) => {
          this.router.navigate([this.returnUrl]);
        },
        (response) => {
          this.errors = response.error.errors;
          this.loading = false;
        }
      );
  }
}
