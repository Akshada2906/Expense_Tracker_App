import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  products: any[] = []; // Declare products property

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getProducts().subscribe((data: any) => {
    //   console.log('Products:', data);
    //   this.products = data;
    // });
  }
}
