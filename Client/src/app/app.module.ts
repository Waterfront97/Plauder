import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ChatComponent } from './chat/chat.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SocketService} from './services/socket.service';
import {LinkifyPipe} from './pipes/linkify.pipe';
import {ImgifyPipe} from './pipes/imgify.pipe';
import {NotificationService} from './services/notification.service';
import {SendImageDialogComponent} from './send-image-dialog/send-image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserlistComponent,
    ChatComponent,
    LinkifyPipe,
    ImgifyPipe,
    SendImageDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [SocketService, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [SendImageDialogComponent]
})
export class AppModule { }
