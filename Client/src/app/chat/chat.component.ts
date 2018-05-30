import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../services/socket.service';
import {Message} from '../models/message';
import {NotificationService} from '../services/notification.service';
import {MatDialog} from '@angular/material';
import {SendImageDialogComponent} from '../send-image-dialog/send-image-dialog.component';

declare var windowActive: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messages: Message[] = [];
  @ViewChild('container') private container: ElementRef;

  constructor(private socketService: SocketService, private notify: NotificationService, private dialog: MatDialog) {
    socketService.message.subscribe((msg: Message) => {
      this.messages.push(msg);
      const myUsername = localStorage.getItem('username');
      if (myUsername !== msg.username) {
        notify.sendNotification(msg.username, msg.content);

        if (!windowActive) {
          document.querySelector('link[rel="icon"]').setAttribute('href', 'assets/msg_favicon.ico');
        }

      }

      setTimeout(() => this.container.nativeElement.scrollTo(0, this.container.nativeElement.scrollHeight + 500), 10);
    });
  }

  ngOnInit() {
    document.addEventListener('paste', this.pasteEvent.bind(this));
  }

  private pasteEvent(e): void {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (const item of items) {
      if (item.kind === 'file') {
        const blob = item.getAsFile();
        if (blob.type === 'image/png') {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            // console.log(reader.result);

            const dialogRef = this.dialog.open(SendImageDialogComponent, {
              maxWidth: '700px',
              maxHeight: '700px',
              data: {imgStr: reader.result}
            });

          };
        }
      }
    }
  }

}
