import { sectionsData, topData } from './data/films';
import { Isection, Itop } from './models/interfaces.app.';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public sections: Isection[] = sectionsData;

  public title: string;

  public getTitle = (movieTitle: string) => {
    this.title = movieTitle;
  }

  public clear(){
    this.title = "";
  }

}

