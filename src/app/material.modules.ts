import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
    imports: [MatButtonModule, FlexLayoutModule],
    exports: [MatButtonModule, FlexLayoutModule]

})

export class MaterialModule {
}