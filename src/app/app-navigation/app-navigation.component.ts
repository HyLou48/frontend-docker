import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu/menu-trigger';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { APP_TITLE } from '../app.constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-app-navigation',
    templateUrl: './app-navigation.component.html',
    styleUrls: ['./app-navigation.component.css'],
})
export class AppNavigationComponent implements OnInit {
    public appTitle;
    activeMenuItem: string = '';

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );

    @ViewChild('accountMenuTrigger') accountMenuTrigger:
        | MatMenuTrigger
        | undefined;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private router: Router
    ) {}
    ngOnInit() {
        this.appTitle = APP_TITLE;
    }

    showAccountMenu(event: MouseEvent) {
        this.accountMenuTrigger?.toggleMenu();
        event.stopPropagation();
    }

    selectMenuItem(menuItem: string): void {
        this.activeMenuItem = menuItem;
    }
    
}
