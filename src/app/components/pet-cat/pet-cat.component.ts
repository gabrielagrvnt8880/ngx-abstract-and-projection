import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { PetTrainingDirective } from '../../directives/pet-training/pet-training.directive';
import { PetTemplateComponent } from '../pet-template/pet-template.component';

@Component({
  selector: 'pet-cat',
  templateUrl: './pet-cat.component.html',
  styleUrls: ['./pet-cat.component.scss'],
  imports: [CommonModule, PetTemplateComponent],
  encapsulation: ViewEncapsulation.None
})
export class PetCatComponent extends PetTrainingDirective {
  override minEffort: number = 5;
  override maxEffort: number = 25;

  override action: 'idle' | 'scratch' | 'pounce' | 'celebrate' | 'ignore' =
    'idle';

  override getRandomAction(): 'scratch' | 'pounce' {
    return Math.random() > 0.5 ? 'scratch' : 'pounce';
  }

  override getAction(action: string): string {
    const actions: Record<string, string> = {
      'idle': 'sleeping',
      'scratch': 'scratching',
      'pounce': 'pouncing',
      'ignore': 'yawning',
      'celebrate': 'celebrating'
    }
    return actions[action];
  }

  override getCelebrateMessage(): string {
    return '🐱 Training complete! Your cat learned to scratch & pounce!';
  }

  override trainPet() {
    if (this.completed) return;
    this.disableButton = true;

    const mood = Math.random();
    const effort = mood > 0.33 ? this.getRandomEffort() : 0;
    this.currentEffort = effort;

    if (effort > 0) {
      this.action = this.getRandomAction();
    } else {
      this.action = 'ignore';
    }
  }


}
