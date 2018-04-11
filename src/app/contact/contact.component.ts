import { Component, OnInit } from '@angular/core';
import { EmailService, IMessage } from '../email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 28.6094665265994;
  lng: number = 77.38698393519597;
  title = 'Angular PHP Email Example!';
  message: IMessage = {};
  constructor(private appService: EmailService) {

  }

  ngOnInit() {
  }
  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}
