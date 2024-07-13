import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
sideMenus: any;

  constructor(private router:Router) {
    this.sideMenus = [
      {
        routerLink: "/add-income",
        label: "Income"
      },
      {
        routerLink: "/add-expense",
        label: "Expense"
      },
      {
        routerLink: "summary",
        label: "Summary"
      }
    ]
   }

  ngOnInit(): void {
  }
}


