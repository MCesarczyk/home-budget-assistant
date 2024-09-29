import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, take } from 'rxjs';

import { ApiService } from '@hba/client/data-access';
import { ExpenseComponent } from '@hba/client/ui-components';
import { IExpense } from '@hba/shared/domain';

@Component({
  selector: 'lib-feature-dashboard',
  standalone: true,
  imports: [CommonModule, ExpenseComponent],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.scss',
})
export class FeatureDashboardComponent implements OnInit {
  private readonly apiService = inject(ApiService);

  expenses$ = new BehaviorSubject<IExpense[]>([]);

  trackExpense(idx: number, expense: IExpense) {
    return expense.id;
  }

  ngOnInit(): void {
    this.refreshItems();
  }

  refreshItems() {
    this.apiService.getAllExpenses().pipe(take(1)).subscribe((expenses) => {
      this.expenses$.next(expenses);
    });
  }

  toggleComplete(expense: IExpense) {
    this.apiService.updateExpense(expense.id, { completed: !expense.completed }).pipe(take(1)).subscribe(() => {
      this.refreshItems();
    });
  }

  deleteExpense(expense: IExpense) {
    this.apiService.deleteExpense(expense.id).pipe(take(1)).subscribe(() => {
      this.refreshItems();
    });
  }
}
