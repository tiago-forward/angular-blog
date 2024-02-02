import { Component } from '@angular/core';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home.responsive.css'],
    imports: [ SmallCardComponent, BigCardComponent, MenuTitleComponent]
})
export class HomeComponent {

}
