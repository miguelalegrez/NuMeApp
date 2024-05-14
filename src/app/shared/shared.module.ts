import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './components/search-box/search.component';
import { UserCreationBoxComponent } from './components/user-creation-box/user-creation-box.component';
import { BackButtonPageContainerComponent } from './components/back-button-page-container/back-button-page-container.component';

@NgModule({
  declarations: [SearchComponent, UserCreationBoxComponent],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    BackButtonPageContainerComponent,
  ],
  exports: [
    SearchComponent,
    UserCreationBoxComponent,
    BackButtonPageContainerComponent,
  ],
})
export class SharedModule {}
