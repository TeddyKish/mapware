import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  details = [
    {class: "a", data: {title: "Scanned hosts", icon: "fa-server", info: "1560"}},
    {class: "b", data: {title: "Malwares found", icon: "fa-bug", info: "3000"}},
    {class: "c", data: {title: "Open networks", icon: "fa-podcast", info: "200"}},
  ]

  developers = [
    {name: "Roy", lastname: "Pe`er", part: "hardware", photo: "./../../assets/royp.jpg"},
    {name: "Tomer", lastname: "Dragucki", part: "hardware", photo: "./../../assets/tomer.jpg"},
    {name: "Roy", lastname: "savransky", part: "website", photo: "./../../assets/roys.jpg"},
    {name: "Itay", lastname: "Na`aman", part: "analise", photo: "./../../assets/itay.jpg"},
    {name: "Nimrod", lastname: "Keidar", part: "analise", photo: "./../../assets/nimrod.jpg"},
    {name: "Teddy", lastname: "Kishnevsky", part: "analise", photo: "./../../assets/teddy.jpg"},
    {name: "Rotem", lastname: "Oz", part: "analise", photo: "./../../assets/rotem.jpg"},
  ]
  constructor() { }

//   @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
//
//   public barChartOptions: ChartConfiguration['options'] = {
//     responsive: true,
//     // We use these empty structures as placeholders for dynamic theming.
//     scales: {
//       x: {},
//       y: {
//         min: 10
//       }
//     },
//     plugins: {
//       legend: {
//         display: true,
//       },
//       datalabels: {
//         anchor: 'end',
//         align: 'end'
//       }
//     }
//   };
//   public barChartType: ChartType = 'bar';
//   public barChartPlugins = [
//     DataLabelsPlugin
//   ];
//
//   public barChartData: ChartData<'bar'> = {
//     labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
//     datasets: [
//       { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
//       { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
//     ]
//   };
//
//   // events
//   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
//     console.log(event, active);
//   }
//
//   public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
//     console.log(event, active);
//   }
//
//   public randomize(): void {
//     // Only Change 3 values
//     this.barChartData.datasets[0].data = [
//       Math.round(Math.random() * 100),
//       59,
//       80,
//       Math.round(Math.random() * 100),
//       56,
//       Math.round(Math.random() * 100),
//       40 ];
//
//     this.chart?.update();
//   }

  ngOnInit(): void {
  }

}
