import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { PopoverComponent } from './popover/popover';
@NgModule({
	declarations: [MapComponent,
    MapComponent,PopoverComponent],
	imports: [],
	exports: [MapComponent,
	MapComponent,PopoverComponent]
	})

export class ComponentsModule {}
