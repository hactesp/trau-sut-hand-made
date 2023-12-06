import {Component} from "@angular/core";
import { NavContainerComponent} from "../../containers/nav-ctn/nav.component";

@Component({
  standalone: true,
  selector: "tsh-landing",
  styleUrls: ['landing.component.scss'],
  imports: [
    NavContainerComponent
  ],
  templateUrl: "landing.component.html"
})
export class LandingComponent {
}
