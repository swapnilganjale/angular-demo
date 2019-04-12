import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent implements OnInit {

  constructor(private jwtService:JwtService,private router:Router) {
    console.log("testsssssssssss");

   }

  ngOnInit() {
  }

  logout(){
      this.jwtService.destroyToken();
      this.router.navigate(['login']);
   }



     private _opened: boolean = false;
     private _modeNum: number = 1;
     private _positionNum: number = 0;
     private _dock: boolean = false;
     private _closeOnClickOutside: boolean = true;
     private _closeOnClickBackdrop: boolean = false;
     private _showBackdrop: boolean = false;
     private _animate: boolean = true;
     private _trapFocus: boolean = true;
     private _autoFocus: boolean = true;
     private _keyClose: boolean = false;
     private _autoCollapseHeight: number = 500;
     private _autoCollapseWidth: number = 500;

     private _MODES: Array<string> = ['over', 'push', 'slide'];
     private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

     private _toggleOpened(): void {
       console.log("calllllllllllllll");

       this._opened = !this._opened;
     }

     private _toggleMode(): void {
       this._modeNum++;

       if (this._modeNum === this._MODES.length) {
         this._modeNum = 0;
       }
     }

     private _toggleAutoCollapseHeight(): void {
       this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
     }

     private _toggleAutoCollapseWidth(): void {
       this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
     }

     private _togglePosition(): void {
       this._positionNum++;

       if (this._positionNum === this._POSITIONS.length) {
         this._positionNum = 0;
       }
     }

     private _toggleDock(): void {
       this._dock = !this._dock;
     }

     private _toggleCloseOnClickOutside(): void {
       this._closeOnClickOutside = !this._closeOnClickOutside;
     }

     private _toggleCloseOnClickBackdrop(): void {
       this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
     }

     private _toggleShowBackdrop(): void {
       this._showBackdrop = !this._showBackdrop;
     }

     private _toggleAnimate(): void {
       this._animate = !this._animate;
     }

     private _toggleTrapFocus(): void {
       this._trapFocus = !this._trapFocus;
     }

     private _toggleAutoFocus(): void {
       this._autoFocus = !this._autoFocus;
     }

     private _toggleKeyClose(): void {
       this._keyClose = !this._keyClose;
     }

     private _onOpenStart(): void {
       console.info('Sidebar opening');
     }

     private _onOpened(): void {
       console.info('Sidebar opened');
     }

     private _onCloseStart(): void {
       console.info('Sidebar closing');
     }

     private _onClosed(): void {
       console.info('Sidebar closed');
     }

     private _onTransitionEnd(): void {
       console.info('Transition ended');
     }

}
