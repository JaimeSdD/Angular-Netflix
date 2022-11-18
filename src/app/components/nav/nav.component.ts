import { Iimage } from '../../models/interfaces.app.';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public logo: Iimage = {
    src: "https://occ-0-2186-37.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWhcthqcCWoL2pIk6N-teUXJ7wzQjcO1GLqCbjjvzAuRJgXmdxI54qmrNqH2FfW9mAogj-8wF45_OyqTk-hkCGxCT9l8wmisfvGwLr9yKlcv.png?r=26d",
    alt: ""
  }
}
