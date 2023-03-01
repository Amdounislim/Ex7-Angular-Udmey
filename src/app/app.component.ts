import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectname: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === "test") {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
