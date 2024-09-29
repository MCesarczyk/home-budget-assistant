import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hba-expense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseComponent {}
