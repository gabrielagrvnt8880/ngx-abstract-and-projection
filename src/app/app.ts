import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetDogComponent } from './components/pet-dog/pet-dog.component';
import { PetCatComponent } from './components/pet-cat/pet-cat.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PetDogComponent,
    PetCatComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected title = 'ngx-abstract-and-projection';
}
