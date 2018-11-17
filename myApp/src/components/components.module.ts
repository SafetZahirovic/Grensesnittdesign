import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { PopoverComponent } from './popover/popover';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
	declarations: [MapComponent,
    MapComponent,
    PopoverComponent,
    ExpandableComponent],
	imports: [],
	exports: [MapComponent,
    MapComponent,
    PopoverComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
