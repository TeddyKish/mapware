import { Component, OnInit, Input, Renderer2 } from '@angular/core';

export type serviceInfo = {port:number, protocol: string, name: string, state?: string};
export type hostInfo = {name: string, ip: string, services: serviceInfo[]};

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {
  @Input() data: hostInfo[] = [];
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
