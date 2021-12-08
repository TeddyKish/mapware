import { Component, OnInit } from '@angular/core';
import { hostInfo } from './../generic-list/generic-list.component';
// import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-analyze-page',
  templateUrl: './analyze-page.component.html',
  styleUrls: ['./analyze-page.component.scss']
})
export class AnalyzePageComponent implements OnInit {
//   toppings = new FormControl();
//   toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  data: hostInfo[] = [
    {name: "edel1-pc", ip: '1.1.1.1', services: [ {
      port: 123,
      protocol: 'tcp',
      name: 'service1' },
      {
            port: 456,
            protocol: 'tcp',
            name: 'serv2',
             state: 'open'},
       ]},

       {name: 'edel2-pc', ip: '2.2.2.2', services: [ {
             port: 123,
             protocol: 'tcp',
             name: 'service1' },
             {
                   port: 456,
                   protocol: 'tcp',
                   name: 'serv2' },
              ]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
