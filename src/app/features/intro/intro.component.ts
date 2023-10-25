import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';
import { LimitedProductsComponent } from 'src/app/shared/components/limited-products/limited-products.component';
import { VideoControlService } from 'src/app/core/services/video-control.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, ButtonComponent, BrandComponent, LimitedProductsComponent, HttpClientModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent implements AfterViewInit {
  @ViewChild('bgVideo1', { static: false }) videoElement1!: ElementRef;
  @ViewChild('bgVideo2', { static: false }) videoElement2!: ElementRef;
  constructor(private videoControl: VideoControlService) { }

  ngAfterViewInit() {
    const videoElement1: HTMLVideoElement = this.videoElement1.nativeElement;
    const videoElement2: HTMLVideoElement = this.videoElement2.nativeElement;

    this.videoControl.addVideoElement(videoElement1);
    this.videoControl.addVideoElement(videoElement2);
  }
}
