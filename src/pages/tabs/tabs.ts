import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CameraPage } from '../camera/camera';
import { SendPage } from '../send/send';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CameraPage;
  tab4Root = SendPage;
  tab5Root = ContactPage;
  tab6Root = AboutPage;
  


  constructor() {

  }
}
