"use strict";
(self.webpackChunkangular_sessions =
  self.webpackChunkangular_sessions || []).push([
  [977],
  {
    977: (K, u, a) => {
      a.r(u), a.d(u, { HomeModule: () => G });
      var Z = a(4763),
        l = a(7553),
        t = a(4769),
        p = a(553),
        d = a(6661),
        m = a(9862);
      let w = (() => {
        class s {
          constructor(e) {
            (this._http = e),
              (this.apiUrl = p.N.apiBaseUrl),
              (this.apiUrlGet = d.L),
              console.log("home service init");
          }
          getCarousel() {
            return this._http.get(this.apiUrl + this.apiUrlGet.getCarousel);
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || s)(t.LFG(m.eN));
          });
          static #e = (this.ɵprov = t.Yz7({
            token: s,
            factory: s.ɵfac,
            providedIn: "root",
          }));
        }
        return s;
      })();
      var _ = a(5198),
        T = a(9776),
        y = a(7234),
        c = a(6814);
      function x(s, r) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 11), t._UZ(1, "app-department-card", 12), t.qZA()),
          2 & s)
        ) {
          const e = r.$implicit;
          t.xp6(1), t.Q6J("department", e);
        }
      }
      function N(s, r) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 11), t._UZ(1, "app-department-card", 12), t.qZA()),
          2 & s)
        ) {
          const e = r.$implicit;
          t.xp6(1), t.Q6J("department", e);
        }
      }
      function L(s, r) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 11), t._UZ(1, "app-department-card", 12), t.qZA()),
          2 & s)
        ) {
          const e = r.$implicit;
          t.xp6(1), t.Q6J("department", e);
        }
      }
      let A = (() => {
          class s {
            constructor(e) {
              (this._departmentService = e),
                (this.hasError = !1),
                (this.dataOne = [
                  { id: 1, title: "Luxor" },
                  { id: 2, title: "Aswan" },
                ]),
                (this.dataTwo = [
                  { id: 3, title: "Hurghada" },
                  { id: 4, title: "Safaga" },
                ]),
                (this.dataThree = [{ id: 5, title: "Sharm-el-Sheikh" }]),
                (this.departments = {
                  title: "Determine your tourist destination with us",
                  description:
                    "The best tourist places in Egypt. We offer the best prices",
                });
            }
            ngOnInit() {}
            getDepartments() {
              this.subscription = this._departmentService
                .getDepartments()
                .subscribe({
                  next: (e) => {
                    if (e?.status) {
                      this.data = e.result;
                      let i = e.result.items;
                      (this.dataOne = i.filter(
                        (n) =>
                          n.title.includes("Quality") ||
                          n.title.includes("Presales")
                      )),
                        (this.dataTwo = i.filter(
                          (n) =>
                            n.title.includes("Frontend") ||
                            n.title.includes("UX")
                        )),
                        (this.dataThree = i.filter((n) =>
                          n.title.includes("Backend")
                        )),
                        (this.hasError = !1);
                    }
                  },
                  error: (e) => {
                    this.hasError = !0;
                  },
                });
            }
            ngOnDestroy() {}
            static #t = (this.ɵfac = function (i) {
              return new (i || s)(t.Y36(T._));
            });
            static #e = (this.ɵcmp = t.Xpm({
              type: s,
              selectors: [["app-departments"]],
              decls: 14,
              vars: 5,
              consts: [
                ["id", "departments", 1, "section-departments"],
                [1, "parent-container"],
                [1, "inner-container"],
                [1, "text-container"],
                [1, "title", 3, "innerHTML"],
                [1, "description"],
                [1, "card-container"],
                [1, "card-box", "card-box1"],
                ["class", "card-item", 4, "ngFor", "ngForOf"],
                [1, "card-box", "card-box2"],
                [1, "card-box", "card-box3"],
                [1, "card-item"],
                [3, "department"],
              ],
              template: function (i, n) {
                1 & i &&
                  (t.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2)(
                    3,
                    "div",
                    3
                  ),
                  t._UZ(4, "p", 4),
                  t.TgZ(5, "p", 5),
                  t._uU(6),
                  t.qZA()()(),
                  t.TgZ(7, "div", 6)(8, "div", 7),
                  t.YNc(9, x, 2, 1, "div", 8),
                  t.qZA(),
                  t.TgZ(10, "div", 9),
                  t.YNc(11, N, 2, 1, "div", 8),
                  t.qZA(),
                  t.TgZ(12, "div", 10),
                  t.YNc(13, L, 2, 1, "div", 8),
                  t.qZA()()()()),
                  2 & i &&
                    (t.xp6(4),
                    t.Q6J("innerHTML", n.departments.title, t.oJD),
                    t.xp6(2),
                    t.hij(" ", n.departments.description, " "),
                    t.xp6(3),
                    t.Q6J("ngForOf", n.dataOne),
                    t.xp6(2),
                    t.Q6J("ngForOf", n.dataTwo),
                    t.xp6(2),
                    t.Q6J("ngForOf", n.dataThree));
              },
              dependencies: [y.n, c.sg],
            }));
          }
          return s;
        })(),
        U = (() => {
          class s {
            constructor(e) {
              (this._http = e),
                (this.apiUrl = p.N.apiBaseUrl),
                (this.apiUrlGet = d.L),
                console.log("internship service init");
            }
            getInternships() {
              return this._http.get(
                this.apiUrl + this.apiUrlGet.getInternships
              );
            }
            static #t = (this.ɵfac = function (i) {
              return new (i || s)(t.LFG(m.eN));
            });
            static #e = (this.ɵprov = t.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            }));
          }
          return s;
        })();
      var h = a(2490);
      const B = function () {
        return ["/courses"];
      };
      let S = (() => {
        class s {
          constructor(e) {
            (this._internshipService = e), (this.hasError = !1);
          }
          ngOnInit() {
            this.getInternships();
          }
          getInternships() {
            this.subscription = this._internshipService
              .getInternships()
              .subscribe({
                next: (e) => {
                  e?.status &&
                    ((this.data = e.result?.internship), (this.hasError = !1));
                },
                error: (e) => {
                  this.hasError = !0;
                },
              });
          }
          ngOnDestroy() {
            this?.subscription?.unsubscribe();
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || s)(t.Y36(U));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: s,
            selectors: [["app-internship"]],
            decls: 17,
            vars: 12,
            consts: [
              [1, "section-internship"],
              [1, "internship-container"],
              [1, "internship-text-container"],
              [1, "section-title"],
              [1, "section-content"],
              [1, "seminars-text"],
              [1, "seminars-desc"],
              [
                3,
                "className",
                "hasIcon",
                "buttonLabel",
                "buttonTitleClassName",
                "routerLink",
              ],
              [1, "internship-image-container"],
              [1, "book-image"],
              [1, "imgFull", 3, "src", "alt"],
              [1, "link-image"],
              [
                "src",
                "assets/Fe-kit/images/blue-image.png",
                "alt",
                "",
                1,
                "imgFull",
              ],
            ],
            template: function (i, n) {
              1 & i &&
                (t.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3),
                t._uU(4),
                t.qZA(),
                t.TgZ(5, "h5", 4),
                t._uU(6),
                t.qZA(),
                t.TgZ(7, "p", 5),
                t._uU(8),
                t.qZA(),
                t.TgZ(9, "p", 6),
                t._uU(10),
                t.qZA(),
                t._UZ(11, "app-button", 7),
                t.qZA(),
                t.TgZ(12, "div", 8)(13, "div", 9),
                t._UZ(14, "img", 10),
                t.qZA(),
                t.TgZ(15, "div", 11),
                t._UZ(16, "img", 12),
                t.qZA()()()()),
                2 & i &&
                  (t.xp6(4),
                  t.Oqu(null == n.data ? null : n.data.title),
                  t.xp6(2),
                  t.hij(" ", null == n.data ? null : n.data.brief, " "),
                  t.xp6(2),
                  t.hij(" ", null == n.data ? null : n.data.subTitle, " "),
                  t.xp6(2),
                  t.hij(" ", null == n.data ? null : n.data.description, " "),
                  t.xp6(1),
                  t.Q6J("className", "primary")("hasIcon", !1)(
                    "buttonLabel",
                    "Read More"
                  )("buttonTitleClassName", "section-internship-button-title")(
                    "routerLink",
                    t.DdM(11, B)
                  ),
                  t.xp6(3),
                  t.s9C("alt", null == n.data ? null : n.data.title),
                  t.Q6J(
                    "src",
                    null == n.data ? null : n.data.image_url,
                    t.LSH
                  ));
            },
            dependencies: [l.rH, h.r],
          }));
        }
        return s;
      })();
      var g = a(1669),
        f = a(1913);
      function F(s, r) {
        if ((1 & s && t._UZ(0, "app-course-card", 8), 2 & s)) {
          const e = t.oxw().$implicit;
          t.Q6J("course", e)("labelPosition", 1);
        }
      }
      function k(s, r) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 6),
            t.YNc(1, F, 1, 2, "app-course-card", 7),
            t.qZA()),
          2 & s)
        ) {
          const e = r.index;
          t.xp6(1), t.Q6J("ngIf", e < 3);
        }
      }
      let E = (() => {
        class s {
          constructor(e) {
            (this._courseService = e),
              (this.data = [
                {
                  id: 1,
                  rate: { rates_count: 2, rates_score: 2 },
                  brief:
                    "Luxor temple,Karnak Temple,Mummification Museum,Balloon flights",
                  title: "day trip",
                  category: { category_id: "1", category_name: "Luxor" },
                  image_url: "assets/Fe-kit/images/governorates/luxor.jpg",
                  date: "",
                  start_date: "15-1-2024",
                  end_date: "20-1-24",
                  instructors: [
                    {
                      id: 1,
                      name: "",
                      about: "",
                      image_url: "",
                      job_title: "",
                    },
                  ],
                },
                {
                  id: 1,
                  rate: { rates_count: 2, rates_score: 2 },
                  brief:
                    "Abu Simbel Temple,Shopping,Felucca,Sound and Light Show ",
                  title: "day trip",
                  category: { category_id: "2", category_name: "Aswan" },
                  image_url: "assets/Fe-kit/images/governorates/Aswan.jpg",
                  date: "",
                  start_date: "15-1-2024",
                  end_date: "20-1-24",
                  instructors: [
                    {
                      id: 1,
                      name: "",
                      about: "",
                      image_url: "",
                      job_title: "",
                    },
                  ],
                },
                {
                  id: 1,
                  rate: { rates_count: 2, rates_score: 2 },
                  brief:
                    "King Tutankhamun Museum,Naama bay,Ras Mohammed Reserve,Blue hole,Sunken ship",
                  title: "day trip",
                  category: {
                    category_id: "",
                    category_name: "Sharm el Sheikh",
                  },
                  image_url:
                    "../../../../assets/Fe-kit/images/governorates/sharm.jpg",
                  date: "",
                  start_date: "15-1-2024",
                  end_date: "20-1-24",
                  instructors: [
                    {
                      id: 1,
                      name: "",
                      about: "",
                      image_url: "",
                      job_title: "",
                    },
                  ],
                },
              ]),
              (this.hasError = !1);
          }
          ngOnInit() {}
          getLatestCourse() {
            this.subscription = this._courseService
              .getLatestCourse()
              .subscribe({
                next: (e) => {
                  e?.status && ((this.data = e.result), (this.hasError = !1));
                },
                error: (e) => {
                  this.hasError = !0;
                },
              });
          }
          ngOnDestroy() {}
          static #t = (this.ɵfac = function (i) {
            return new (i || s)(t.Y36(g.N));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: s,
            selectors: [["app-latest-courses"]],
            decls: 8,
            vars: 1,
            consts: [
              [1, "section-latest"],
              [1, "container"],
              [1, "section-title"],
              [1, "section-content"],
              [1, "card-container"],
              ["class", "card-item", 4, "ngFor", "ngForOf"],
              [1, "card-item"],
              [3, "course", "labelPosition", 4, "ngIf"],
              [3, "course", "labelPosition"],
            ],
            template: function (i, n) {
              1 & i &&
                (t.TgZ(0, "section", 0)(1, "div", 1)(2, "h4", 2),
                t._uU(3, "Latest Offers"),
                t.qZA(),
                t.TgZ(4, "h5", 3),
                t._uU(5, "Our latest offers"),
                t.qZA(),
                t.TgZ(6, "div", 4),
                t.YNc(7, k, 2, 1, "div", 5),
                t.qZA()()()),
                2 & i && (t.xp6(7), t.Q6J("ngForOf", n.data));
            },
            dependencies: [f.I, c.sg, c.O5],
          }));
        }
        return s;
      })();
      var v = a(513);
      function I(s, r) {
        if (
          (1 & s &&
            (t.TgZ(0, "swiper-slide", 6),
            t._UZ(1, "app-course-card", 7),
            t.qZA()),
          2 & s)
        ) {
          const e = r.$implicit;
          t.xp6(1),
            t.Q6J("course", e)("customCardClassName", "recommended-card")(
              "labelPosition",
              2
            )("imageContainerClassName", "image-container")(
              "textContainerClassName",
              "text-container"
            )("disableImageHover", !0);
        }
      }
      let J = (() => {
        class s {
          constructor(e) {
            (this._courseService = e), (this.data = []), (this.hasError = !1);
          }
          ngOnInit() {
            this.getRecommendedCourse();
          }
          getRecommendedCourse() {
            this.subscription = this._courseService
              .getLatestCourse()
              .subscribe({
                next: (e) => {
                  e?.status && ((this.data = e.result), (this.hasError = !1));
                },
                error: (e) => {
                  this.hasError = !0;
                },
              });
          }
          ngOnDestroy() {
            this?.subscription?.unsubscribe();
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || s)(t.Y36(g.N));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: s,
            selectors: [["app-recommended-courses"]],
            decls: 8,
            vars: 8,
            consts: [
              [1, "section-recommended"],
              [1, "container"],
              [1, "section-title"],
              [1, "section-content"],
              [
                3,
                "hasPagination",
                "hasNavigation",
                "buttonTypeClassName",
                "nextButtonClassName",
                "prevButtonClassName",
                "slidesPerView",
                "itemLength",
              ],
              ["lazy", "true", 4, "ngFor", "ngForOf"],
              ["lazy", "true"],
              [
                3,
                "course",
                "customCardClassName",
                "labelPosition",
                "imageContainerClassName",
                "textContainerClassName",
                "disableImageHover",
              ],
            ],
            template: function (i, n) {
              1 & i &&
                (t.TgZ(0, "section", 0)(1, "div", 1)(2, "h4", 2),
                t._uU(3, "Recommended Courses"),
                t.qZA(),
                t.TgZ(4, "h5", 3),
                t._uU(5, "Our Recommended seminars/courses"),
                t.qZA(),
                t.TgZ(6, "app-slider", 4),
                t.YNc(7, I, 2, 6, "swiper-slide", 5),
                t.qZA()()()),
                2 & i &&
                  (t.xp6(6),
                  t.Q6J("hasPagination", !1)("hasNavigation", !1)(
                    "buttonTypeClassName",
                    "primary"
                  )("nextButtonClassName", "slider-next-button")(
                    "prevButtonClassName",
                    "slider-prev-button"
                  )("slidesPerView", 1)("itemLength", n.data.length),
                  t.xp6(1),
                  t.Q6J("ngForOf", n.data));
            },
            dependencies: [f.I, v.P, c.sg],
          }));
        }
        return s;
      })();
      var O = a(7895),
        Q = a(290);
      const D = ["news-swiper-wrapper"],
        H = ["nextBtn"],
        q = ["backBtn"];
      function M(s, r) {
        if (
          (1 & s &&
            (t.TgZ(0, "swiper-slide", 16),
            t._UZ(1, "app-news-card", 17),
            t.qZA()),
          2 & s)
        ) {
          const e = r.$implicit;
          t.xp6(1), t.Q6J("newItem", e)("dimensionClass", "news-card-class");
        }
      }
      const b = function () {
          return ["secondary", "prev-button"];
        },
        C = function () {
          return ["secondary", "next-button"];
        },
        P = function () {
          return ["bootom-section-button", "news-button"];
        },
        R = function () {
          return ["/news"];
        };
      let Y = (() => {
        class s {
          constructor(e) {
            (this._newsService = e),
              (this.swiperWrapper =
                document.getElementsByClassName("news-slider")),
              (this.data = []),
              (this.hasError = !1);
          }
          ngOnInit() {
            (this.innerWidth = window.innerWidth), this.getLatestNews();
          }
          onResize(e) {
            this.innerWidth = window.innerWidth;
          }
          getLatestNews() {
            this.subscription = this._newsService.getLatestNews().subscribe({
              next: (e) => {
                e?.status && ((this.data = e.result), (this.hasError = !1));
              },
              error: (e) => {
                this.hasError = !0;
              },
            });
          }
          checkButtonStatus() {
            const e = setTimeout(() => {
              this.swiperWrapper &&
                this.nextBtn &&
                this.backBtn &&
                this.data.length &&
                ((this.nextBtn.nativeElement.disabled =
                  !!this.swiperWrapper[0].querySelector("swiper-container")
                    .swiper.isEnd),
                (this.backBtn.nativeElement.disabled =
                  !!this.swiperWrapper[0].querySelector("swiper-container")
                    .swiper.isBeginning)),
                clearTimeout(e);
            }, 200);
          }
          ngAfterViewInit() {
            this.checkButtonStatus(),
              this.nextBtn.nativeElement.addEventListener("click", () => {
                this.swiperWrapper[0]
                  .querySelector("swiper-container")
                  .swiper.slideNext(),
                  this.checkButtonStatus();
              }),
              this.backBtn.nativeElement.addEventListener("click", () => {
                this.swiperWrapper[0]
                  .querySelector("swiper-container")
                  .swiper.slidePrev(),
                  this.checkButtonStatus();
              });
          }
          ngOnDestroy() {
            this?.subscription?.unsubscribe();
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || s)(t.Y36(O.Y));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: s,
            selectors: [["app-latest-news"]],
            viewQuery: function (i, n) {
              if ((1 & i && (t.Gf(D, 5), t.Gf(H, 5), t.Gf(q, 5)), 2 & i)) {
                let o;
                t.iGM((o = t.CRH())) && (n.newsSwiperWrapper = o.first),
                  t.iGM((o = t.CRH())) && (n.nextBtn = o.first),
                  t.iGM((o = t.CRH())) && (n.backBtn = o.first);
              }
            },
            hostBindings: function (i, n) {
              1 & i &&
                t.NdJ(
                  "resize",
                  function (W) {
                    return n.onResize(W);
                  },
                  !1,
                  t.Jf7
                );
            },
            decls: 26,
            vars: 23,
            consts: [
              [1, "section-news"],
              [1, "section-container"],
              [1, "text-container"],
              [1, "section-title"],
              [1, "section-content"],
              [1, "button-navigation"],
              [3, "ngClass"],
              ["backBtn", ""],
              [1, "bi", "bi-arrow-left"],
              ["nextBtn", ""],
              [1, "bi", "bi-arrow-right"],
              [
                3,
                "className",
                "hasIcon",
                "buttonLabel",
                "buttonTitleClassName",
                "routerLink",
              ],
              [1, "slider-container"],
              [
                3,
                "hasPagination",
                "hasNavigation",
                "containerSlider",
                "hideCustomButtons",
                "slidesPerView",
                "itemLength",
              ],
              ["lazy", "true", 4, "ngFor", "ngForOf"],
              [1, "button-navigation", "button-navigation-mobile"],
              ["lazy", "true"],
              [3, "newItem", "dimensionClass"],
            ],
            template: function (i, n) {
              1 & i &&
                (t.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3),
                t._uU(4, "Latest News"),
                t.qZA(),
                t.TgZ(5, "h5", 4),
                t._uU(6, "Check our latest news and activities"),
                t.qZA(),
                t.TgZ(7, "div", 5)(8, "button", 6, 7),
                t._UZ(10, "i", 8),
                t.qZA(),
                t.TgZ(11, "button", 6, 9),
                t._UZ(13, "i", 10),
                t.qZA()(),
                t.TgZ(14, "div", 6),
                t._UZ(15, "app-button", 11),
                t.qZA()(),
                t.TgZ(16, "div", 12)(17, "app-slider", 13),
                t.YNc(18, M, 2, 2, "swiper-slide", 14),
                t.qZA(),
                t.TgZ(19, "div", 15)(20, "button", 6, 7),
                t._UZ(22, "i", 8),
                t.qZA(),
                t.TgZ(23, "button", 6, 9),
                t._UZ(25, "i", 10),
                t.qZA()()()()()),
                2 & i &&
                  (t.xp6(8),
                  t.Q6J("ngClass", t.DdM(17, b)),
                  t.xp6(3),
                  t.Q6J("ngClass", t.DdM(18, C)),
                  t.xp6(3),
                  t.Q6J("ngClass", t.DdM(19, P)),
                  t.xp6(1),
                  t.Q6J("className", "primary")("hasIcon", !1)(
                    "buttonLabel",
                    "Check all News"
                  )("buttonTitleClassName", "button-title")(
                    "routerLink",
                    t.DdM(20, R)
                  ),
                  t.xp6(2),
                  t.Q6J("hasPagination", !1)("hasNavigation", !1)(
                    "containerSlider",
                    "news-slider"
                  )("hideCustomButtons", !0)(
                    "slidesPerView",
                    n.innerWidth <= 1023 ? 1 : 2
                  )("itemLength", n.data.length),
                  t.xp6(1),
                  t.Q6J("ngForOf", n.data),
                  t.xp6(2),
                  t.Q6J("ngClass", t.DdM(21, b)),
                  t.xp6(3),
                  t.Q6J("ngClass", t.DdM(22, C)));
            },
            dependencies: [l.rH, h.r, Q.H, v.P, c.mk, c.sg],
          }));
        }
        return s;
      })();
      const j = [
        {
          path: "",
          component: (() => {
            class s {
              constructor(e) {
                (this._homeService = e),
                  (this.isActive = !1),
                  (this.hasError = !1),
                  (this.data = [
                    {
                      id: 1,
                      date: "",
                      brief:
                        "Karnak or the Karnak Temple Complex, which is known as the Karnak Temple, is a group of temples, buildings and columns",
                      title: "Karnak Temple,Luxor",
                      image_url:
                        "../../../../assets//Fe-kit/images/governorates/luxor.jpg",
                      link: {
                        url: "",
                        title: "Explore more",
                        is_external_link: !1,
                      },
                    },
                    {
                      id: 2,
                      date: "",
                      brief:
                        "The Abu Simbel Temples is the most famous in all of Egypt after the Giza Pyramids,dedicated to Ramses II and his wife. Know more about the twin temples!",
                      title: "Abu Simbel,Aswan",
                      image_url:
                        "../../../../assets//Fe-kit/images/governorates/aswan2.jpg",
                      link: {
                        url: "",
                        title: "Explore more",
                        is_external_link: !1,
                      },
                    },
                  ]);
              }
              ngOnInit() {}
              getCarouselData() {
                this.subscription = this._homeService.getCarousel().subscribe({
                  next: (e) => {
                    e?.status && ((this.data = e.result), (this.hasError = !1));
                  },
                  error: (e) => {
                    this.hasError = !0;
                  },
                });
              }
              ngOnDestroy() {
                this?.subscription?.unsubscribe();
              }
              static #t = (this.ɵfac = function (i) {
                return new (i || s)(t.Y36(w));
              });
              static #e = (this.ɵcmp = t.Xpm({
                type: s,
                selectors: [["app-home"]],
                decls: 7,
                vars: 1,
                consts: [
                  ["id", "carousel", 1, "section-carousel"],
                  [3, "photos"],
                ],
                template: function (i, n) {
                  1 & i &&
                    (t.TgZ(0, "section", 0),
                    t._UZ(1, "app-carousel", 1),
                    t.qZA(),
                    t._UZ(2, "app-departments")(3, "app-internship")(
                      4,
                      "app-latest-courses"
                    )(5, "app-recommended-courses")(6, "app-latest-news")),
                    2 & i && (t.xp6(1), t.Q6J("photos", n.data));
                },
                dependencies: [_.F, A, S, E, J, Y],
              }));
            }
            return s;
          })(),
        },
      ];
      let z = (() => {
          class s {
            static #t = (this.ɵfac = function (i) {
              return new (i || s)();
            });
            static #e = (this.ɵmod = t.oAB({ type: s }));
            static #s = (this.ɵinj = t.cJS({
              imports: [l.Bz.forChild(j), l.Bz],
            }));
          }
          return s;
        })(),
        G = (() => {
          class s {
            static #t = (this.ɵfac = function (i) {
              return new (i || s)();
            });
            static #e = (this.ɵmod = t.oAB({ type: s }));
            static #s = (this.ɵinj = t.cJS({ imports: [z, Z.m] }));
          }
          return s;
        })();
    },
  },
]);
