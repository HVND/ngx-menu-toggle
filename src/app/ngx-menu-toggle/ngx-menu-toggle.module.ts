import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxMenuToggleComponent} from './ngx-menu-toggle.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NgxMenuToggleComponent],
    exports: [NgxMenuToggleComponent]
})
export class NgxMenuToggleModule {
}
