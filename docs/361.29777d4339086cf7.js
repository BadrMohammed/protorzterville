"use strict";
(self.webpackChunkangular_sessions =
  self.webpackChunkangular_sessions || []).push([
  [361],
  {
    7361: (y, c, n) => {
      n.r(c), n.d(c, { DepartmentsModule: () => _ });
      var l = n(7553),
        t = n(4769),
        u = n(9776),
        d = n(8502),
        p = n(7234),
        o = n(6814);
      function m(s, i) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 8)(1, "app-department-card", 9),
            t._UZ(2, "div", 10),
            t.qZA()()),
          2 & s)
        ) {
          const e = i.$implicit;
          t.xp6(1), t.Q6J("department", e);
        }
      }
      function g(s, i) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 3)(1, "div", 4),
            t._UZ(2, "img", 5),
            t.TgZ(3, "span"),
            t._uU(4, "8 Results"),
            t.qZA()(),
            t.TgZ(5, "div", 6),
            t.YNc(6, m, 3, 1, "div", 7),
            t.qZA()()),
          2 & s)
        ) {
          const e = t.oxw();
          t.xp6(6), t.Q6J("ngForOf", e.departments);
        }
      }
      function h(s, i) {
        if ((1 & s && t._UZ(0, "app-status", 11), 2 & s)) {
          const e = t.oxw();
          t.s9C("status", e.hasError ? "Error" : "No Content");
        }
      }
      let v = (() => {
        class s {
          constructor(e) {
            (this._departmentService = e),
              (this.departments = [
                { id: "1", title: "Frontend2", courses_count: 233 },
                { id: "2", title: "Backend2", courses_count: 233 },
                { id: "3", title: "Quality2", courses_count: 233 },
                { id: "4", title: "Presales2", courses_count: 233 },
                { id: "5", title: "UX2", courses_count: 233 },
                { id: "6", title: "Testing", courses_count: 233 },
                { id: "7", title: "DevOps", courses_count: 233 },
                { id: "8", title: "Graphic", courses_count: 233 },
              ]),
              (this.hasError = !1);
          }
          ngOnInit() {}
          getDepartments() {
            this.subscription = this._departmentService
              .getDepartments()
              .subscribe({
                next: (e) => {
                  e?.status &&
                    ((this.data = e.result),
                    (this.departments = e.result.items),
                    (this.hasError = !1));
                },
                error: (e) => {
                  this.hasError = !0;
                },
              });
          }
          ngOnDestroy() {
            this?.subscription?.unsubscribe();
          }
          static #t = (this.ɵfac = function (r) {
            return new (r || s)(t.Y36(u._));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: s,
            selectors: [["app-departments-list"]],
            decls: 3,
            vars: 2,
            consts: [
              [1, "department-list-section"],
              ["class", "container", 4, "ngIf"],
              [3, "status", 4, "ngIf"],
              [1, "container"],
              [1, "search-result-text"],
              [
                "src",
                "../../../../assets/Fe-kit/svg/search-result-secondary.svg",
                "alt",
                "search result icon",
              ],
              [1, "card-container"],
              ["class", "card-item", 4, "ngFor", "ngForOf"],
              [1, "card-item"],
              [3, "department"],
              ["hover", "", 1, "hover"],
              [3, "status"],
            ],
            template: function (r, a) {
              1 & r &&
                (t.TgZ(0, "section", 0),
                t.YNc(1, g, 7, 1, "div", 1),
                t.YNc(2, h, 1, 1, "app-status", 2),
                t.qZA()),
                2 & r &&
                  (t.xp6(1),
                  t.Q6J("ngIf", !a.hasError),
                  t.xp6(1),
                  t.Q6J(
                    "ngIf",
                    !(null != a.departments && a.departments.length)
                  ));
            },
            dependencies: [d.P, p.n, o.sg, o.O5],
          }));
        }
        return s;
      })();
      var f = n(557),
        Z = n(1669),
        I = n(2490),
        x = n(1913);
      function D(s, i) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8),
            t._UZ(4, "app-button", 9)(5, "app-button", 9),
            t.qZA(),
            t.TgZ(6, "div", 10)(7, "p", 11),
            t._uU(8),
            t.qZA(),
            t._UZ(9, "img", 12),
            t.qZA()(),
            t.TgZ(10, "p", 13),
            t._uU(11),
            t.qZA(),
            t.TgZ(12, "div", 14)(13, "div", 15)(14, "p", 16),
            t._uU(15, "Supported Language:"),
            t.qZA(),
            t.TgZ(16, "p", 17),
            t._uU(17, "English, Arabic"),
            t.qZA()(),
            t.TgZ(18, "div", 15)(19, "p", 16),
            t._uU(20, "Start date:"),
            t.qZA(),
            t.TgZ(21, "p", 17),
            t._uU(22),
            t.qZA()(),
            t.TgZ(23, "div", 15)(24, "p", 16),
            t._uU(25, "End date:"),
            t.qZA(),
            t.TgZ(26, "p", 17),
            t._uU(27),
            t.qZA()()()(),
            t.TgZ(28, "div", 18),
            t._UZ(29, "img", 19),
            t.qZA()()),
          2 & s)
        ) {
          const e = t.oxw();
          t.s9C("ngIf", e.selectItem),
            t.xp6(4),
            t.Q6J("className", "secondary category-button")(
              "buttonLabel",
              e.selectItem ? e.selectItem.category.category_name : ""
            ),
            t.xp6(1),
            t.Q6J("className", "secondary")("buttonLabel", "Subcategory"),
            t.xp6(3),
            t.AsE(
              " ",
              e.selectItem && e.selectItem.rate.rates_count,
              " (",
              e.selectItem && e.selectItem.rate.rates_score,
              ") "
            ),
            t.xp6(3),
            t.Oqu(e.selectItem && e.selectItem.title),
            t.xp6(11),
            t.hij(
              " ",
              e.selectItem ? e.selectItem.start_date || e.selectItem.date : "",
              " "
            ),
            t.xp6(5),
            t.hij(
              " ",
              e.selectItem ? e.selectItem.end_date || e.selectItem.date : "",
              " "
            ),
            t.xp6(2),
            t.s9C("src", e.selectItem && e.selectItem.image_url, t.LSH),
            t.s9C("alt", e.selectItem && e.selectItem.title);
        }
      }
      function T(s, i) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 20), t._UZ(1, "app-course-card", 21), t.qZA()),
          2 & s)
        ) {
          const e = i.$implicit,
            r = t.oxw();
          t.xp6(1), t.Q6J("course", e)("handleRead", r.onRedMore);
        }
      }
      const C = [
        { path: "", component: v },
        {
          path: ":title",
          component: (() => {
            class s {
              constructor(e) {
                (this._courseService = e),
                  (this.hasError = !1),
                  (this.data = []),
                  (this.onRedMore = (r) => {
                    this.getCourse(r.id), (0, f.e)("selected-course");
                  });
              }
              ngOnInit() {
                this.getCourses(), this.getCourse(4907);
              }
              getCourses() {
                this.subscription = this._courseService
                  .getLatestCourse()
                  .subscribe({
                    next: (e) => {
                      e?.status &&
                        ((this.data = e.result), (this.hasError = !1));
                    },
                    error: (e) => {
                      this.hasError = !0;
                    },
                  });
              }
              getCourse(e) {
                this.subscriptionDetails = this._courseService
                  .getCourseDetails(e)
                  .subscribe({
                    next: (r) => {
                      r?.status &&
                        ((this.selectItem = r?.result), (this.hasError = !1));
                    },
                    error: (r) => {
                      this.hasError = !0;
                    },
                  });
              }
              ngOnDestroy() {
                this.subscription?.unsubscribe(),
                  this?.subscriptionDetails?.unsubscribe();
              }
              static #t = (this.ɵfac = function (r) {
                return new (r || s)(t.Y36(Z.N));
              });
              static #e = (this.ɵcmp = t.Xpm({
                type: s,
                selectors: [["app-department-details"]],
                decls: 5,
                vars: 1,
                consts: [
                  [1, "department-details-section"],
                  [1, "container"],
                  [
                    "class",
                    "selected-course",
                    "id",
                    "selected-course",
                    3,
                    "ngIf",
                    4,
                    "",
                  ],
                  [1, "row"],
                  ["class", "col-xl-12 column", 4, "ngFor", "ngForOf"],
                  ["id", "selected-course", 1, "selected-course", 3, "ngIf"],
                  [1, "text-container"],
                  [1, "actions"],
                  [1, "buttons"],
                  [3, "className", "buttonLabel"],
                  [1, "rate"],
                  [1, "rate-text"],
                  [
                    "src",
                    "../../../../assets/Fe-kit/svg/star.svg",
                    "alt",
                    "star-icon",
                  ],
                  [1, "title"],
                  [1, "details"],
                  [1, "item"],
                  [1, "key"],
                  [1, "value"],
                  [1, "image-container"],
                  [1, "imgFull", 3, "src", "alt"],
                  [1, "col-xl-12", "column"],
                  [3, "course", "handleRead"],
                ],
                template: function (r, a) {
                  1 & r &&
                    (t.TgZ(0, "section", 0)(1, "div", 1),
                    t.YNc(2, D, 30, 12, "div", 2),
                    t.TgZ(3, "div", 3),
                    t.YNc(4, T, 2, 2, "div", 4),
                    t.qZA()()()),
                    2 & r && (t.xp6(4), t.Q6J("ngForOf", a.data));
                },
                dependencies: [I.r, x.I, o.sg, o.O5],
              }));
            }
            return s;
          })(),
        },
      ];
      let b = (() => {
        class s {
          static #t = (this.ɵfac = function (r) {
            return new (r || s)();
          });
          static #e = (this.ɵmod = t.oAB({ type: s }));
          static #s = (this.ɵinj = t.cJS({
            imports: [l.Bz.forChild(C), l.Bz],
          }));
        }
        return s;
      })();
      var A = n(4763);
      let _ = (() => {
        class s {
          static #t = (this.ɵfac = function (r) {
            return new (r || s)();
          });
          static #e = (this.ɵmod = t.oAB({ type: s }));
          static #s = (this.ɵinj = t.cJS({ imports: [b, A.m] }));
        }
        return s;
      })();
    },
  },
]);
