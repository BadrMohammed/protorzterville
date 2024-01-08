"use strict";
(self.webpackChunkangular_sessions =
  self.webpackChunkangular_sessions || []).push([
  [468],
  {
    6468: (N, p, s) => {
      s.r(p), s.d(p, { AuthenticationModule: () => A });
      var m = s(7553),
        o = s(95),
        c = s(5437),
        e = s(4769),
        d = s(2490),
        h = s(2341),
        u = s(6814);
      function v(i, a) {
        if ((1 & i && (e.TgZ(0, "label", 34), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw().$implicit;
          e.s9C("for", t.name), e.xp6(1), e.Oqu(t.title);
        }
      }
      function Z(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 29)(1, "div", 30),
            e.YNc(2, v, 2, 2, "label", 31),
            e._UZ(3, "input", 32),
            e.TgZ(4, "div", 33),
            e._uU(5),
            e.qZA()()()),
          2 & i)
        ) {
          const t = a.$implicit,
            r = e.oxw();
          e.xp6(2),
            e.Q6J("ngIf", t.title),
            e.xp6(1),
            e.s9C("type", t.type),
            e.s9C("id", t.name),
            e.s9C("placeholder", t.placeholder),
            e.s9C("required", t.required),
            e.s9C("formControlName", t.name),
            e.s9C("min", t.min || null),
            e.xp6(2),
            e.hij(
              " ",
              r.getErrorMessage(
                r.eventRegistrationForm.controls[t.name],
                t.title
              ),
              " "
            );
        }
      }
      function x(i, a) {
        if ((1 & i && (e.TgZ(0, "div", 33), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw();
          e.xp6(1), e.hij(" ", t.errorMessage, " ");
        }
      }
      function T(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div"),
            e._UZ(1, "app-external-authentication", 35),
            e.qZA()),
          2 & i)
        ) {
          const t = a.$implicit;
          e.xp6(1), e.Q6J("serviceType", t);
        }
      }
      let y = (() => {
        class i {
          constructor() {
            (this.externalAuth = [
              { type: c.w.Facebook, title: "Sign up with with Facebook" },
              { type: c.w.Google, title: "Sign up with Google" },
            ]),
              (this.isSubmit = !1),
              (this.registerForm = [
                {
                  name: "fullName",
                  type: "text",
                  title: "Full Name",
                  placeholder: "Your name",
                  required: !0,
                },
                {
                  name: "email",
                  type: "email",
                  title: "Email",
                  placeholder: "Example@email.com",
                  required: !0,
                },
                {
                  name: "password",
                  type: "password",
                  title: "Password",
                  placeholder: "At least 8 characters",
                  required: !0,
                  min: "8",
                },
                {
                  name: "confirmPassword",
                  type: "password",
                  title: "Confirm Password",
                  placeholder: "At least 8 characters",
                  required: !0,
                  min: "8",
                },
              ]);
          }
          ngOnInit() {
            this.setFormGroup();
          }
          getErrorMessage(t, r) {
            if (
              (this.isSubmit &&
                (this.errorMessage = this.eventRegistrationForm.controls.confirm
                  .invalid
                  ? "you have to agree to the terms and conditions"
                  : ""),
              (t.touched || this.isSubmit) && t.invalid)
            ) {
              if (t.errors.required) return `${r} field is required`;
              if (t.errors.email || t.errors.pattern)
                return `${r} field is invalid`;
              if (t.errors.minlength.requiredLength)
                return r?.toLowerCase()?.includes("password")
                  ? "you have to enter at least 8 digit!"
                  : "you have to enter at least 3 digit!";
            }
            let f = this.eventRegistrationForm.controls.password;
            return "Confirm Password" !== r ||
              t.invalid ||
              !t.touched ||
              f.invalid ||
              f.value === t.value
              ? null
              : "Your password and confirmation password do not match.";
          }
          setFormGroup() {
            this.eventRegistrationForm = new o.cw({
              email: new o.NI(null, [o.kI.required, o.kI.email]),
              fullName: new o.NI(null, [o.kI.required, o.kI.minLength(3)]),
              password: new o.NI(null, [o.kI.required, o.kI.minLength(8)]),
              confirmPassword: new o.NI(null, [
                o.kI.required,
                o.kI.minLength(8),
              ]),
              confirm: new o.NI(null, [o.kI.requiredTrue]),
            });
          }
          onSubmit() {
            (this.isSubmit = !0),
              this.eventRegistrationForm.valid &&
                console.log(this.eventRegistrationForm);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || i)();
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-register"]],
            decls: 40,
            vars: 7,
            consts: [
              [1, "register-section"],
              [1, "section-container"],
              [1, "text-container"],
              [
                "src",
                "assets/Fe-kit/images/Logo.png",
                "alt",
                "logo-icon",
                1,
                "logo",
              ],
              [1, "title"],
              [1, "form-container"],
              [3, "formGroup", "ngSubmit"],
              [1, "row", "d-flex", "justify-content-center", "margin0"],
              [
                1,
                "col-xl-7",
                "col-lg-8",
                "col-md-10",
                "col-sm-11",
                "col-xs-11",
              ],
              [
                1,
                "row",
                "d-flex",
                "justify-content-center",
                "margin0",
                "row-input",
              ],
              [
                "class",
                "col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                1,
                "col-xl-10",
                "col-lg-10",
                "col-md-11",
                "col-sm-12",
                "col-xs-12",
              ],
              ["class", "error-message", 4, "ngIf"],
              [3, "buttonLabel", "className", "buttonType"],
              [1, "v-line"],
              [1, "vr"],
              [1, "text"],
              [1, "login-text"],
              ["routerLink", "/login"],
              [1, "form-check", "confirm-box"],
              [
                "type",
                "checkbox",
                "id",
                "confirm",
                "name",
                "confirm",
                "formControlName",
                "confirm",
                "required",
                "true",
                1,
                "form-check-input",
              ],
              ["for", "confirm", 1, "form-check-label"],
              [
                1,
                "col-xl-4",
                "col-lg-4",
                "col-md-11",
                "col-sm-11",
                "col-xs-11",
                "external-auth-column",
              ],
              [1, "h-line"],
              ["routerLink", "/", 1, "back-to-home-text", "mt-4"],
              [1, "external-container"],
              [4, "ngFor", "ngForOf"],
              [1, "image-container"],
              [1, "hover"],
              [
                1,
                "col-xl-10",
                "col-lg-10",
                "col-md-10",
                "col-sm-12",
                "col-xs-12",
              ],
              [1, "form-group"],
              [3, "for", 4, "ngIf"],
              [
                1,
                "form-control",
                3,
                "type",
                "id",
                "placeholder",
                "required",
                "formControlName",
                "min",
              ],
              [1, "error-message"],
              [3, "for"],
              [3, "serviceType"],
            ],
            template: function (r, n) {
              1 & r &&
                (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2),
                e._UZ(3, "img", 3),
                e.TgZ(4, "h5", 4),
                e._uU(5, "Sign Up"),
                e.qZA(),
                e.TgZ(6, "div", 5)(7, "form", 6),
                e.NdJ("ngSubmit", function () {
                  return n.onSubmit();
                }),
                e.TgZ(8, "div", 7)(9, "div", 8)(10, "div", 9),
                e.YNc(11, Z, 6, 8, "div", 10),
                e.TgZ(12, "div", 11),
                e.YNc(13, x, 2, 1, "div", 12),
                e._UZ(14, "app-button", 13),
                e.qZA(),
                e.TgZ(15, "div", 14),
                e._UZ(16, "div", 15),
                e.TgZ(17, "div", 16),
                e._uU(18, "or"),
                e.qZA(),
                e._UZ(19, "div", 15),
                e.qZA()(),
                e.TgZ(20, "p", 17),
                e._uU(21, " Already have an account? "),
                e.TgZ(22, "span", 18),
                e._uU(23, "Log In"),
                e.qZA()(),
                e.TgZ(24, "div", 19),
                e._UZ(25, "input", 20),
                e.TgZ(26, "label", 21),
                e._uU(
                  27,
                  "by submitting the registration from, user accept terms and conditions"
                ),
                e.qZA()()(),
                e.TgZ(28, "div", 22)(29, "div", 23),
                e._UZ(30, "hr"),
                e.TgZ(31, "div", 16),
                e._uU(32, "or"),
                e.qZA(),
                e._UZ(33, "hr"),
                e.qZA(),
                e.TgZ(34, "a", 24),
                e._uU(35, "Back To home"),
                e.qZA(),
                e.TgZ(36, "div", 25),
                e.YNc(37, T, 2, 1, "div", 26),
                e.qZA()()()()()(),
                e.TgZ(38, "div", 27),
                e._UZ(39, "div", 28),
                e.qZA()()()),
                2 & r &&
                  (e.xp6(7),
                  e.Q6J("formGroup", n.eventRegistrationForm),
                  e.xp6(4),
                  e.Q6J("ngForOf", n.registerForm),
                  e.xp6(2),
                  e.Q6J("ngIf", n.errorMessage),
                  e.xp6(1),
                  e.Q6J("buttonLabel", "Sign Up")("className", "primary")(
                    "buttonType",
                    "submit"
                  ),
                  e.xp6(23),
                  e.Q6J("ngForOf", n.externalAuth));
            },
            dependencies: [
              m.rH,
              d.r,
              h.S,
              u.sg,
              u.O5,
              o._Y,
              o.Fj,
              o.Wl,
              o.JJ,
              o.JL,
              o.Q7,
              o.Zs,
              o.sg,
              o.u,
            ],
          }));
        }
        return i;
      })();
      var F = s(1110),
        _ = s(5879);
      function w(i, a) {
        if ((1 & i && (e.TgZ(0, "label", 26), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw().$implicit;
          e.s9C("for", t.name), e.xp6(1), e.Oqu(t.title);
        }
      }
      function q(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 21)(1, "div", 22),
            e.YNc(2, w, 2, 2, "label", 23),
            e._UZ(3, "input", 24),
            e.TgZ(4, "div", 25),
            e._uU(5),
            e.qZA()()()),
          2 & i)
        ) {
          const t = a.$implicit,
            r = e.oxw();
          e.xp6(2),
            e.Q6J("ngIf", t.title),
            e.xp6(1),
            e.s9C("type", t.type),
            e.s9C("id", t.name),
            e.s9C("placeholder", t.placeholder),
            e.s9C("required", t.required),
            e.s9C("formControlName", t.name),
            e.s9C("min", t.min || null),
            e.xp6(2),
            e.hij(
              " ",
              r.getErrorMessage(r.eventLoginForm.controls[t.name], t.title),
              " "
            );
        }
      }
      function b(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div"),
            e._UZ(1, "app-external-authentication", 27),
            e.qZA()),
          2 & i)
        ) {
          const t = a.$implicit;
          e.xp6(1), e.Q6J("serviceType", t);
        }
      }
      const L = [
        { path: "register", component: y },
        {
          path: "login",
          component: (() => {
            class i {
              constructor(t, r, n, l) {
                (this.router = t),
                  (this.activatedRoute = r),
                  (this._loginService = n),
                  (this._securityService = l),
                  (this.externalAuth = [
                    { type: c.w.Facebook, title: "Sign up with with Facebook" },
                    { type: c.w.Google, title: "Sign up with Google" },
                  ]),
                  (this.loginForm = [
                    {
                      name: "email",
                      type: "email",
                      title: "Email",
                      placeholder: "Example@email.com",
                    },
                    {
                      name: "password",
                      type: "password",
                      title: "Password",
                      placeholder: "At least 8 characters",
                    },
                  ]),
                  (this.isSubmit = !1);
              }
              ngOnInit() {
                this.setFormGroup();
              }
              getErrorMessage(t, r) {
                if ((t.touched || this.isSubmit) && t.invalid) {
                  if (t.errors.required) return `${r} field is required`;
                  if (t.errors.minlength.requiredLength)
                    return "you have to enter at least 8 digit!";
                  if (t.errors.email || t.errors.pattern)
                    return `${r} field is invalid`;
                }
                return null;
              }
              setFormGroup() {
                this.eventLoginForm = new o.cw({
                  email: new o.NI(null, [o.kI.required, o.kI.email]),
                  password: new o.NI(null, [o.kI.required, o.kI.minLength(8)]),
                });
              }
              onSubmit() {
                if (((this.isSubmit = !0), this.eventLoginForm.valid)) {
                  const r = this.activatedRoute.snapshot.queryParams.returnURL;
                  (this.subscription = this._loginService
                    .login(this.eventLoginForm.value)
                    .subscribe({
                      next: (n) => {
                        200 === n.status &&
                          (this._securityService.setLocalStorage(
                            "token",
                            n.token
                          ),
                          this._securityService.setLocalStorage(
                            "userData",
                            JSON.stringify(n)
                          ),
                          r
                            ? this.router.navigateByUrl(r)
                            : this.router.navigate(["/"]));
                      },
                      error: (n) => {
                        console.log(n);
                      },
                    })),
                    console.log(this.eventLoginForm);
                }
              }
              static #e = (this.ɵfac = function (r) {
                return new (r || i)(
                  e.Y36(m.F0),
                  e.Y36(m.gz),
                  e.Y36(F.r),
                  e.Y36(_.I)
                );
              });
              static #t = (this.ɵcmp = e.Xpm({
                type: i,
                selectors: [["app-login"]],
                decls: 29,
                vars: 6,
                consts: [
                  [1, "login-section"],
                  [1, "section-container"],
                  [1, "text-container"],
                  [
                    "src",
                    "assets/Fe-kit/images/Logo.png",
                    "alt",
                    "logo-icon",
                    1,
                    "logo",
                  ],
                  [1, "title"],
                  [1, "form-container"],
                  [3, "formGroup", "ngSubmit"],
                  [1, "row", "d-flex", "justify-content-center", "margin0"],
                  [
                    1,
                    "col-xl-10",
                    "col-lg-10",
                    "col-md-10",
                    "col-sm-11",
                    "col-xs-12",
                  ],
                  ["class", "input-container", 4, "ngFor", "ngForOf"],
                  [3, "buttonLabel", "className", "buttonType"],
                  [1, "register-text"],
                  ["routerLink", "/register"],
                  ["routerLink", "/forget-password", 1, "forget-text"],
                  ["routerLink", "/", 1, "back-to-home-text"],
                  [1, "h-line"],
                  [1, "text"],
                  [1, "external-container"],
                  [4, "ngFor", "ngForOf"],
                  [1, "image-container"],
                  [1, "hover"],
                  [1, "input-container"],
                  [1, "form-group"],
                  [3, "for", 4, "ngIf"],
                  [
                    1,
                    "form-control",
                    3,
                    "type",
                    "id",
                    "placeholder",
                    "required",
                    "formControlName",
                    "min",
                  ],
                  [1, "error-message"],
                  [3, "for"],
                  [3, "serviceType"],
                ],
                template: function (r, n) {
                  1 & r &&
                    (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2),
                    e._UZ(3, "img", 3),
                    e.TgZ(4, "h5", 4),
                    e._uU(5, "Log in"),
                    e.qZA(),
                    e.TgZ(6, "div", 5)(7, "form", 6),
                    e.NdJ("ngSubmit", function () {
                      return n.onSubmit();
                    }),
                    e.TgZ(8, "div", 7)(9, "div", 8),
                    e.YNc(10, q, 6, 8, "div", 9),
                    e._UZ(11, "app-button", 10),
                    e.TgZ(12, "p", 11),
                    e._uU(13, " Don't have an account? "),
                    e.TgZ(14, "span", 12),
                    e._uU(15, "Sign Up"),
                    e.qZA()(),
                    e.TgZ(16, "p", 13),
                    e._uU(17, " Forgot Password? "),
                    e.qZA(),
                    e.TgZ(18, "a", 14),
                    e._uU(19, "Back To home"),
                    e.qZA(),
                    e.TgZ(20, "div", 15),
                    e._UZ(21, "hr"),
                    e.TgZ(22, "div", 16),
                    e._uU(23, "or"),
                    e.qZA(),
                    e._UZ(24, "hr"),
                    e.qZA(),
                    e.TgZ(25, "div", 17),
                    e.YNc(26, b, 2, 1, "div", 18),
                    e.qZA()()()()()(),
                    e.TgZ(27, "div", 19),
                    e._UZ(28, "div", 20),
                    e.qZA()()()),
                    2 & r &&
                      (e.xp6(7),
                      e.Q6J("formGroup", n.eventLoginForm),
                      e.xp6(3),
                      e.Q6J("ngForOf", n.loginForm),
                      e.xp6(1),
                      e.Q6J("buttonLabel", "Log in")("className", "primary")(
                        "buttonType",
                        "submit"
                      ),
                      e.xp6(15),
                      e.Q6J("ngForOf", n.externalAuth));
                },
                dependencies: [
                  m.rH,
                  d.r,
                  h.S,
                  u.sg,
                  u.O5,
                  o._Y,
                  o.Fj,
                  o.JJ,
                  o.JL,
                  o.Q7,
                  o.sg,
                  o.u,
                ],
              }));
            }
            return i;
          })(),
        },
      ];
      let U = (() => {
        class i {
          static #e = (this.ɵfac = function (r) {
            return new (r || i)();
          });
          static #t = (this.ɵmod = e.oAB({ type: i }));
          static #i = (this.ɵinj = e.cJS({
            imports: [m.Bz.forChild(L), m.Bz],
          }));
        }
        return i;
      })();
      var C = s(4763);
      let A = (() => {
        class i {
          static #e = (this.ɵfac = function (r) {
            return new (r || i)();
          });
          static #t = (this.ɵmod = e.oAB({ type: i }));
          static #i = (this.ɵinj = e.cJS({ imports: [U, C.m] }));
        }
        return i;
      })();
    },
  },
]);
