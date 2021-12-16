import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { MustMatch } from './must-match.validator';
import { ReactiveMustMatch } from './reactive-must-match.validator';

@Directive({
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
    @Input('mustMatch') mustMatch: string[] = [];

    validate(formGroup: FormGroup): any {
        return ReactiveMustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
}