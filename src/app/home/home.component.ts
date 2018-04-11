import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public shares:any=[];
  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shares = this.getShares('/shares');
  }
  getShares(path) {
    return this.shareservice.getShares(path);
  }

}
