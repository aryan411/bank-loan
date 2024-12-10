import { AbstractControl } from '@angular/forms';
import { CustomValidators } from './custom-validators.component';

describe('CustomValidators', () => {
  describe('date', () => {
    const dateValidator = CustomValidators.date();

    it('should return null for a valid date format', () => {
      const control = { value: '2024-12-31' } as AbstractControl;
      const result = dateValidator(control);
      expect(result).toBeNull();
    });

    it('should return a validation error for an invalid date format', () => {
      const control = { value: '31-12-2024' } as AbstractControl;
      const result = dateValidator(control);
      expect(result).toEqual({
        invalidDateFormat: { actualValue: '31-12-2024' },
      });
    });

    it('should return null for an empty value', () => {
      const control = { value: '' } as AbstractControl;
      const result = dateValidator(control);
      expect(result).toBeNull();
    });
  });

  describe('phoneNumber', () => {
    const phoneNumberValidator = CustomValidators.phoneNumber();

    it('should return null for a valid phone number', () => {
      const control = { value: '1234567890' } as AbstractControl;
      const result = phoneNumberValidator(control);
      expect(result).toBeNull();
    });

    it('should return a validation error for an invalid phone number', () => {
      const control = { value: '12345' } as AbstractControl;
      const result = phoneNumberValidator(control);
      expect(result).toEqual({
        invalidPhoneNumber: {
          expectedFormate: '1234567890',
          actualValue: '12345',
        },
      });
    });

    it('should return a validation error for a phone number with non-numeric characters', () => {
      const control = { value: '12345abcd' } as AbstractControl;
      const result = phoneNumberValidator(control);
      expect(result).toEqual({
        invalidPhoneNumber: {
          expectedFormate: '1234567890',
          actualValue: '12345abcd',
        },
      });
    });

    it('should return null for an empty ', () => {
      const control = { value: '' } as AbstractControl;
      const result = phoneNumberValidator(control);
      expect(result).toEqual({ invalidPhoneNumber: {
        expectedFormate: '1234567890',
        actualValue: '',
      },});
    });
  });
});
