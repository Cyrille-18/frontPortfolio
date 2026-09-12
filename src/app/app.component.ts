import { TuiRoot } from '@taiga-ui/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  @ViewChild('navbarHost', { read: ViewContainerRef, static: true })
  protected navbarHost!: ViewContainerRef;

  public ngAfterViewInit(): void {
    this.navbarHost.createComponent(NavbarComponent);
  }
}
