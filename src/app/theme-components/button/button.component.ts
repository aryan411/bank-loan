import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule,CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label?: string;
  @Input() type: 'button' | 'submit' = 'button'; // Button type
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary'; // Button color
  @Input() disabled: boolean = false; // Disabled state

  @Input() buttonType:
    | 'mat-raised-button'
    | 'mat-flat-button'
    | 'mat-stroked-button'
    | 'mat-button' = 'mat-raised-button';

  @Output() click: EventEmitter<MouseEvent> = new EventEmitter();

  clickEvent(event: MouseEvent) {
    this.click.emit(event);
  }
}
