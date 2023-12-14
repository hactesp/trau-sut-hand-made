import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tsh-nav-sm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-sm.component.html',
  styleUrl: './nav-sm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSmComponent {
  @Input() expandMenu: boolean = false;
}
