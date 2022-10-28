import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { TextComponent } from './text/text.component';
import { BoxComponent } from './box/box.component';
import { DescriptionComponent } from './description/description.component';
import { TabsComponent } from './tabs/tabs.component';
import { BoxTwoComponent } from './box-two/box-two.component';
import { SocialComponent } from './social/social.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardOneComponent,
    CardTwoComponent,
    TextComponent,
    BoxComponent,
    DescriptionComponent,
    TabsComponent,
    BoxTwoComponent,
    SocialComponent,
    InstructorComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
