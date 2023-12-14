import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FooterCtnComponent } from "../containers/footer-ctn/footer-ctn.component";

@Component({
  standalone: true,
  imports: [RouterModule, FooterCtnComponent],
  selector: 'tsh-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
