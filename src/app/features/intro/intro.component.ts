import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, ButtonComponent, BrandComponent],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent {

}
