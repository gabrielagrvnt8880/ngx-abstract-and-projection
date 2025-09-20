import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetDogComponent } from './components/pet-dog/pet-dog.component';
import { PetCatComponent } from './components/pet-cat/pet-cat.component';
import { PetParrotComponent } from './components/pet-parrot/pet-parrot.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PetDogComponent,
    PetCatComponent,
    PetParrotComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ngx-abstract-and-projection';
}
