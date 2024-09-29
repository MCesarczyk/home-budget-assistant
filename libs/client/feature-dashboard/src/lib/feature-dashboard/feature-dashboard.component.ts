import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@hba/client/data-access';
import { ExpenseComponent } from '@hba/client/ui-components';

@Component({
  selector: 'lib-feature-dashboard',
  standalone: true,
  imports: [CommonModule, ExpenseComponent],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.scss',
})
export class FeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  expenses$ = this.apiService.getAllExpenses();
}
