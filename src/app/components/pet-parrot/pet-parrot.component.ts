import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'pet-parrot',
  templateUrl: './pet-parrot.component.html',
  styleUrls: ['./pet-parrot.component.scss'],
  imports: [CommonModule]
})
export class PetParrotComponent implements OnInit {
  progress = 0;
  completed = false;
  treats = 0;


  action: 'idle' | 'flap' | 'spin' | 'celebrate' = 'idle';

  ngOnInit(): void {
    this.startTraining();
  }

  startTraining() {
    this.progress = 0;
    this.completed = false;
    this.treats = 0;
  }

  trainPet() {
    if (this.completed) return;

    // Randomize jump or roll
  this.action = Math.random() > 0.5 ? 'flap' : 'spin';

    // randomize effort between 10 and 30
    const effort = Math.floor(Math.random() * 21) + 10;
    this.progress += effort;
    this.treats++;

    if (this.progress >= 100) {
      this.progress = 100;
      this.completed = true;
      this.onComplete();
    }
  }

  resetAction() {
    this.action = 'idle';
  }

  //"celebrate completion"
  onComplete() {
    this.action = 'celebrate'; // trigger celebration animation
    setTimeout(() => {
       alert('🦜 Training complete! Your parrot learned to flap & spin!');
    }, 2500);
  }
}