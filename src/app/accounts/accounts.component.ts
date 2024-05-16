import { Component } from '@angular/core';
import { LayoutComponent } from '../common/layout/layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { LogoComponent } from '../common/logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    LayoutComponent,
    LogoComponent,
    RouterLink,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.sass'
})
export class AccountsComponent {

}
