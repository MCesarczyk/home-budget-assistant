import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hba-client-ui-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-ui-components.component.html',
  styleUrl: './client-ui-components.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUiComponentsComponent {}
