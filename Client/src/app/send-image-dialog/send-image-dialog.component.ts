import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-send-image-dialog',
  templateUrl: './send-image-dialog.component.html',
  styleUrls: ['./send-image-dialog.component.css']
})
export class SendImageDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SendImageDialogComponent>,
              private socketService: SocketService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  public closeDialog(send: boolean): void {
    if (send) {
      this.socketService.sendMessage(this.data.imgStr);
    }
    this.dialogRef.close();
  }
}
