import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { PetTrainingDirective } from "../../directives/pet-training/pet-training.directive";
import { PetTemplateComponent } from "../pet-template/pet-template.component";


@Component({
  selector: 'pet-parrot',
  templateUrl: './pet-parrot.component.html',
  styleUrls: ['./pet-parrot.component.scss'],
  imports: [CommonModule, PetTemplateComponent],
  encapsulation: ViewEncapsulation.None
})
export class PetParrotComponent extends PetTrainingDirective {
  override action: 'idle' | 'flap' | 'spin' | 'celebrate' = 'idle';
  override maxEffort: number = 15;

  override getAction(action: string): string {
    const actions: Record<string, string> = {
      'idle': 'perching',
      'flap': 'flapping wings',
      'spin': 'spinning around',
      'celebrate': 'celebrating'
    }
    return actions[action];
  }

  override getRandomAction(): string {
    return Math.random() > 0.5 ? 'flap' : 'spin';
  }

  override getCelebrateMessage(): string {
    return '🦜 Training complete! Your parrot learned to flap & spin!';
  }

}
