import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appFormatPhone]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormatPhoneDirective),
      multi: true,
    },
  ],
  standalone: true,
})
export class FormatPhoneDirective implements ControlValueAccessor {
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private el: ElementRef) {}

  // Listen to input events
  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const formattedValue = this.formatDisplayedValue(value);
    this.el.nativeElement.value = formattedValue; // Update the displayed value
    // console.log('formated input', formattedValue);
    this.onChange(this.formatStoredValue(formattedValue)); // Emit the unformatted value
  }

  // Required for ControlValueAccessor
  writeValue(value: string): void {
    const formattedValue = this.formatDisplayedValue(value || '');
    // console.log('formated', formattedValue);
    this.el.nativeElement.value = formattedValue; // Update the displayed value
  }

  // Register the change function
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Register the touched function
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Enable or disable the control
  setDisabledState(isDisabled: boolean): void {
    // console.log(isDisabled);
    this.el.nativeElement.disabled = isDisabled;
  }

  // Transform the stored value to the display format
  private formatDisplayedValue(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); // Example format
  }

  // Transform the display value to the stored format
  private formatStoredValue(value: string): string {
    return value.replace(/[\s()-]/g, ''); // Remove formatting
  }
}
