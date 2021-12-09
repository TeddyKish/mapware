import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss']
})
export class DevelopersListComponent implements OnInit {
  @Input() developer: {name: string, lastname: string,  part: string, photo: string} = {name: '', lastname:'', part: '', photo:''};
  constructor() { }

  ngOnInit(): void {
  }

}
