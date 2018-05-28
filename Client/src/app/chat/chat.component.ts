import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../services/socket.service';
import {Message} from '../models/message';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messages: Message[] = [];
  @ViewChild('container') private container: ElementRef;
  public test = '<script>alert(1);</script>';

  constructor(private socketService: SocketService, private notify: NotificationService) {
    socketService.message.subscribe((msg: Message) => {
      this.messages.push(msg);
      const myUsername = localStorage.getItem('username');
      if (myUsername !== msg.username) {
        notify.sendNotification(msg.username, msg.content);
      }

      setTimeout(() => this.container.nativeElement.scrollTo(0, this.container.nativeElement.scrollHeight + 500), 10);
    });
  }

  ngOnInit() {

  }

}
