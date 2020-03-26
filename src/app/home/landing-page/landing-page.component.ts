import { Component, NgModule } from '@angular/core';
import { BreadcrumbModule, ButtonModule, GridModule, TabsModule } from 'carbon-components-angular';

@NgModule({
	imports: [
		BreadcrumbModule,
		GridModule,
		ButtonModule,
		TabsModule
	]
	})

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
}
