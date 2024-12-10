import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Store } from '@ngrx/store';
import { TodoActions } from '../../ngrx/store/todos/action';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit, DoCheck {
  todoStore = inject(Store);
  ngOnInit(): void {
    this.todoStore.dispatch(TodoActions.getTodos());
  }

  ngDoCheck(): void {
    console.log('TodoComponent ', 'ngDoCheck triggered!');
  }
}
