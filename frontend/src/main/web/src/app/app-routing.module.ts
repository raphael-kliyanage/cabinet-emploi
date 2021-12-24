import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//List des chemins
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
import { MainLogoComponent } from './main-logo/main-logo.component';
import { PolConfidentialComponent } from './pol-confidential/pol-confidential.component';
import { MLegalComponent } from './m-legal/m-legal.component';

const routes: Routes = [
  { path: 'navbar', component: TopNavComponent },
  { path: 'footbar', component: BottomFootComponent},
  { path: 'mainproduct', component: MainProductComponent},
  { path: 'index', component: MainIndexComponent},
  { path: 'history', component: MainHistoryComponent},
  { path: 'whyus', component: MainWhyusComponent },
  { path: 'parteners', component: MainPartenersComponent },
  { path: 'presentation', component: MainPresentationComponent },
  { path: 'witness', component: MainWitnessComponent },
  { path: 'sponsorship', component: MainSponsorshipComponent },
  { path: 'advices', component: MainAdvicesComponent },
  { path: 'contacts', component: MainContactsComponent },
  { path: 'login', component: MainLoginComponent },
  { path: 'logo', component: MainLogoComponent },
  { path: 'polconfidential', component: PolConfidentialComponent },
  { path: 'mlegal', component: MLegalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
