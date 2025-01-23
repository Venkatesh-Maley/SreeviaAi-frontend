import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projectsCompleted = 0;
  clientsTrusted = 0;
  employeesCount = 0;
  projectsCount =0;

  targetProjects = 100;
  targetClients = 120;
  targetEmployees = 100;
  targetLaunch = 30;

  // Add index signature to the class to allow dynamic property access
  [key: string]: any;

  ngOnInit(): void {
    this.animateNumber('projectsCompleted', this.targetProjects, 10);
    this.animateNumber('clientsTrusted', this.targetClients, 10);
    this.animateNumber('employeesCount', this.targetEmployees, 10);
    this.animateNumber('projectsCount', this.targetLaunch, 10)
  }

  animateNumber(variableName: string, target: number, speed: number): void {
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < target) {
        currentValue++;
        this[variableName] = currentValue; // Access the property dynamically
      } else {
        clearInterval(interval);
      }
    }, speed);
  }
}