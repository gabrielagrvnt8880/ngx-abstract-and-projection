import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'pet-dog',
  templateUrl: './pet-dog.component.html',
  styleUrls: ['./pet-dog.component.scss']
})
export class PetDogComponent implements OnInit {
  progress = 0;
  completed = false;
  treats = 0;

  ngOnInit(): void {
    this.startTraining();
  }

  startTraining() {
    this.progress = 0;
    this.completed = false;
    this.treats = 0;
  }

  trainPet(amount: number = 20) {
    if (this.completed) return;

    this.progress += amount;
    this.treats++;

    if (this.progress >= 100) {
      this.progress = 100;
      this.completed = true;
      this.onComplete();
    }
  }

  //"celebrate completion"
  onComplete() {
    alert(`Dog training completed! Total treats given: ${this.treats}`);
  }
}