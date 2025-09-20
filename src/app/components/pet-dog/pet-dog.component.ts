import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PetTrainingDirective } from "../../directives/pet-training/pet-training.directive";


@Component({
  selector: 'pet-dog',
  templateUrl: './pet-dog.component.html',
  styleUrls: ['./pet-dog.component.scss'],
  imports: [CommonModule]
})
export class PetDogComponent extends PetTrainingDirective {
  override action: 'idle' | 'jump' | 'roll' | 'celebrate' = 'idle';

  override getRandomAction(): string {
    return Math.random() > 0.5 ? 'jump' : 'roll';
  }

  override getCelebrateMessage(): string {
    return '🐶 Training complete! Your dog learned to jump & roll!';
  }

}