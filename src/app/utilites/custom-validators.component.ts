import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export type DateFormatType = 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM/DD/YYYY';

export class CustomValidators {
  static date(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        // If the control value is empty, validation passes (use `Validators.required` for required checks)
        return null;
      }
      const isValid = !isNaN(new Date(value).getTime());

      return isValid
        ? null
        : { invalidDateFormat: { actualValue: value } };
    };
  }

  static phoneNumber(): ValidatorFn {
    let regex: RegExp = /^\d{10}$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const isValidPhone = regex.test(control.value);
      return isValidPhone
        ? null
        : {
            invalidPhoneNumber: {
              expectedFormate: '1234567890',
              actualValue: control.value,
            },
          };
    };
  }
}
