import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PetTrainingDirective } from '../../directives/pet-training/pet-training.directive';

@Component({
  selector: 'pet-cat',
  templateUrl: './pet-cat.component.html',
  styleUrls: ['./pet-cat.component.scss'],
  imports: [CommonModule],
})
export class PetCatComponent extends PetTrainingDirective {
  override minEffort: number = 5;
  override maxEffort: number = 25; 

  override action: 'idle' | 'scratch' | 'pounce' | 'celebrate' | 'ignore' =
    'idle';

  override getRandomAction(): 'scratch' | 'pounce' {
    return Math.random() > 0.5 ? 'scratch' : 'pounce';
  }

  override getCelebrateMessage(): string {
    return '🐱 Training complete! Your cat learned to scratch & pounce!';
  }

  override trainPet(): void {
    if (this.completed) return;
    this.disableButton = true;

    const mood = Math.random();
    const effort = mood > 0.33 ? this.getRandomEffort() : 0;

    this.progress += effort;

    if (effort > 0) {
      this.action = this.getRandomAction();
      this.treats++;
    } else {
      this.action = 'ignore';
      this.disableButton = false;
    }

    if (this.progress >= 100) {
      this.progress = 100;
      this.completed = true;
      this.disableButton = true;
      this.onComplete();
    }
  }
}
