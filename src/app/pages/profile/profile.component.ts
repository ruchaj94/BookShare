import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
