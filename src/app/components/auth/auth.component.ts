import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService, User } from 'app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user: User;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthDialog, {
      width: '60%',
      data: {email: this.user.email, password: this.user.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'auth-dialog',
  templateUrl: 'auth.dialog.html',
  styleUrls: ['auth.component.scss'],
})
export class AuthDialog{
  user: User;

  constructor(
    public dialogRef: MatDialogRef<AuthDialog>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  register(user) {
    this.authService.register(user).subscribe(
      (resp: any) => {
        this.authService.changeUser(resp);
      }
    );
  }

  login() {

  }
}