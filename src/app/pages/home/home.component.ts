import { AfterViewInit, Component } from '@angular/core';

declare global {
  interface Window { startLove?: () => void; }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    window.startLove?.();
  }
}