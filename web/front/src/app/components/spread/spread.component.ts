import { Component, OnInit } from '@angular/core';
import {RequestService} from './../../request.service'

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent implements OnInit {

  photo: string = ""
  networks: string[] = []
  selectedValue: string = "";
  constructor(public request: RequestService) { }

   ngOnInit(): void {
      this.networks = this.request.getNetworks()
//
//       this.request.getPhoto().subscribe(res => {
//          this.photo = res;
//       })
   }

}
