import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
    OutputComponent,
    ExampleComponent,
    RegisterComponent,
    SignInComponent,
    SignInOAuthComponent,
    ChangePasswordComponent,
    AccessResourceComponent,
    ValidateTokenComponent
} from './';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        ExampleComponent,

        OutputComponent,

        RegisterComponent,
        SignInComponent,
        SignInOAuthComponent,
        ChangePasswordComponent,
        AccessResourceComponent,
        ValidateTokenComponent
    ],
    exports: [
        ExampleComponent
    ]
})
export class ExampleModule { }
