import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Messages } from './../models/messages';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public table: any;
    public isShowButton: boolean = false;
    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Gestion du message', cols: 1, rows: 2 },
                    { title: 'Modèles des messages', cols: 1, rows: 2 },
                    
                ];
            }

            return [
                { title: 'Gestion du message', cols: 1, rows: 2 },
                 { title: 'Modèles des messages ', cols: 1, rows: 2 },
                
            ];
        })
    );

    constructor(private breakpointObserver: BreakpointObserver) { }
    ngOnInit(): void {
        this.table = Messages;
    }

}
