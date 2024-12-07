import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindrome-checker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './palindrome-checker.component.html',
  styleUrl: './palindrome-checker.component.css',
})
export class PalindromeCheckerComponent {
  textInput: string = '';
  result: string = '';

  constructor() {}
  isPalindrome(text: string) {
    text = text.replaceAll(/[^a-zA-Z0-9]/g, '');
    const reverseText = text.split('').reverse().join('');
    if (text === reverseText) return true;
    return false;
  }

  onCheck() {
    if (!!!this.textInput) {
      alert('Please input a value');
      this.textInput = '';
      return;
    }
    if (this.isPalindrome(this.textInput)) {
      this.result = this.textInput + 'is a palindrome.';
    } else this.result = this.textInput + 'is not a palindrome.';
    this.textInput = '';
  }
}
