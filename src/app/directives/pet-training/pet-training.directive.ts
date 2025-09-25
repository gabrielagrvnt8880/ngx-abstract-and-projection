import { Directive, OnInit } from "@angular/core";

@Directive()
export abstract class PetTrainingDirective implements OnInit {
  progress = 0;
  completed = false;
  treats = 0;
  minEffort = 10;
  maxEffort = 30;

  action: string = 'idle';

  ngOnInit(): void {
    this.startTraining();
  }

  startTraining() {
    this.progress = 0;
    this.completed = false;
    this.treats = 0;
  }

  abstract getRandomAction(): string;

  public getRandomEffort(): number {
    return Math.floor(Math.random() * (this.maxEffort - this.minEffort + 1)) + this.minEffort;
  }

  trainPet() {
    if (this.completed) return;

    this.action = this.getRandomAction();

    const effort = this.getRandomEffort();
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

  public getCelebrateMessage(): string {
    return 'Training complete! Your pet is celebrating!';
  }

  //"celebrate completion"
  onComplete() {
    this.action = 'celebrate'; // trigger celebration animation
    setTimeout(() => {
      alert(this.getCelebrateMessage());
    }, 3000);
  }


}