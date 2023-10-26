import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  user?: User;
  userId?: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      this.loadUserProfile(this.userId);
    }
  }
  loadUserProfile(userId: number): void {
    this.userService.getUserById(userId).subscribe({


      next: userData => {
        this.user = userData;
        console.log(this.userId);
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
