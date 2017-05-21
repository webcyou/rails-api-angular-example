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
    AccessResourceComponent
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
        AccessResourceComponent
    ],
    exports: [
        ExampleComponent
    ]
})
export class ExampleModule { }
