import { ElementRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateFormatType } from './custom-validators.component';

export class DateFormatDirective  {

  static parseAndFormatDate(value: Date | string): Date | string {
    try {
      const parsedDate = new Date(value);
      console.log(parsedDate, 'parsedDate');
      if (!isNaN(parsedDate.getTime())) {
        const formattedDate = new Intl.DateTimeFormat('en-US').format(
          parsedDate
        );
        console.log(formattedDate, 'Formatted Date');
        return formattedDate; // Convert to MM/DD/YYYY format
      }
      return value;
    } catch (e: any) {
      // Ignore invalid parsing
      console.log(e);
    }
    return value; // Return empty string for invalid dates
  }
}
