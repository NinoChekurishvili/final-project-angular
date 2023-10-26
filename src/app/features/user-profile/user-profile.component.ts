import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VideoControlService } from 'src/app/core/services/video-control.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService]
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo3', { static: false }) videoElement3!: ElementRef;
  user?: User;
  userId?: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private changeDetector: ChangeDetectorRef,
    private videoControl: VideoControlService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      this.loadUserProfile(this.userId);
    }
  }

  ngAfterViewInit(): void {
    const videoElement3: HTMLVideoElement = this.videoElement3.nativeElement;
    this.videoControl.addVideoElement(videoElement3);
  }

  loadUserProfile(userId: number): void {
    this.userService.getUserById(userId).subscribe({
      next: userData => {
        this.user = userData;
        this.changeDetector.detectChanges();
        console.log(this.userId);
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
