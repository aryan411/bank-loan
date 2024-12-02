export class Loan {
    loanID: number;
    applicantID: number;
    bankName: string;
    loanAmount: number;
    emi: number;
  
    constructor(data: Partial<Loan> = {}) {
      this.loanID = data.loanID ?? 0;
      this.applicantID = data.applicantID ?? 0;
      this.bankName = data.bankName ?? '';
      this.loanAmount = data.loanAmount ?? 0;
      this.emi = data.emi ?? 0;
    }
  }
  