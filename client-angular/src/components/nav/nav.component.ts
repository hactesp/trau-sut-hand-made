import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import {NavSmComponent} from "../nav-sm/nav-sm.component";

@Component({
  selector: 'tsh-nav',
  standalone: true,
  imports: [CommonModule, NavSmComponent, NgOptimizedImage],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  expandMobileMenu = false;

  triggerSmallMenu() {
    this.expandMobileMenu = !this.expandMobileMenu;
  }
}
