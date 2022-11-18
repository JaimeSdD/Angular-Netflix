import { Isection } from './../../models/interfaces.app.';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  @Input() public filmsSection: Isection;

  @Output() public filmTitle = new EventEmitter<string>();

  public sendTitle = (movieTitle: string): void => {
    this.filmTitle.emit(movieTitle);
  };
}
