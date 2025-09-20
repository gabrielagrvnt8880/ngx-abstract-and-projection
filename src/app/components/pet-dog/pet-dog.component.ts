import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { PetTrainingDirective } from "../../directives/pet-training/pet-training.directive";
import { PetTemplateComponent } from "../pet-template/pet-template.component";


@Component({
  selector: 'pet-dog',
  templateUrl: './pet-dog.component.html',
  styleUrls: ['./pet-dog.component.scss'],
  imports: [CommonModule, PetTemplateComponent],
  encapsulation: ViewEncapsulation.None
})
export class PetDogComponent extends PetTrainingDirective {
  override action: 'idle' | 'jump' | 'roll' | 'celebrate' = 'idle';

  override getRandomAction(): string {
    return Math.random() > 0.5 ? 'jump' : 'roll';
  }

  override getAction(action: string): string {
    const actions: Record<string, string> = {
      'idle': 'resting',
      'jump': 'jumping',
      'roll': 'rolling over',
      'celebrate': 'celebrating'
    }
    return actions[action];
  }

  override getCelebrateMessage(): string {
    return '🐶 Training complete! Your dog learned to jump & roll!';
  }

}