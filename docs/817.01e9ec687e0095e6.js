"use strict";
(self.webpackChunkangular_sessions =
  self.webpackChunkangular_sessions || []).push([
  [817],
  {
    3817: (T, a, r) => {
      r.r(a), r.d(a, { CoursesModule: () => Z });
      var c = r(7553),
        s = r(4769),
        l = r(1669),
        d = r(8502),
        m = r(1913),
        u = r(6814);
      function p(t, n) {
        if (
          (1 & t &&
            (s.TgZ(0, "div", 9), s._UZ(1, "app-course-card", 10), s.qZA()),
          2 & t)
        ) {
          const o = n.$implicit;
          s.xp6(1), s.Q6J("course", o)("customCardClassName", "course-card");
        }
      }
      function h(t, n) {
        if (
          (1 & t &&
            (s.TgZ(0, "div", 3)(1, "div", 4),
            s.YNc(2, p, 2, 2, "div", 5),
            s.qZA(),
            s.TgZ(3, "div", 6)(4, "button")(5, "p"),
            s._uU(6, "More Courses"),
            s.qZA(),
            s.TgZ(7, "div", 7),
            s._UZ(8, "img", 8),
            s.qZA()()()()),
          2 & t)
        ) {
          const o = s.oxw();
          s.xp6(2), s.Q6J("ngForOf", o.data);
        }
      }
      function C(t, n) {
        if ((1 & t && s._UZ(0, "app-status", 11), 2 & t)) {
          const o = s.oxw();
          s.s9C("status", o.hasError ? "Error" : "No Content");
        }
      }
      const f = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(o) {
                (this._courseService = o),
                  (this.hasError = !1),
                  (this.data = []);
              }
              ngOnInit() {
                this.getCourses();
              }
              getCourses() {
                this.subscription = this._courseService
                  .getLatestCourse()
                  .subscribe({
                    next: (o) => {
                      o?.status &&
                        ((this.data = o.result), (this.hasError = !1));
                    },
                    error: (o) => {
                      this.hasError = !0;
                    },
                  });
              }
              ngOnDestroy() {
                this?.subscription?.unsubscribe();
              }
              static #s = (this.ɵfac = function (e) {
                return new (e || t)(s.Y36(l.N));
              });
              static #t = (this.ɵcmp = s.Xpm({
                type: t,
                selectors: [["app-courses-list"]],
                decls: 3,
                vars: 2,
                consts: [
                  [1, "courses-list-section"],
                  ["class", "container", 4, "ngIf"],
                  [3, "status", 4, "ngIf"],
                  [1, "container"],
                  [1, "card-container"],
                  ["class", "card-item", 4, "ngFor", "ngForOf"],
                  [1, "more-button"],
                  [1, "img-container"],
                  [
                    "src",
                    "assets/Fe-kit/svg/bottom-arrow-white.png",
                    "alt",
                    "bottom-arrow-white",
                  ],
                  [1, "card-item"],
                  [3, "course", "customCardClassName"],
                  [3, "status"],
                ],
                template: function (e, i) {
                  1 & e &&
                    (s.TgZ(0, "section", 0),
                    s.YNc(1, h, 9, 1, "div", 1),
                    s.YNc(2, C, 1, 1, "app-status", 2),
                    s.qZA()),
                    2 & e &&
                      (s.xp6(1),
                      s.Q6J("ngIf", !i.hasError),
                      s.xp6(1),
                      s.Q6J("ngIf", !(null != i.data && i.data.length)));
                },
                dependencies: [d.P, m.I, u.sg, u.O5],
              }));
            }
            return t;
          })(),
        },
      ];
      let g = (() => {
        class t {
          static #s = (this.ɵfac = function (e) {
            return new (e || t)();
          });
          static #t = (this.ɵmod = s.oAB({ type: t }));
          static #o = (this.ɵinj = s.cJS({
            imports: [c.Bz.forChild(f), c.Bz],
          }));
        }
        return t;
      })();
      var v = r(4763);
      let Z = (() => {
        class t {
          static #s = (this.ɵfac = function (e) {
            return new (e || t)();
          });
          static #t = (this.ɵmod = s.oAB({ type: t }));
          static #o = (this.ɵinj = s.cJS({ imports: [g, v.m] }));
        }
        return t;
      })();
    },
  },
]);
