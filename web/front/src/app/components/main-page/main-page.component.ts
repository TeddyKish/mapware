import { Component, OnInit } from '@angular/core';
import { NgSimpleSidebarService, SimpleSidebarPosition, SimpleSidebarItem } from 'ng-simple-sidebar';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  buttons = [
                            {
                                name: 'dashboard',
                                icon: 'fa fa-home',
                                routerLink: ['/dashboard'],
                                position: SimpleSidebarPosition.top
                            },
                            {
                                name: 'analyze',
                                icon: 'fa fa-area-chart',
                                routerLink: ['/analyze'],
                                position: SimpleSidebarPosition.top
                            },
                            {
                                name: 'spread',
                                icon: 'fa fa-globe',
                                routerLink: ['/spread'],
                                position: SimpleSidebarPosition.top
                            },

                        ];

  configure = {
                "openIcon": "las la-bars",
                "closeIcon": "las la-times",
                "colors": {
                  "darkMode": false,
                  "background": "#eee",
                  "font": "#000",
                  "darkModeBackground": "#333",
                  "darkModeFont": "#fff"
                },
                "closeAfterClick": true,
                "mobile": false,
                "position": "sticky",
                "mobileTitle": "I am a mobile title"
              }

  constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {}
  ngOnInit(): void{
            // required, configure items
            this.ngSimpleSidebarService.addItems(this.buttons);

            // required, configure icons
            this.ngSimpleSidebarService.configure({
                   openIcon: 'fa fa-bars',
                   closeIcon: 'fa fa-times',
            });

            // optional, configuration and set states
             this.ngSimpleSidebarService.open();
             this.ngSimpleSidebarService.close();
        }

}
