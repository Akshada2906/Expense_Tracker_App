import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
  date: Date;
  amount: number;
  category: string;
  payment: string;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}
  onclick() {
    console.log('Click');
    if (this.date && this.amount && this.category && this.payment) {
      const expensedata = {
        date: this.date,
        amount: this.amount,
        category: this.category,
        payment: this.payment,
      };
      this.http
        .post('http://localhost:3000/users/expense', expensedata)
        .subscribe(
          (response) => {
            console.log('User has filled information successfully', response);
            this.router.navigate(['/login']);
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
