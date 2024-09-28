import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IExpense } from '@hba/shared/domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getAllExpenses(): Observable<IExpense[]> {
    return this.http.get<IExpense[]>('/api/v1/expenses');
  }

  getExpenseById(expenseId: string): Observable<unknown> {
    return this.http.get<IExpense>(`/api/v1/expenses/${expenseId}`);
  }

  createExpense(expenseData: unknown): Observable<unknown> {
    return this.http.post<IExpense>('/api/v1/expenses', expenseData);
  }

  updateExpense(expenseId: string, expenseData: unknown): Observable<unknown> {
    return this.http.patch<IExpense>(`/api/v1/expenses/${expenseId}`, expenseData);
  }

  createOrUpdateExpense(expenseData: unknown): Observable<unknown> {
    return this.http.put<IExpense>('/api/v1/expenses', expenseData);
  }

  deleteExpense(expenseId: string): Observable<unknown> {
    return this.http.delete<never>(`/api/v1/expenses/${expenseId}`);
  }
}
