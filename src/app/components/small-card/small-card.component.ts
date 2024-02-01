import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.css']
})
export class SmallCardComponent {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
}
