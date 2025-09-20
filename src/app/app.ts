import { Component } from '@angular/core';
import { PetCatComponent } from './components/pet-cat/pet-cat.component';
import { PetDogComponent } from './components/pet-dog/pet-dog.component';
import { PetParrotComponent } from './components/pet-parrot/pet-parrot.component';
import { PetTemplateComponent } from './components/pet-template/pet-template.component';

@Component({
  selector: 'app-root',
  imports: [
    PetDogComponent,
    PetCatComponent,
    PetParrotComponent,
    PetTemplateComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ngx-abstract-and-projection';
}
