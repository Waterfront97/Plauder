import {Component, OnInit} from '@angular/core';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public areaText = '';

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
  }

  public sendMsg(msg: string): void {
    this.socketService.sendMessage(msg);
  }

  public keyup(event): void {
    if (event.key === 'Enter') {
      this.sendMsg(this.areaText);
      this.areaText = '';
    }
  }
}
