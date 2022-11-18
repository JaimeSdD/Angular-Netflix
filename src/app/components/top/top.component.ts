import { Itop } from './../../models/interfaces.app.';
import { Component } from '@angular/core';
import { topData } from 'src/app/data/films';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent  {

  public tops: Itop[] = topData;

}
