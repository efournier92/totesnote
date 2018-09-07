import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService, User } from 'app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss'],
})
export class AuthComponent {
  user: User = new User;

  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AuthDialog, {
      width: '60%',
      data: this.user,
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

  constructor(
    public dialogRef: MatDialogRef<AuthDialog>,
    // private _apiService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  register() {

  }

  login() {

  }
}

