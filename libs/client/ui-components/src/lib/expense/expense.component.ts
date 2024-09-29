import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';

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
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() expense: IExpense | undefined;

  @Output() toggleComplete = new EventEmitter<IExpense>();
  @Output() editExpense = new EventEmitter<IExpense>();
  @Output() deleteExpense = new EventEmitter<IExpense>();

  triggerToggleComplete = () => {
    this.toggleComplete.emit(this.expense);
  }

  triggerEdit = () => {
    this.editExpense.emit(this.expense);
  }

  triggerDelete = () => {
    this.deleteExpense.emit(this.expense);
  }
}
