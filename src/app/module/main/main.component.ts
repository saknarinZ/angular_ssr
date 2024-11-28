import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBerComponent } from '../../layout/nav-ber/nav-ber.component';
import { SideBerComponent } from '../../layout/side-ber/side-ber.component';
import { RightComponent } from '../../layout/right/right.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NavBerComponent, SideBerComponent, RightComponent],
  template: `
    <nav navBar></nav>
    <div>
      <div class="max-w-[90rem] mx-auto">
        <div class="flex">
          <div sideBer></div>
          <div class="p-5 h-dvh w-full max-w-[57rem] bg-slate-600">
            <router-outlet />
          </div>
          <div rightBer></div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MainComponent {}
