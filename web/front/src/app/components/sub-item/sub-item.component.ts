import { Component, OnInit, Input } from '@angular/core';
import { serviceInfo } from './../generic-list/generic-list.component';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.scss']
})
export class SubItemComponent implements OnInit {
  @Input() data: serviceInfo = {port: 0, protocol: '', name: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
