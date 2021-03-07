import { AbstractControl, ValidationErrors } from '@angular/forms';

export function equal(control: AbstractControl): ValidationErrors | null {
  const conVal = control.value;
  const paVal = control.parent && control.parent.controls['password'].value;

  if (conVal != paVal) {
    control.setErrors({ equal: true });
    return { equal: true, requiredSame: 'same' };
  }
  control.setErrors(null);
  return null;
}
