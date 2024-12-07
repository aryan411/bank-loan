import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-challenges',
  standalone: true,
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css',
  imports: [RouterLink],
})
export class ChallengesComponent {

}
