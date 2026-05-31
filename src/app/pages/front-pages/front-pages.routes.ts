import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomePageDetailsComponent } from "./home-page-details/home-page-details.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ServicesComponent } from "./services/services.component";
import { ServiceDetailComponent } from "./service-detail/service-detail.component";
import { ItSupportPackagesComponent } from "./it-support-packages/it-support-packages.component";
import { TechnologyComponent } from "./technology/technology.component";
import { IndustriesComponent } from "./industries/industries.component";


export const FrontPagesRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            { path: '', redirectTo: 'homepage', pathMatch: 'full' },
            { path: 'homepage', component: HomePageDetailsComponent },
            { path: 'about', component: AboutUsComponent },
            { path: 'portfolio', component: PortfolioComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'services/it-support/packages', component: ItSupportPackagesComponent },
            { path: 'services/:category', component: ServiceDetailComponent },
            { path: 'technology', component: TechnologyComponent },
            { path: 'industries', component: IndustriesComponent },
        ]
    },
];