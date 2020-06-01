import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brasil',
  templateUrl: './brasil.component.html',
  styleUrls: ['./brasil.component.scss']
})
export class BrasilComponent implements OnInit {

  clickBraza() {
    window.location.href = "http://localhost:4200/londrina"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
