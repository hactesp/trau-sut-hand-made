import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavSmComponent} from "../nav-sm/nav-sm.component";

@Component({
  selector: 'tsh-nav',
  standalone: true,
  imports: [CommonModule, NavSmComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
