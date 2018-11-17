import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { PopoverComponent } from './popover/popover';
import { ExpandableComponent } from './expandable/expandable';
import { NavbarComponent } from './navbar/navbar';
@NgModule({
	declarations: [MapComponent,
    MapComponent,
    PopoverComponent,
    ExpandableComponent,
    NavbarComponent],
	imports: [],
	exports: [MapComponent,
    MapComponent,
    PopoverComponent,
    ExpandableComponent,
    NavbarComponent]
})
export class ComponentsModule {}
