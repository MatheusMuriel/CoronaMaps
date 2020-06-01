import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-brasil',
  templateUrl: './brasil.component.html',
  styleUrls: ['./brasil.component.scss']
})
export class BrasilComponent implements OnInit {

  clickBraza() {
    this.router.navigate(['./londrina']);
    // window.location.href = "http://192.168.0.5:4200/londrina"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
