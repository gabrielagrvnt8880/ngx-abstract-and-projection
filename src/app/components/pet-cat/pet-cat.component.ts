
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'pet-cat',
  templateUrl: './pet-cat.component.html',
  styleUrls: ['./pet-cat.component.scss'],
  imports: [CommonModule]
})
export class PetCatComponent implements OnInit {
  progress = 0;
  completed = false;
  treats = 0;
  message = ''


  action: 'idle' | 'scratch' | 'pounce' | 'celebrate' = 'idle';

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
    this.action = Math.random() > 0.5 ? 'scratch' : 'pounce';

    // randomize effort between 10 and 30
    const effort = Math.floor(Math.random() * 21) + 10;
    this.progress += effort;
    this.treats++;

    if (this.progress >= 100) {
      this.progress = 100;
      this.completed = true;
      this.onComplete();
    }
    this.message = `🐱 Cat performed ${this.action}! Progress +${effort}%. Overall progress: ${this.progress}%`
  }

  resetAction() {
    this.action = 'idle';
  }

  //"celebrate completion"
  onComplete() {
    this.action = 'celebrate'; // trigger celebration animation
    setTimeout(() => {
      alert('🐱 Training complete! Your cat learned to scratch & pounce!');
    }, 3000);
  }
}