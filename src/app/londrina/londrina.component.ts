import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { 
  faHeadSideMask, 
  faPeopleArrows, 
  faThermometerHalf, 
  faHandHoldingWater 
} from '@fortawesome/free-solid-svg-icons';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 0,
  hideDelay: 1000,
  touchendHideDelay: 0,
};

@Component({
  selector: 'app-londrina',
  templateUrl: './londrina.component.html',
  styleUrls: ['./londrina.component.scss'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ]
})
export class LondrinaComponent implements OnInit {
  faHeadSideMask = faHeadSideMask;
  faPeopleArrows = faPeopleArrows;
  faThermometerHalf = faThermometerHalf;
  faHandHoldingWater = faHandHoldingWater;

  maskClick(mask) {
    console.log(mask);
    mask.show = true;
    console.log(mask);
  }

  constructor(

  ) {

  }

  ngOnInit() {

  }

}
