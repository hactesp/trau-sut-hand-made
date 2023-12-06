import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "../../components/nav/nav.component";

@Component({
  selector: 'tsh-nav-ctn',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavContainerComponent {}
