import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { HeaderNgrxComponent } from './header/header-ngrx.component';
import { FooterNgrxComponent } from './footer/footer-ngrx.component';
import { MainNgrxComponent } from './main/main-ngrx.component';
@Component({
  selector: 'app-todos-ngrx',
  standalone: true,
  imports: [HeaderNgrxComponent, FooterNgrxComponent, MainNgrxComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosNgrxComponent {
  todosCount = 0;

  changeTodoCounts(value: number) {
    console.log(value,"todo")
    this.todosCount = value;
  }
}
