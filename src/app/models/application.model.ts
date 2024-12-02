import { Loan } from './loan.model';

export class Application {
  applicantID: number;
  fullName: string;
  applicationStatus: string;
  panCard: string;
  dateOfBirth: string; // ISO 8601 date string
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
  assets: string;
  dateApplied: string; // ISO 8601 date string
  Loans: Loan[]; // Array of Loan objects

  constructor(data: Partial<Application> = {}) {
    this.applicantID = data.applicantID ?? 0;
    this.fullName = data.fullName ?? '';
    this.applicationStatus = data.applicationStatus ?? '';
    this.panCard = data.panCard ?? '';
    this.dateOfBirth = data.dateOfBirth ?? '';
    this.email = data.email ?? '';
    this.phone = data.phone ?? '';
    this.address = data.address ?? '';
    this.city = data.city ?? '';
    this.state = data.state ?? '';
    this.zipCode = data.zipCode ?? '';
    this.annualIncome = data.annualIncome ?? 0;
    this.employmentStatus = data.employmentStatus ?? '';
    this.creditScore = data.creditScore ?? 0;
    this.assets = data.assets ?? '';
    this.dateApplied = data.dateApplied ?? '';
    this.Loans = (data.Loans ?? []).map((loan) => new Loan(loan));
  }

  /**
   * Generic method to update properties dynamically from an object.
   * @param data An object containing properties to update.
   */
  setValues(data: Partial<Application>): void {
    Object.assign(this, data);

    if (data.Loans) {
      this.Loans = data.Loans.map((loan) => new Loan(loan));
    }
  }
}
