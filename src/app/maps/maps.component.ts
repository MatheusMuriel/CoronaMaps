import { Component, OnInit } from '@angular/core';
import {GoogleCharts} from 'google-charts';

GoogleCharts.load(drawRegionsMap, {
  'packages': ['geochart'],
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

function drawRegionsMap() {
  var data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Brazil', 400]
  ]);

  var options = {
    datalessRegionColor: '#123456',
    //ISO 3166 country codes
    region: 'BR',
    resolution: 'provinces',
    defaultColor: '#ffffff',
    keepAspectRatio: true
  };

  var chart = new GoogleCharts.api.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /** 
  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
  */

}
