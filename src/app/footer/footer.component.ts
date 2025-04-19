import { Component } from '@angular/core';
import { developer } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  developer = developer;
  currentYear = new Date().getFullYear();
}
