import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

const PIPES = [
];

const COMPONENTS = [
  NavbarComponent
];

const DIRECTIVES = [
];

@NgModule({
  declarations: [
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
