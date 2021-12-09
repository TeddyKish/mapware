import { Component, OnInit, Input, Renderer2 } from '@angular/core';

export type von = {name: string, description: string};
export type serviceInfo = {name: string, protocol: string, port:number, state?: string, vulnerabilities?: von[]};
export type hostInfo = {ip: string, type: string, open_services: serviceInfo[]};
export type networks = {network_id: string, hosts: hostInfo[]}

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {
  @Input() data: networks= {network_id:"", hosts:[]};
  selected = undefined;

  constructor(private render:Renderer2 ) { }

  ngOnInit(): void {
  }

  click(item: any): void {
    if (this.selected === item) {
      this.selected = undefined;
    }
    else {
      this.selected = item;
    }
  }

  isSelected(item: any) {
    return this.selected === item
  }
}
