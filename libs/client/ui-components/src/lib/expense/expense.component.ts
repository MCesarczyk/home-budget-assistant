import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { IExpense } from '@hba/shared/domain';

@Component({
  selector: 'hba-expense',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseComponent {
  faCircle = faCircle;
  faCheck = faCheck;
  @Input() expense: IExpense | undefined;
}
