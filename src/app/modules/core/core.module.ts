import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule,
  MatNativeDateModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule} from '@angular/forms';

import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    CdkTableModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    MatTooltipModule,
    MatNativeDateModule,
    ToastrModule.forRoot()
  ],
  exports: [MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    CdkTableModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    MatTooltipModule,
    MatNativeDateModule
  ],
  providers: [
    ]
})
export class CoreModule {
}
