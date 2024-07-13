import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = { username: '', email: '', password: '' };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  onclick(): void {
    console.log("Click");
    if (this.user.username && this.user.password && this.user.email) {
      console.log(this.user);
      this.http.post('http://localhost:3000/users/signup', this.user)
        .subscribe(
          response => {
            console.log('User created successfully', response);

          },
          error => {
            console.error('Error occurs', error);
          }
        );
        setTimeout(() => {
          // this.loading = false;
          this.router.navigate(['/login']);
        }, 800);
    } else {
      console.error('All fields are required');
    }
  }
}
