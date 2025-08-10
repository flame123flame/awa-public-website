import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { ServiceComponent } from "./components/service/service.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { TeamComponent } from "./components/team/team.component";
import { CareersComponent } from "./components/careers/careers.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, ServiceComponent, PortfolioComponent, TeamComponent, CareersComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'awa-public-website';
}
