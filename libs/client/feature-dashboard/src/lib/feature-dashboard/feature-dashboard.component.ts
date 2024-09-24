import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@hba/client/data-access';

@Component({
  selector: 'lib-feature-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.scss',
})
export class FeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  expenses$ = this.apiService.getAllExpenses();

  NgOnInit() {
    console.log('expenses$', this.expenses$);
  }
}
