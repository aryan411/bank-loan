import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../theme-components/button/button.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatRadioModule } from '@angular/material/radio';

// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../../utilites/custom-validators.component';
import { FormatPhoneDirective } from '../../utilites/phone-number-format-directive';
import { MatTableModule } from '@angular/material/table';
import { MasterService } from '../../services/master.service';
import { Application } from '../../models/application.model';
import { error } from 'console';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatCardModule } from '@angular/material/card';

export interface PeriodicElement {
  bank: string;
  srno: number;
  loanAmount: number;
  emi: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  // {srno: 1, bank: 'Hydrogen', loanAmount: 1.0079, emi: 'H'},
  // {srno: 2, bank: 'Helium', loanAmount: 4.0026, emi: 'He'},
  // {srno: 3, bank: 'Lithium', loanAmount: 6.941, emi: 'Li'},
  // {srno: 4, bank: 'Beryllium', loanAmount: 9.0122, emi: 'Be'},
  // {srno: 5, bank: 'Boron', loanAmount: 10.811, emi: 'B'},
  // {srno: 6, bank: 'Carbon', loanAmount: 12.0107, emi: 'C'},
  // {srno: 7, bank: 'Nitrogen', loanAmount: 14.0067, emi: 'N'},
  // {srno: 8, bank: 'Oxygen', loanAmount: 15.9994, emi: 'O'},
  // {srno: 9, bank: 'Fluorine', loanAmount: 18.9984, emi: 'F'},
  // {srno: 10, bank: 'Neon', loanAmount: 20.1797, emi: 'Ne'},
];
const CITIES: { value: string; label: string }[] = [
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'san-francisco', label: 'San Francisco' },
  { value: 'san-diego', label: 'San Diego' },
  { value: 'sacramento', label: 'Sacramento' },
  { value: 'fresno', label: 'Fresno' },
  { value: 'oakland', label: 'Oakland' },
  { value: 'san-jose', label: 'San Jose' },
  { value: 'long-beach', label: 'Long Beach' },
  { value: 'bakersfield', label: 'Bakersfield' },
  { value: 'palm-springs', label: 'Palm Springs' },
];
@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrl: './loan-form.component.css',
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ButtonComponent,
    TextFieldModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormatPhoneDirective,
    MatTableModule,
  ],
  providers: [provideNativeDateAdapter()],
})
export class LoanFormComponent implements OnInit {
  cities = CITIES;
  displayedColumns: string[] = ['srno', 'bank', 'loanAmount', 'emi'];
  dataSource = ELEMENT_DATA;
  loanForm: FormGroup;
  masterService = inject(MasterService);
  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      fullName: [null, Validators.required],
      dateOfBirth: [null, [Validators.required, CustomValidators.date()]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, CustomValidators.phoneNumber]],
      address: [null],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipCode: [null, Validators.required],
      annualIncome: [0, Validators.min(0)],
      employmentStatus: [null, Validators.required],
      creditScore: [0, Validators.min(0)],
      assets: [null],
      gender: ['male'],
    });
  }

  ngOnInit(): void {}

  phoneChange(event: any): void {
    console.log('invalid', delete this.loanForm.value?.gender);
  }

  submitNewApplication() {
    this.masterService
      .addNewApplication(new Application(this.loanForm.value))
      .subscribe({ next: (value) => console.log(value, 'API response') });
  }
}
