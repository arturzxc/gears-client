import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LogoComponent } from '../common/logo/logo.component';
import { Router, RouterLink } from '@angular/router';

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
  styleUrl: './logout.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent implements OnDestroy {
  secondsLeft: number = 120;
  interval: any;

  constructor(
    private router: Router,
    private cdf: ChangeDetectorRef,
  ) {
    this.interval = setInterval(() => {
      if (this.secondsLeft > 0)
        this.secondsLeft--;
      this.cdf.detectChanges();
      if (this.secondsLeft == 0) {
        this.router.navigate(['/login']);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
