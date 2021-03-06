import { AbstractControl, ValidationErrors } from "@angular/forms";
// import { array } from "../components/react-form/react-form.component";

export function equal(control: AbstractControl): ValidationErrors | null {

     const v = control.value;
console.log(222222)

    // const password: string = control.get('password').value; // get password from our password form control
    // const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
    // // compare is the password math
    // if (password !== confirmPassword) {
    //     return { 'equal': true, 'requiredSame': 'same' };

    // }

const r = control.parent&&control.parent.controls['password'].value
console.log(v,r)
    if (v!=r) {
        control.setErrors({'equal':true})
        return { 'equal': true, 'requiredSame': 'same' };
    }

    // if (v <= 10) {

    //     return { 'equal': true, 'requiredSame': 'same' }

    // }

    return null;

}
