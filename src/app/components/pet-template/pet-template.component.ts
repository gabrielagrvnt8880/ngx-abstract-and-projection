import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { PetTrainingDirective } from "../../directives/pet-training/pet-training.directive";

@Component({
  selector: 'pet-template',
  templateUrl: './pet-template.component.html',
  styleUrls: ['./pet-template.component.scss'],
  imports: [CommonModule],

})
export class PetTemplateComponent {
  @Input() petName!: string;
  @Input() petEmoji!: string;
  @Input() petClass!: string;
  @Input({ required: true }) pet!: PetTrainingDirective;

}