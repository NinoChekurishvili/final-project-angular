import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoControlService {

  videoElements: HTMLVideoElement[] = [];

  addVideoElement(video: HTMLVideoElement) {
    this.videoElements.push(video);
    this.handleAutoplay(video);
  }

  private handleAutoplay(video: HTMLVideoElement) {
    video.muted = true;
    video.play().catch(Error => {
      if (Error.name === 'NotAllowedError') {
        video.play();
      }
    })
  }
}