import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PetTrainingDirective } from "../../directives/pet-training/pet-training.directive";


@Component({
  selector: 'pet-parrot',
  templateUrl: './pet-parrot.component.html',
  styleUrls: ['./pet-parrot.component.scss'],
  imports: [CommonModule]
})
export class PetParrotComponent extends PetTrainingDirective {
  override action: 'idle' | 'flap' | 'spin' | 'celebrate' = 'idle';
  override minEffort: number = 15;

  override getRandomAction(): string {
    return Math.random() > 0.5 ? 'flap' : 'spin';
  }

  override getCelebrateMessage(): string {
    return '🦜 Training complete! Your parrot learned to flap & spin!';
  }

}
