import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LogoComponent } from '../common/logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LogoComponent,
    RouterLink,
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.sass'
})
export class LogoutComponent {

}
