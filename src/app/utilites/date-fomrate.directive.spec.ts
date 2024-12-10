import { DateFormatDirective } from './date-format.directive';

describe('date-formate directive', () => {
  describe('parseAndFormatDate', () => {
    const parseAndFormatDate = DateFormatDirective.parseAndFormatDate;

    it('should format a valid date string to MM/DD/YYYY', () => {
      const result = parseAndFormatDate('2023-12-31');
      expect(result).toEqual('12/31/2023');
    });

    it('should format a valid Date object to MM/DD/YYYY', () => {
      const result = parseAndFormatDate(new Date('2023-12-31'));
      expect(result).toBe('12/31/2023');
    });

    it('should return the input for an invalid date string', () => {
      const result = parseAndFormatDate('invalid-date');
      expect(result).toBe('invalid-date');
    });

    it('should return an empty string for an empty string input', () => {
      const result = parseAndFormatDate('');
      expect(result).toBe('');
    });

    it('should format a date string with time to MM/DD/YYYY', () => {
      const result = parseAndFormatDate('2023-12-31T10:20:30Z');
      expect(result).toBe('12/31/2023');
    });

    it('should return the input for an unrecognized date format', () => {
      const result = parseAndFormatDate('31/12/2023');
      expect(result).toBe('31/12/2023');
    });

    it('should format milliseconds since epoch to MM/DD/YYYY', () => {
      const result = parseAndFormatDate(1672531200000);
      expect(result).toBe('01/01/2023');
    });
  });
});
