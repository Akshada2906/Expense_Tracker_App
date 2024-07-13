import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css'],
})
export class AddIncomeComponent implements OnInit {
  source: string = '';
  gratuity: number;
  provident: number;
  date: Date;
  salary: number;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  onclickapp() {
    if (
      this.salary &&
      this.source &&
      this.gratuity &&
      this.provident &&
      this.date
    ) {
      const incomeData = {
        salary: this.salary,
        gratuity: this.gratuity,
        source: this.source,
        provident: this.provident,
        date: this.date,
      };
      this.http
        .post('http://localhost:3000/users/income', incomeData)
        .subscribe(
          (response) => {
            console.log('User has filled information successfully', response);
            this.router.navigate(['/add-expense']);
          },
          (error) => {
            console.error('Error occurs', error);
          }
        );
    } else {
      console.error('Please fill all the fields');
    }
  }
}
