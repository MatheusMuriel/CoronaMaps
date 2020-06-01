import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  clik() {
    this.router.navigate(['./brazil']);
    // window.location.href = "http://192.168.0.5':4200/brazil"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
