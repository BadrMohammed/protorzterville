"use strict";
(self.webpackChunkangular_sessions =
  self.webpackChunkangular_sessions || []).push([
  [902],
  {
    8902: (C, l, i) => {
      i.r(l), i.d(l, { NewsModule: () => x });
      var r = i(7553),
        t = i(4769),
        u = i(7895),
        w = i(290),
        p = i(8502),
        c = i(6814);
      function h(e, o) {
        if (
          (1 & e &&
            (t.TgZ(0, "div", 9), t._UZ(1, "app-news-card", 10), t.qZA()),
          2 & e)
        ) {
          const s = o.$implicit;
          t.xp6(1), t.Q6J("newItem", s)("dimensionClass", "news-card");
        }
      }
      function m(e, o) {
        if (
          (1 & e &&
            (t.TgZ(0, "div", 3)(1, "div", 4),
            t.YNc(2, h, 2, 2, "div", 5),
            t.qZA(),
            t.TgZ(3, "div", 6)(4, "button")(5, "p"),
            t._uU(6, "More News"),
            t.qZA(),
            t.TgZ(7, "div", 7),
            t._UZ(8, "img", 8),
            t.qZA()()()()),
          2 & e)
        ) {
          const s = t.oxw();
          t.xp6(2), t.Q6J("ngForOf", s.news);
        }
      }
      function d(e, o) {
        if ((1 & e && t._UZ(0, "app-status", 11), 2 & e)) {
          const s = t.oxw();
          t.s9C("status", s.hasError ? "Error" : "No Content");
        }
      }
      function g(e, o) {
        if (
          (1 & e &&
            (t.TgZ(0, "div", 3)(1, "div", 4)(2, "p", 5),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, "p", 6),
            t._uU(5, " Date: "),
            t.TgZ(6, "span"),
            t._uU(7),
            t.qZA()(),
            t.TgZ(8, "div", 7),
            t._UZ(9, "img", 8),
            t.qZA(),
            t.TgZ(10, "p", 9),
            t._uU(11),
            t.qZA()()()),
          2 & e)
        ) {
          const s = t.oxw();
          t.xp6(3),
            t.Oqu(null == s.newDetails ? null : s.newDetails.title),
            t.xp6(4),
            t.Oqu(null == s.newDetails ? null : s.newDetails.date),
            t.xp6(2),
            t.Q6J(
              "src",
              null == s.newDetails ? null : s.newDetails.image_url,
              t.LSH
            )("alt", null == s.newDetails ? null : s.newDetails.title),
            t.xp6(2),
            t.Oqu(null == s.newDetails ? null : s.newDetails.brief);
        }
      }
      function v(e, o) {
        if ((1 & e && t._UZ(0, "app-status", 10), 2 & e)) {
          const s = t.oxw();
          t.s9C("status", s.hasError ? "Error" : "No Content");
        }
      }
      const N = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(s) {
                (this._newsService = s), (this.news = []), (this.hasError = !1);
              }
              ngOnInit() {
                console.log("test"), this.fetchNews();
              }
              fetchNews() {
                this.subscription = this._newsService.getNews().subscribe({
                  next: (s) => {
                    s.status && ((this.news = s.result), (this.hasError = !1));
                  },
                  error: (s) => {
                    this.hasError = !0;
                  },
                });
              }
              ngOnDestroy() {
                this?.subscription?.unsubscribe();
              }
              static #t = (this.ɵfac = function (n) {
                return new (n || e)(t.Y36(u.Y));
              });
              static #s = (this.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-news-list"]],
                decls: 3,
                vars: 2,
                consts: [
                  [1, "news-list-section"],
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
                  [3, "newItem", "dimensionClass"],
                  [3, "status"],
                ],
                template: function (n, a) {
                  1 & n &&
                    (t.TgZ(0, "section", 0),
                    t.YNc(1, m, 9, 1, "div", 1),
                    t.YNc(2, d, 1, 1, "app-status", 2),
                    t.qZA()),
                    2 & n &&
                      (t.xp6(1),
                      t.Q6J("ngIf", !a.hasError),
                      t.xp6(1),
                      t.Q6J("ngIf", !(null != a.news && a.news.length)));
                },
                dependencies: [w.H, p.P, c.sg, c.O5],
              }));
            }
            return e;
          })(),
        },
        {
          path: ":id",
          component: (() => {
            class e {
              constructor(s, n) {
                (this._newsService = s),
                  (this.route = n),
                  (this.newDetails = null),
                  (this.hasError = !1);
              }
              ngOnInit() {
                this.route.params.subscribe((s) => this.getNewDetails(s.id));
              }
              getNewDetails(s) {
                this.subscription = this._newsService.getNewById(s).subscribe({
                  next: (n) => {
                    n.status &&
                      ((this.newDetails = n.result), (this.hasError = !1));
                  },
                  error: (n) => {
                    this.hasError = !0;
                  },
                });
              }
              ngOnDestroy() {
                this?.subscription?.unsubscribe();
              }
              static #t = (this.ɵfac = function (n) {
                return new (n || e)(t.Y36(u.Y), t.Y36(r.gz));
              });
              static #s = (this.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-news-details"]],
                decls: 3,
                vars: 2,
                consts: [
                  [1, "news-details-section"],
                  ["class", "container", 4, "ngIf"],
                  [3, "status", 4, "ngIf"],
                  [1, "container"],
                  [1, "details-container"],
                  [1, "title"],
                  [1, "date"],
                  [1, "image-container"],
                  [1, "imgFull", 3, "src", "alt"],
                  [1, "brief"],
                  [3, "status"],
                ],
                template: function (n, a) {
                  1 & n &&
                    (t.TgZ(0, "section", 0),
                    t.YNc(1, g, 12, 5, "div", 1),
                    t.YNc(2, v, 1, 1, "app-status", 2),
                    t.qZA()),
                    2 & n &&
                      (t.xp6(1),
                      t.Q6J("ngIf", !a.hasError),
                      t.xp6(1),
                      t.Q6J("ngIf", !a.newDetails));
                },
                dependencies: [p.P, c.O5],
              }));
            }
            return e;
          })(),
        },
      ];
      let Z = (() => {
        class e {
          static #t = (this.ɵfac = function (n) {
            return new (n || e)();
          });
          static #s = (this.ɵmod = t.oAB({ type: e }));
          static #e = (this.ɵinj = t.cJS({
            imports: [r.Bz.forChild(N), r.Bz],
          }));
        }
        return e;
      })();
      var D = i(4763);
      let x = (() => {
        class e {
          static #t = (this.ɵfac = function (n) {
            return new (n || e)();
          });
          static #s = (this.ɵmod = t.oAB({ type: e }));
          static #e = (this.ɵinj = t.cJS({ imports: [Z, D.m] }));
        }
        return e;
      })();
    },
  },
]);
