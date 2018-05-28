import {Injectable} from '@angular/core';

declare var Notification: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public enableNotifications = true;
  private browserSupport = true;

  constructor() {
    if (!Notification) {
      console.warn('Notifications not available in this browser!');
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

  }

  public sendNotification(title: string, msg: string): void {
    if (!this.browserSupport || !this.enableNotifications || Notification.permission !== 'granted') {
      return;
    }
    const note = new Notification(title, {body: msg, icon: 'favicon.ico'});
    setTimeout(note.close.bind(note), 1750);
  }

}
