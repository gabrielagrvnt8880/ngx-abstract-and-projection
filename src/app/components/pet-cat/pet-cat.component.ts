
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PetTrainingDirective } from "../../directives/pet-training/pet-training.directive";


@Component({
  selector: 'pet-cat',
  templateUrl: './pet-cat.component.html',
  styleUrls: ['./pet-cat.component.scss'],
  imports: [CommonModule]
})
export class PetCatComponent extends PetTrainingDirective {
  override minEffort: number = 5;
  override maxEffort: number = 25;

  override action: 'idle' | 'scratch' | 'pounce' | 'celebrate' = 'idle';

  override getRandomAction(): string {
    return Math.random() > 0.5 ? 'scratch' : 'pounce';
  }

  override getCelebrateMessage(): string {
    return '🐱 Training complete! Your cat learned to scratch & pounce!';
  }

}