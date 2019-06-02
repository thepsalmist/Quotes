import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
