import { ElementRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateFormatType } from './custom-validators.component';

export class DateFormatDirective {
  static parseAndFormatDate(
    value: Date | string | number
  ): Date | string | number {
    try {
      const parsedDate = new Date(value);
      if (!isNaN(parsedDate.getTime())) {
        // const utcDate = new Date(
        //   parsedDate.getUTCFullYear(),
        //   parsedDate.getUTCMonth(),
        //   parsedDate.getUTCDate()
        // );

        // const formattedDate = new Intl.DateTimeFormat('en-US').format(
        //   utcDate
        // );
        // return formattedDate; // Convert to MM/DD/YYYY format
        // Always use UTC to ensure consistent results
        const year = parsedDate.getUTCFullYear();
        const month = (parsedDate.getUTCMonth() + 1)
          .toString()
          .padStart(2, '0');
        const day = parsedDate.getUTCDate().toString().padStart(2, '0');
        return `${month}/${day}/${year}`; // Format: MM/DD/YYYY
      }
      return value;
    } catch (e: any) {
      // Ignore invalid parsing
      console.log(e);
    }
    return value; // Return empty string for invalid dates
  }
}
