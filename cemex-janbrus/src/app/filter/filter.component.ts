import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-filter',  
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatDividerModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],  
  providers: [
    provideNoopAnimations(), provideNativeDateAdapter(),
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {

  filter: any = {
    pending: true,
    inProgress: true,
    completed: true,
    productLine: '',
    dateFrom: new Date(),
    dateTo: new Date(),
  };

  productsLines = [
    'Cemex',
    'Cemex2',
    'Cemex3',
  ]

  constructor() { }

}
