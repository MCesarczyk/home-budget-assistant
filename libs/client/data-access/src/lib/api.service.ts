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
    return this.http.get<IExpense[]>('/api/expenses');
  }

  getExpenseById(expenseId: string): Observable<unknown> {
    return this.http.get<IExpense>(`/api/expenses/${expenseId}`);
  }

  createExpense(expenseData: unknown): Observable<unknown> {
    return this.http.post<IExpense>('/api/expenses', expenseData);
  }

  updateExpense(expenseId: string, expenseData: unknown): Observable<unknown> {
    return this.http.patch<IExpense>(`/api/expenses/${expenseId}`, expenseData);
  }

  createOrUpdateExpense(expenseData: unknown): Observable<unknown> {
    return this.http.put<IExpense>('/api/expenses', expenseData);
  }

  deleteExpense(expenseId: string): Observable<unknown> {
    return this.http.delete<never>(`/api/expenses/${expenseId}`);
  }
}
