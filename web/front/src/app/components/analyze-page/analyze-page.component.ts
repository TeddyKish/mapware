import { Component, OnInit } from '@angular/core';
import { hostInfo, networks } from './../generic-list/generic-list.component';
 import {FormControl} from '@angular/forms';
import {RequestService} from './../../request.service'

@Component({
  selector: 'app-analyze-page',
  templateUrl: './analyze-page.component.html',
  styleUrls: ['./analyze-page.component.scss']
})
export class AnalyzePageComponent implements OnInit {
//   toppings = new FormControl();
//   toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  data: networks = {network_id: 'aaaaa', hosts: [{ip: '10.105.62.1', type: 'networking hardware', open_services: [{name: 'qotd', protocol: 'tcp', state: 'open', port: 17, vulnerabilities: []}, {name: 'ftp', protocol: 'tcp', state: 'open', port: 21, vulnerabilities: []}, {name: 'https', protocol: 'tcp', state: 'open', port: 443, vulnerabilities: [{name: 'heartbleed', description: 'network based attack on open-ssh version less then v1'}]},]}]};

//     {ip: '1.1.1.1', services: [ {
//       port: 123,
//       protocol: 'tcp',
//       name: 'service1' },
//       {
//             port: 456,
//             protocol: 'tcp',
//             name: 'serv2',
//              state: 'open'},
//        ]},
//
//        {name: 'edel2-pc', ip: '2.2.2.2', services: [ {
//              port: 123,
//              protocol: 'tcp',
//              name: 'service1' },
//              {
//                    port: 456,
//                    protocol: 'tcp',
//                    name: 'serv2' },
//               ]}
//   ]
  d: any = ""
  networks: string[]= [];
  network: FormControl = new FormControl("");
  constructor(public request: RequestService) {
   }

  ngOnInit(): void {
     this.request.getData().subscribe(res => {
        this.d = res;
     })

    this.networks = this.getNetworks();

  }

  getNetworks(): string[] {
    let names:string[] = [];
    for (let a of this.d) {
      names.push(a.network_id);
    }

    return names;
  }

  getNetworkInfo(name: string) {
    for (let a of this.d) {
      if (a.network_id == name) {
        return a;
      }
    }

    return null;
  }

}
