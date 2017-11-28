import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxMenuToggleModule} from './ngx-menu-toggle/ngx-menu-toggle.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxMenuToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
