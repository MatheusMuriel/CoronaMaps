import { Component, OnInit } from '@angular/core';
import { 
  faHeadSideMask, 
  faPeopleArrows, 
  faThermometerHalf, 
  faHandHoldingWater 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-londrina',
  templateUrl: './londrina.component.html',
  styleUrls: ['./londrina.component.scss']
})
export class LondrinaComponent implements OnInit {
  faHeadSideMask = faHeadSideMask;
  faPeopleArrows = faPeopleArrows;
  faThermometerHalf = faThermometerHalf;
  faHandHoldingWater = faHandHoldingWater;

  constructor() { }

  ngOnInit(): void {
  }

}
