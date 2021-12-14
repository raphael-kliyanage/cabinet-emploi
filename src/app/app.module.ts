import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BottomFootComponent } from './bottom-foot/bottom-foot.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainIndexComponent } from './main-index/main-index.component';
import { MainHistoryComponent } from './main-history/main-history.component';
import { MainWhyusComponent } from './main-whyus/main-whyus.component';
import { MainPartenersComponent } from './main-parteners/main-parteners.component';
import { MainPresentationComponent } from './main-presentation/main-presentation.component';
import { MainWitnessComponent } from './main-witness/main-witness.component';
import { MainSponsorshipComponent } from './main-sponsorship/main-sponsorship.component';
import { MainAdvicesComponent } from './main-advices/main-advices.component';
import { MainContactsComponent } from './main-contacts/main-contacts.component';
import { MainLoginComponent } from './main-login/main-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomFootComponent,
    MainProductComponent,
    MainIndexComponent,
    MainHistoryComponent,
    MainWhyusComponent,
    MainPartenersComponent,
    MainPresentationComponent,
    MainWitnessComponent,
    MainSponsorshipComponent,
    MainAdvicesComponent,
    MainContactsComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
