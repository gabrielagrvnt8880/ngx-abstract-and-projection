import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetDogComponent } from './components/pet-dog/pet-dog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PetDogComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ngx-abstract-and-projection';
}
