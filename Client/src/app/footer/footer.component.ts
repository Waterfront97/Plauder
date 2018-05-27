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

  public fileChange(event): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.sendMsg(reader.result);
      };
    }
  }

  public openDialog(): void {
    document.getElementById('fileinput').click();
  }

  public keyup(event): void {
    if (event.key === 'Enter') {
      this.sendMsg(this.areaText);
      this.areaText = '';
    }
  }
}
