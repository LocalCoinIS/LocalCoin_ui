(window.webpackJsonp = window.webpackJsonp || []).push([
    [33],
    {
        120: function(e, t, a) {
            "use strict";
            var s = a(0),
                n = a.n(s),
                r = a(1),
                i = a.n(r),
                o = a(4),
                l = a(6),
                c = a(12),
                u = a(3),
                p = a.n(u),
                m = a(172),
                d = a(17),
                h = a(7),
                _ = a.n(h),
                b = a(9),
                g = a.n(b),
                f = a(49),
                y = a(2),
                E = a.n(y),
                v = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            function k(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function w(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function C(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var x = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        w(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    C(t, n.a.Component),
                    v(t, [
                        {
                            key: "render",
                            value: function() {
                                return 0 !== this.props.assets.length &&
                                    this.props.value
                                    ? n.a.createElement(m.a, {
                                          entries: this.props.assets
                                              .map(function(e) {
                                                  return e && e.get("symbol");
                                              })
                                              .filter(function(e) {
                                                  return !!e;
                                              }),
                                          values: this.props.assets.reduce(
                                              function(e, t) {
                                                  return (
                                                      t &&
                                                          t.get("symbol") &&
                                                          (e[
                                                              t.get("symbol")
                                                          ] = t),
                                                      e
                                                  );
                                              },
                                              {}
                                          ),
                                          singleEntry: this.props.assets[0]
                                              ? n.a.createElement(d.a, {
                                                    asset: this.props.assets[0].get(
                                                        "id"
                                                    ),
                                                    amount: 0,
                                                    hide_amount: !0
                                                })
                                              : null,
                                          value: "",
                                          onChange: this.props.onChange
                                      })
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (x.propTypes = {value: E.a.string, onChange: E.a.func}),
                (x = Object(f.a)(x, {asList: !0}));
            var N = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        w(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    C(t, n.a.Component),
                    v(t, [
                        {
                            key: "getAsset",
                            value: function() {
                                return this.props.asset;
                            }
                        },
                        {
                            key: "getError",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props.assetInput,
                                    t = this.props.error;
                                return (
                                    t ||
                                        !e ||
                                        this.getNameType(e) ||
                                        (t = p.a.translate(
                                            "explorer.asset.invalid",
                                            {name: e}
                                        )),
                                    t
                                );
                            }
                        },
                        {
                            key: "getNameType",
                            value: function(e) {
                                return e
                                    ? o.d.is_valid_symbol_error(e, !0)
                                        ? null
                                        : "symbol"
                                    : null;
                            }
                        },
                        {
                            key: "onInputChanged",
                            value: function(e) {
                                var t = e.target.value
                                    .trim()
                                    .substr(0, 16)
                                    .toUpperCase();
                                this.props.onChange &&
                                    t !== this.props.assetInput &&
                                    this.props.onChange(t);
                            }
                        },
                        {
                            key: "onKeyDown",
                            value: function(e) {
                                13 === e.keyCode &&
                                    (this.onFound(e), this.onAction(e));
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.props.onFound &&
                                    this.props.asset &&
                                    this.props.onFound(this.props.asset);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.props.onFound &&
                                    e.asset !== this.props.asset &&
                                    this.props.onFound(e.asset);
                            }
                        },
                        {
                            key: "onFound",
                            value: function(e) {
                                e.preventDefault(),
                                    !this.props.onFound ||
                                        this.getError() ||
                                        this.props.disableActionButton ||
                                        (this.props.asset &&
                                            this.props.onFound(
                                                this.props.asset
                                            ));
                            }
                        },
                        {
                            key: "onAssetSelect",
                            value: function(e) {
                                e &&
                                    (this.props.onFound(e),
                                    this.props.onChange(e.get("symbol")));
                            }
                        },
                        {
                            key: "onAction",
                            value: function(e) {
                                e.preventDefault(),
                                    !this.props.onAction ||
                                        this.getError() ||
                                        this.props.disableActionButton ||
                                        (this.props.asset &&
                                            this.props.onAction(
                                                this.props.asset
                                            ));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.disabled,
                                    a = e.noLabel,
                                    s = this.getError(),
                                    r = void 0;
                                t ||
                                    (this.props.asset
                                        ? (r = this.props.asset.get("symbol"))
                                        : !s &&
                                          this.props.assetInput &&
                                          (s = p.a.translate(
                                              "explorer.asset.not_found",
                                              {name: this.props.assetInput}
                                          )));
                                var o = g()("button", {
                                    disabled:
                                        !this.props.asset ||
                                        s ||
                                        this.props.disableActionButton
                                });
                                return n.a.createElement(
                                    "div",
                                    {
                                        className: "asset-selector",
                                        style: this.props.style
                                    },
                                    n.a.createElement(
                                        "div",
                                        null,
                                        n.a.createElement(
                                            "div",
                                            {className: "header-area"},
                                            s || a
                                                ? null
                                                : n.a.createElement(
                                                      "label",
                                                      {
                                                          className:
                                                              "right-label"
                                                      },
                                                      "  ",
                                                      n.a.createElement(
                                                          "span",
                                                          null,
                                                          r
                                                      )
                                                  ),
                                            n.a.createElement(i.a, {
                                                component: "label",
                                                content: this.props.label
                                            })
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {className: "input-area"},
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                n.a.createElement("input", {
                                                    style: this.props
                                                        .inputStyle,
                                                    disabled: this.props
                                                        .disabled,
                                                    type: "text",
                                                    value:
                                                        this.props.assetInput ||
                                                        "",
                                                    placeholder:
                                                        this.props
                                                            .placeholder ||
                                                        p.a.translate(
                                                            "explorer.assets.symbol"
                                                        ),
                                                    ref: "user_input",
                                                    onChange: this.onInputChanged.bind(
                                                        this
                                                    ),
                                                    onKeyDown: this.onKeyDown.bind(
                                                        this
                                                    ),
                                                    tabIndex: this.props
                                                        .tabIndex
                                                }),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    this.props.asset
                                                        ? n.a.createElement(x, {
                                                              ref: this.props
                                                                  .refCallback,
                                                              value: this.props.asset.get(
                                                                  "symbol"
                                                              ),
                                                              assets: _.a.List(
                                                                  this.props
                                                                      .assets
                                                              ),
                                                              onChange: this.onAssetSelect.bind(
                                                                  this
                                                              )
                                                          })
                                                        : null
                                                ),
                                                this.props.children,
                                                this.props.onAction
                                                    ? n.a.createElement(
                                                          "button",
                                                          {
                                                              className: o,
                                                              onClick: this.onAction.bind(
                                                                  this
                                                              )
                                                          },
                                                          n.a.createElement(
                                                              i.a,
                                                              {
                                                                  content: this
                                                                      .props
                                                                      .action_label
                                                              }
                                                          )
                                                      )
                                                    : null
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className: "error-area",
                                                style: {paddingBottom: "10px"}
                                            },
                                            n.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        wordBreak: "break-all"
                                                    }
                                                },
                                                s
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (N.propTypes = {
                label: E.a.string,
                error: E.a.string,
                placeholder: E.a.string,
                onChange: E.a.func,
                onFound: E.a.func,
                assetInput: E.a.string,
                asset: l.a.ChainAsset,
                tabIndex: E.a.number,
                disableActionButton: E.a.string
            }),
                (N.defaultProps = {disabled: !1}),
                (t.a = Object(c.a)(N));
        },
        347: function(e, t, a) {
            "use strict";
            var s = a(0),
                n = a.n(s),
                r = a(2),
                i = a.n(r),
                o = a(17),
                l = a(6),
                c = a(12),
                u = a(36),
                p = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            var m = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, n.a.Component),
                    p(t, [
                        {
                            key: "getFee",
                            value: function() {
                                return Object(u.c)(
                                    this.props.opType,
                                    this.props.options,
                                    this.props.globalObject
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.opType,
                                    a = e.options,
                                    s = e.globalObject;
                                if (!t || !a || !s) return null;
                                var r = Object(u.c)(t, a, s);
                                return n.a.createElement(o.a, {
                                    amount: r,
                                    asset: "1.3.0"
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            (m.propTypes = {
                globalObject: l.a.ChainObject.isRequired,
                opType: i.a.string,
                options: i.a.array
            }),
                (m.defaultProps = {globalObject: "2.0.0", options: []}),
                (t.a = Object(c.a)(m));
        },
        349: function(e, t, a) {
            "use strict";
            var s = a(0),
                n = a.n(s),
                r = (a(9), a(1)),
                i = a.n(r),
                o = a(3),
                l = a.n(o),
                c = a(101),
                u = a(43),
                p = a(17),
                m = a(347),
                d = a(77),
                h = a(49),
                _ = a(4);
            var b = function(e, t) {
                    var a =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : function(e) {
                                  return e;
                              };
                    return function(s) {
                        return e.setState(
                            (function(e, t, a) {
                                return (
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = a),
                                    e
                                );
                            })({}, t, a(s))
                        );
                    };
                },
                g = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return f.call(a), (a.state = a.initialState()), a;
                    }
                    return (
                        (function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                        typeof t
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                t &&
                                    (Object.setPrototypeOf
                                        ? Object.setPrototypeOf(e, t)
                                        : (e.__proto__ = t));
                        })(t, n.a.Component),
                        t
                    );
                })(),
                f = function() {
                    var e = this;
                    (this.onAccountNameChanged = b(this, "funderAccountName")),
                        (this.onAccountChanged = b(this, "newFunderAccount")),
                        (this.onPoolInput = b(
                            this,
                            "fundPoolAmount",
                            (function(e) {
                                return function(t) {
                                    return t[e];
                                };
                            })("amount")
                        )),
                        (this.onFundPool = function() {
                            return d.a.fundPool(
                                e.state.newFunderAccount
                                    ? e.state.newFunderAccount.get("id")
                                    : null,
                                e.props.core,
                                e.props.asset,
                                e.state.fundPoolAmount.replace(/,/g, "")
                            );
                        }),
                        (this.reset = function() {
                            e.setState(e.initialState());
                        }),
                        (this.initialState = function() {
                            return {
                                funderAccountName: e.props.funderAccountName,
                                fundPoolAmount: 0
                            };
                        }),
                        (this.render = function() {
                            var t = e.props,
                                a = e.state,
                                s = e.onPoolInput,
                                r = e.onFundPool,
                                o = e.reset,
                                d = e.onAccountNameChanged,
                                h = e.onAccountChanged,
                                b = t.asset,
                                g = t.core,
                                f = t.hideBalance,
                                y = t.getDynamicObject,
                                E = a.funderAccountName,
                                v = a.fundPoolAmount,
                                k = a.newFunderAccount,
                                w = null;
                            f || (w = y(b.get("dynamic_asset_data_id")));
                            var C = g.get("id") || "1.3.0",
                                x = 0;
                            if (k) {
                                var N = k.getIn(["balances", C]);
                                if (N) {
                                    var A = _.b.getObject(N);
                                    A && (x = A.get("balance"));
                                }
                            }
                            var O = n.a.createElement(
                                "span",
                                null,
                                n.a.createElement(i.a, {
                                    component: "span",
                                    content: "transfer.available"
                                }),
                                ": ",
                                n.a.createElement(p.a, {amount: x, asset: C})
                            );
                            return n.a.createElement(
                                "div",
                                null,
                                n.a.createElement(i.a, {
                                    component: "p",
                                    content:
                                        "explorer.asset.fee_pool.fund_text",
                                    asset: b.get("symbol"),
                                    core: g.get("symbol")
                                }),
                                f ||
                                    n.a.createElement(
                                        "div",
                                        {style: {paddingBottom: "1.5rem"}},
                                        n.a.createElement(i.a, {
                                            content:
                                                "explorer.asset.fee_pool.pool_balance"
                                        }),
                                        n.a.createElement("span", null, ": "),
                                        w
                                            ? n.a.createElement(p.a, {
                                                  amount: w.get("fee_pool"),
                                                  asset: C
                                              })
                                            : null
                                    ),
                                n.a.createElement(c.a, {
                                    label: "transaction.funding_account",
                                    accountName: E,
                                    onChange: d,
                                    onAccountChanged: h,
                                    account: E,
                                    error: null,
                                    tabIndex: 1
                                }),
                                n.a.createElement(u.a, {
                                    label: "transfer.amount",
                                    display_balance: O,
                                    amount: v,
                                    onChange: s,
                                    asset: C,
                                    assets: [C],
                                    placeholder: "0.0",
                                    tabIndex: 2,
                                    style: {width: "100%", paddingTop: 16}
                                }),
                                n.a.createElement(
                                    "div",
                                    {style: {paddingTop: "1rem"}},
                                    n.a.createElement(
                                        "button",
                                        {
                                            className: "btn large inverted",
                                            disabled: v <= 0,
                                            onClick: r
                                        },
                                        l.a.translate(
                                            "transaction.trxTypes.asset_fund_fee_pool"
                                        )
                                    ),
                                    n.a.createElement(
                                        "button",
                                        {
                                            className: "btn large outline",
                                            onClick: o
                                        },
                                        l.a.translate("account.perm.reset")
                                    ),
                                    n.a.createElement("br", null),
                                    n.a.createElement("br", null),
                                    n.a.createElement(
                                        "p",
                                        null,
                                        n.a.createElement(i.a, {
                                            content:
                                                "account.user_issued_assets.approx_fee"
                                        }),
                                        ": ",
                                        n.a.createElement(m.a, {
                                            opType: "asset_fund_fee_pool"
                                        })
                                    ),
                                    n.a.createElement("hr", null)
                                )
                            );
                        });
                };
            (g = Object(h.a)(g, {
                propNames: ["asset", "core"],
                defaultProps: {core: "1.3.0"},
                withDynamic: !0
            })),
                (t.a = g);
        },
        4985: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(0),
                n = a.n(s),
                r = a(1),
                i = a.n(r),
                o = a(9),
                l = a.n(o),
                c = a(77),
                u = a(69),
                p = a(5),
                m = a(4),
                d = a(17),
                h = a(347),
                _ = a(3),
                b = a.n(_),
                g = a(6),
                f = a(12),
                y = a(49),
                E = a(43),
                v = a(64),
                k = a(101),
                w = a(120),
                C = a(83),
                x = a.n(C),
                N = a(47),
                A = a(72),
                O = a(82),
                S = a.n(O),
                P = a(36),
                T = a(2),
                I = a.n(T),
                B = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            function j(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function F(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function q(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var R = new x.a(S.a.GRAPHENE_MAX_SHARE_SUPPLY),
                U = (function(e) {
                    function t(e) {
                        j(this, t);
                        var a = F(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {
                                backingAsset: e.backingAsset.get("symbol"),
                                error: null
                            }),
                            a
                        );
                    }
                    return (
                        q(t, n.a.Component),
                        B(t, [
                            {
                                key: "_onInputBackingAsset",
                                value: function(e) {
                                    this.setState({
                                        backingAsset: e.toUpperCase(),
                                        error: null
                                    });
                                }
                            },
                            {
                                key: "_onFoundBackingAsset",
                                value: function(e) {
                                    e &&
                                        ("1.3.0" === e.get("id") ||
                                        (e.get("bitasset_data_id") &&
                                            !e.getIn([
                                                "bitasset",
                                                "is_prediction_market"
                                            ]))
                                            ? e.get("precision") !==
                                              parseInt(
                                                  this.props.assetPrecision,
                                                  10
                                              )
                                                ? this.setState({
                                                      error: b.a.translate(
                                                          "account.user_issued_assets.error_precision",
                                                          {
                                                              asset: this.props
                                                                  .assetSymbol
                                                          }
                                                      )
                                                  })
                                                : this.props.onUpdate(
                                                      "short_backing_asset",
                                                      e.get("id")
                                                  )
                                            : this.setState({
                                                  error: b.a.translate(
                                                      "account.user_issued_assets.error_invalid"
                                                  )
                                              }));
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.bitasset_opts,
                                        t = this.state.error;
                                    return n.a.createElement(
                                        "div",
                                        {className: "small-12 grid-content"},
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.feed_lifetime_sec"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value: e.feed_lifetime_sec / 60,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "feed_lifetime_sec"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.minimum_feeds"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value: e.minimum_feeds,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "minimum_feeds"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.force_settlement_delay_sec"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value:
                                                    e.force_settlement_delay_sec /
                                                    60,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "force_settlement_delay_sec"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.force_settlement_offset_percent"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value:
                                                    e.force_settlement_offset_percent /
                                                    S.a.GRAPHENE_1_PERCENT,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "force_settlement_offset_percent"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.maximum_force_settlement_volume"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value:
                                                    e.maximum_force_settlement_volume /
                                                    S.a.GRAPHENE_1_PERCENT,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "maximum_force_settlement_volume"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block no-margin small-12"
                                            },
                                            n.a.createElement(w.a, {
                                                label:
                                                    "account.user_issued_assets.backing",
                                                onChange: this._onInputBackingAsset.bind(
                                                    this
                                                ),
                                                asset: this.state.backingAsset,
                                                assetInput: this.state
                                                    .backingAsset,
                                                tabIndex: 1,
                                                style: {
                                                    width: "100%",
                                                    paddingRight: "10px"
                                                },
                                                onFound: this._onFoundBackingAsset.bind(
                                                    this
                                                )
                                            }),
                                            t
                                                ? n.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "content-block has-error"
                                                      },
                                                      t
                                                  )
                                                : null
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (U.propTypes = {
                backingAsset: g.a.ChainAsset.isRequired,
                isUpdate: I.a.bool
            }),
                (U.defaultProps = {isUpdate: !1}),
                (U = Object(f.a)(U));
            var J = (function(e) {
                function t(e) {
                    j(this, t);
                    var a = F(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (a.state = a.resetState(e)), a;
                }
                return (
                    q(t, n.a.Component),
                    B(t, [
                        {
                            key: "resetState",
                            value: function(e) {
                                p.a.get_asset_precision(4),
                                    p.a.get_asset_precision(
                                        e.core.get("precision")
                                    );
                                var t = this._getPermissions({isBitAsset: !1}),
                                    a = t.flagBooleans,
                                    s = t.permissionBooleans;
                                m.b.getAsset("1.3.0").get("symbol");
                                return {
                                    update: {
                                        symbol: "",
                                        precision: 4,
                                        max_supply: 1e5,
                                        max_market_fee: 0,
                                        market_fee_percent: 0,
                                        description: {main: ""}
                                    },
                                    errors: {max_supply: null},
                                    isValid: !0,
                                    flagBooleans: a,
                                    permissionBooleans: s,
                                    isBitAsset: !1,
                                    is_prediction_market: !1,
                                    core_exchange_rate: {
                                        quote: {asset_id: null, amount: 1},
                                        base: {asset_id: "1.3.0", amount: 1}
                                    },
                                    bitasset_opts: {
                                        feed_lifetime_sec: 86400,
                                        minimum_feeds: 7,
                                        force_settlement_delay_sec: 86400,
                                        force_settlement_offset_percent:
                                            1 * S.a.GRAPHENE_1_PERCENT,
                                        maximum_force_settlement_volume:
                                            20 * S.a.GRAPHENE_1_PERCENT,
                                        short_backing_asset: "1.3.0"
                                    },
                                    marketInput: ""
                                };
                            }
                        },
                        {
                            key: "_getPermissions",
                            value: function(e) {
                                return {
                                    flagBooleans: N.a.getFlagBooleans(
                                        0,
                                        e.isBitAsset
                                    ),
                                    permissionBooleans: N.a.getFlagBooleans(
                                        "all",
                                        e.isBitAsset
                                    )
                                };
                            }
                        },
                        {
                            key: "_createAsset",
                            value: function(e) {
                                e.preventDefault();
                                var t = this.state,
                                    a = t.update,
                                    s = t.flagBooleans,
                                    n = t.permissionBooleans,
                                    r = t.core_exchange_rate,
                                    i = t.isBitAsset,
                                    o = t.is_prediction_market,
                                    l = t.bitasset_opts,
                                    u = this.props.account,
                                    p = N.a.getFlags(s, i),
                                    m = N.a.getPermissions(n, i);
                                this.state.marketInput !==
                                    a.description.market &&
                                    (a.description.market = "");
                                var d = JSON.stringify(a.description);
                                c.a
                                    .createAsset(
                                        u.get("id"),
                                        a,
                                        p,
                                        m,
                                        r,
                                        i,
                                        o,
                                        l,
                                        d
                                    )
                                    .then(function(e) {
                                        console.log(
                                            "... AssetActions.createAsset(account_id, update)",
                                            u.get("id"),
                                            a,
                                            p,
                                            m
                                        );
                                    });
                            }
                        },
                        {
                            key: "_hasChanged",
                            value: function() {
                                return !p.a.are_equal_shallow(
                                    this.state,
                                    this.resetState(this.props)
                                );
                            }
                        },
                        {
                            key: "_reset",
                            value: function(e) {
                                e.preventDefault(),
                                    this.setState(this.resetState(this.props));
                            }
                        },
                        {
                            key: "_forcePositive",
                            value: function(e) {
                                return parseFloat(e) < 0 ? "0" : e;
                            }
                        },
                        {
                            key: "_onUpdateDescription",
                            value: function(e, t) {
                                var a = this.state.update,
                                    s = !0;
                                switch (e) {
                                    case "condition":
                                        if (t.target.value.length > 60)
                                            return void (s = !1);
                                        a.description[e] = t.target.value;
                                        break;
                                    case "short_name":
                                        if (t.target.value.length > 32)
                                            return void (s = !1);
                                        a.description[e] = t.target.value;
                                        break;
                                    case "market":
                                        a.description[e] = t;
                                        break;
                                    case "visible":
                                        a.description[e] = !a.description[e];
                                        break;
                                    default:
                                        a.description[e] = t.target.value;
                                }
                                s &&
                                    (this.forceUpdate(),
                                    this._validateEditFields(a));
                            }
                        },
                        {
                            key: "onChangeBitAssetOpts",
                            value: function(e, t) {
                                var a = this.state.bitasset_opts;
                                switch (e) {
                                    case "force_settlement_offset_percent":
                                    case "maximum_force_settlement_volume":
                                        a[e] =
                                            parseFloat(t.target.value) *
                                            S.a.GRAPHENE_1_PERCENT;
                                        break;
                                    case "minimum_feeds":
                                        a[e] = parseInt(t.target.value, 10);
                                        break;
                                    case "feed_lifetime_sec":
                                    case "force_settlement_delay_sec":
                                        console.log(
                                            t.target.value,
                                            parseInt(
                                                60 * parseFloat(t.target.value),
                                                10
                                            )
                                        ),
                                            (a[e] = parseInt(
                                                60 * parseFloat(t.target.value),
                                                10
                                            ));
                                        break;
                                    case "short_backing_asset":
                                        a[e] = t;
                                        break;
                                    default:
                                        a[e] = t.target.value;
                                }
                                this.forceUpdate();
                            }
                        },
                        {
                            key: "_onUpdateInput",
                            value: function(e, t) {
                                var a = this.state,
                                    s = a.update,
                                    n = a.errors,
                                    r = !1,
                                    i = p.a.get_asset_precision(
                                        this.state.update.precision
                                    ),
                                    o = t.target,
                                    l = o.selectionStart,
                                    c = o.value;
                                switch (e) {
                                    case "market_fee_percent":
                                        s[e] = this._forcePositive(o.value);
                                        break;
                                    case "max_market_fee":
                                        if (new x.a(c).times(i).gt(R))
                                            return (
                                                (n.max_market_fee =
                                                    "The number you tried to enter is too large"),
                                                this.setState({errors: n})
                                            );
                                        (o.value = p.a.limitByPrecision(
                                            o.value,
                                            this.state.update.precision
                                        )),
                                            (s[e] = o.value);
                                        break;
                                    case "precision":
                                        s[e] = this._forcePositive(o.value);
                                        break;
                                    case "max_supply":
                                        (r = !0),
                                            new RegExp(/[[:digit:]]/).test(
                                                o.value
                                            ) ||
                                                (o.value = o.value.replace(
                                                    /[^0-9.]/g,
                                                    ""
                                                )),
                                            "." == o.value.charAt(0) &&
                                                (o.value = "0."),
                                            o.value.charAt(o.value.length) !=
                                                o.value.search(".") &&
                                                o.value.substr(1),
                                            (o.value = p.a.limitByPrecision(
                                                o.value,
                                                this.state.update.precision
                                            )),
                                            (s[e] = o.value);
                                        break;
                                    case "symbol":
                                        r = !0;
                                        var u = o.value.toUpperCase(),
                                            d = new RegExp("^[.A-Z]+$");
                                        if ("" !== u && !d.test(u)) break;
                                        m.b.getAsset(u),
                                            (s[e] = this._forcePositive(u));
                                        break;
                                    default:
                                        s[e] = o.value;
                                }
                                this.setState({update: s}, function() {
                                    if (r) {
                                        var t = l - (c.length - s[e].length);
                                        o.setSelectionRange(t, t);
                                    }
                                }),
                                    this._validateEditFields(s);
                            }
                        },
                        {
                            key: "_validateEditFields",
                            value: function(e) {
                                var t = {max_supply: null};
                                (t.symbol = m.d.is_valid_symbol_error(
                                    e.symbol
                                )),
                                    m.b.getAsset(e.symbol) &&
                                        (t.symbol = b.a.translate(
                                            "account.user_issued_assets.exists"
                                        ));
                                try {
                                    t.max_supply =
                                        e.max_supply <= 0
                                            ? b.a.translate(
                                                  "account.user_issued_assets.max_positive"
                                              )
                                            : new x.a(e.max_supply)
                                                  .times(
                                                      Math.pow(10, e.precision)
                                                  )
                                                  .gt(R)
                                                ? b.a.translate(
                                                      "account.user_issued_assets.too_large"
                                                  )
                                                : null;
                                } catch (e) {
                                    console.log("err:", e),
                                        (t.max_supply = b.a.translate(
                                            "account.user_issued_assets.too_large"
                                        ));
                                }
                                var a = !t.symbol && !t.max_supply;
                                this.setState({isValid: a, errors: t});
                            }
                        },
                        {
                            key: "_onFlagChange",
                            value: function(e) {
                                var t = this.state.flagBooleans;
                                (t[e] = !t[e]),
                                    this.setState({flagBooleans: t});
                            }
                        },
                        {
                            key: "_onPermissionChange",
                            value: function(e) {
                                var t = this.state.permissionBooleans;
                                (t[e] = !t[e]),
                                    this.setState({permissionBooleans: t});
                            }
                        },
                        {
                            key: "_onInputCoreAsset",
                            value: function(e, t) {
                                "quote" === e
                                    ? this.setState({quoteAssetInput: t})
                                    : "base" === e &&
                                      this.setState({baseAssetInput: t});
                            }
                        },
                        {
                            key: "_onFoundCoreAsset",
                            value: function(e, t) {
                                if (t) {
                                    var a = this.state.core_exchange_rate;
                                    (a[e].asset_id = t.get("id")),
                                        this.setState({core_exchange_rate: a}),
                                        this._validateEditFields({
                                            max_supply: this.state.max_supply,
                                            core_exchange_rate: a
                                        });
                                }
                            }
                        },
                        {
                            key: "_onInputMarket",
                            value: function(e) {
                                this.setState({marketInput: e});
                            }
                        },
                        {
                            key: "_onFoundMarketAsset",
                            value: function(e) {
                                e &&
                                    this._onUpdateDescription(
                                        "market",
                                        e.get("symbol")
                                    );
                            }
                        },
                        {
                            key: "_onCoreRateChange",
                            value: function(e, t) {
                                var a = void 0,
                                    s = void 0;
                                if ("quote" === e)
                                    (a = p.a.limitByPrecision(
                                        t.target.value,
                                        this.state.update.precision
                                    )),
                                        (s = null);
                                else {
                                    if (!(t && "amount" in t)) return;
                                    (a =
                                        "" == t.amount
                                            ? "0"
                                            : p.a.limitByPrecision(
                                                  t.amount
                                                      .toString()
                                                      .replace(/,/g, ""),
                                                  this.props.core.get(
                                                      "precision"
                                                  )
                                              )),
                                        (s = t.asset.get("id"));
                                }
                                (this.state.core_exchange_rate[e] = {
                                    amount: a,
                                    asset_id: s
                                }),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onToggleBitAsset",
                            value: function() {
                                this.state.update;
                                (this.state.isBitAsset = !this.state
                                    .isBitAsset),
                                    this.state.isBitAsset ||
                                        (this.state.is_prediction_market = !1);
                                var e = this._getPermissions(this.state),
                                    t = e.flagBooleans,
                                    a = e.permissionBooleans;
                                (this.state.flagBooleans = t),
                                    (this.state.permissionBooleans = a),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onTogglePM",
                            value: function() {
                                (this.state.is_prediction_market = !this.state
                                    .is_prediction_market),
                                    (this.state.update.precision = this.props.core.get(
                                        "precision"
                                    )),
                                    (this.state.core_exchange_rate.base.asset_id = this.props.core.get(
                                        "id"
                                    )),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.globalObject,
                                    a = e.core,
                                    s = this.state,
                                    r = s.errors,
                                    o = s.isValid,
                                    c = s.update,
                                    m = s.flagBooleans,
                                    h = s.permissionBooleans,
                                    _ = s.core_exchange_rate,
                                    g = s.is_prediction_market,
                                    f = s.isBitAsset,
                                    y = s.bitasset_opts,
                                    v = c.symbol.length,
                                    k = "N/A";
                                3 === v
                                    ? (k = n.a.createElement(d.a, {
                                          amount: Object(P.c)(
                                              "asset_create",
                                              ["symbol3"],
                                              t
                                          ),
                                          asset: "1.3.0"
                                      }))
                                    : 4 === v
                                        ? (k = n.a.createElement(d.a, {
                                              amount: Object(P.c)(
                                                  "asset_create",
                                                  ["symbol4"],
                                                  t
                                              ),
                                              asset: "1.3.0"
                                          }))
                                        : v > 4 &&
                                          (k = n.a.createElement(d.a, {
                                              amount: Object(P.c)(
                                                  "asset_create",
                                                  ["long_symbol"],
                                                  t
                                              ),
                                              asset: "1.3.0"
                                          }));
                                var C = [],
                                    x = function(e, t, a) {
                                        return n.a.createElement(
                                            "table",
                                            {
                                                key: "table_" + e,
                                                className: "table"
                                            },
                                            n.a.createElement(
                                                "tbody",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    null,
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none",
                                                                width: "80%"
                                                            }
                                                        },
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "account.user_issued_assets." +
                                                                e
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "switch",
                                                                style: {
                                                                    marginBottom:
                                                                        "10px"
                                                                },
                                                                onClick: t
                                                            },
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "checkbox",
                                                                    checked: a
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        );
                                    };
                                for (var N in h)
                                    h[N] &&
                                        "charge_market_fee" !== N &&
                                        C.push(
                                            x(
                                                N,
                                                this._onFlagChange.bind(
                                                    this,
                                                    N
                                                ),
                                                m[N]
                                            )
                                        );
                                C.push(
                                    x(
                                        "visible",
                                        this._onUpdateDescription.bind(
                                            this,
                                            "visible"
                                        ),
                                        !c.description.visible &&
                                            !1 === c.description.visible
                                    )
                                );
                                var O = [];
                                for (var S in h)
                                    O.push(
                                        n.a.createElement(
                                            "table",
                                            {
                                                key: "table_" + S,
                                                className: "table"
                                            },
                                            n.a.createElement(
                                                "tbody",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    null,
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none",
                                                                width: "80%"
                                                            }
                                                        },
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "account.user_issued_assets." +
                                                                S
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "switch",
                                                                style: {
                                                                    marginBottom:
                                                                        "10px"
                                                                },
                                                                onClick: this._onPermissionChange.bind(
                                                                    this,
                                                                    S
                                                                )
                                                            },
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "checkbox",
                                                                    checked:
                                                                        h[S],
                                                                    onChange: function() {}
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                var T = n.a.createElement(
                                    "div",
                                    null,
                                    n.a.createElement(
                                        "button",
                                        {
                                            className: "button",
                                            onClick: this._reset.bind(this),
                                            value: b.a.translate(
                                                "account.perm.reset"
                                            )
                                        },
                                        n.a.createElement(i.a, {
                                            content: "account.perm.reset"
                                        })
                                    ),
                                    n.a.createElement(
                                        "button",
                                        {
                                            className: l()("button", {
                                                disabled: !o
                                            }),
                                            onClick: this._createAsset.bind(
                                                this
                                            )
                                        },
                                        n.a.createElement(i.a, {
                                            content: "header.create_asset"
                                        })
                                    )
                                );
                                return n.a.createElement(
                                    "div",
                                    {
                                        className:
                                            "grid-content app-tables no-padding",
                                        ref: "appTables"
                                    },
                                    n.a.createElement(
                                        "div",
                                        {className: "content-block small-12"},
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "tabs-container generic-bordered-box"
                                            },
                                            n.a.createElement(
                                                "div",
                                                {className: "tabs-header"},
                                                n.a.createElement(
                                                    "h3",
                                                    null,
                                                    n.a.createElement(i.a, {
                                                        content:
                                                            "header.create_asset"
                                                    })
                                                )
                                            ),
                                            n.a.createElement(
                                                A.b,
                                                {
                                                    setting: "createAssetTab",
                                                    className: "account-tabs",
                                                    tabsClass:
                                                        "account-overview no-padding bordered-header content-block",
                                                    contentClass:
                                                        "grid-block shrink small-vertical medium-horizontal padding",
                                                    segmented: !1,
                                                    actionButtons: T
                                                },
                                                n.a.createElement(
                                                    A.a,
                                                    {
                                                        title:
                                                            "account.user_issued_assets.primary"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "small-12 grid-content"
                                                        },
                                                        n.a.createElement(
                                                            "label",
                                                            null,
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.symbol"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "text",
                                                                    value:
                                                                        c.symbol,
                                                                    onChange: this._onUpdateInput.bind(
                                                                        this,
                                                                        "symbol"
                                                                    )
                                                                }
                                                            )
                                                        ),
                                                        r.symbol
                                                            ? n.a.createElement(
                                                                  "p",
                                                                  {
                                                                      className:
                                                                          "grid-content has-error"
                                                                  },
                                                                  r.symbol
                                                              )
                                                            : null,
                                                        n.a.createElement(
                                                            "label",
                                                            null,
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.max_supply"
                                                                }
                                                            ),
                                                            " ",
                                                            c.symbol
                                                                ? n.a.createElement(
                                                                      "span",
                                                                      null,
                                                                      "(",
                                                                      c.symbol,
                                                                      ")"
                                                                  )
                                                                : null,
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "text",
                                                                    value:
                                                                        c.max_supply,
                                                                    onChange: this._onUpdateInput.bind(
                                                                        this,
                                                                        "max_supply"
                                                                    )
                                                                }
                                                            )
                                                        ),
                                                        r.max_supply
                                                            ? n.a.createElement(
                                                                  "p",
                                                                  {
                                                                      className:
                                                                          "grid-content has-error"
                                                                  },
                                                                  r.max_supply
                                                              )
                                                            : null,
                                                        n.a.createElement(
                                                            "label",
                                                            null,
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.decimals"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    min: "0",
                                                                    max: "8",
                                                                    step: "1",
                                                                    type:
                                                                        "range",
                                                                    value:
                                                                        c.precision,
                                                                    onChange: this._onUpdateInput.bind(
                                                                        this,
                                                                        "precision"
                                                                    )
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "p",
                                                            null,
                                                            c.precision
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    marginBottom: 10
                                                                },
                                                                className:
                                                                    "txtlabel cancel"
                                                            },
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.precision_warning"
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table",
                                                                style: {
                                                                    width:
                                                                        "inherit"
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                "tbody",
                                                                null,
                                                                n.a.createElement(
                                                                    "tr",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "td",
                                                                        {
                                                                            style: {
                                                                                border:
                                                                                    "none"
                                                                            }
                                                                        },
                                                                        n.a.createElement(
                                                                            i.a,
                                                                            {
                                                                                content:
                                                                                    "account.user_issued_assets.mpa"
                                                                            }
                                                                        ),
                                                                        ":"
                                                                    ),
                                                                    n.a.createElement(
                                                                        "td",
                                                                        {
                                                                            style: {
                                                                                border:
                                                                                    "none"
                                                                            }
                                                                        },
                                                                        n.a.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "switch",
                                                                                style: {
                                                                                    marginBottom:
                                                                                        "10px"
                                                                                },
                                                                                onClick: this._onToggleBitAsset.bind(
                                                                                    this
                                                                                )
                                                                            },
                                                                            n.a.createElement(
                                                                                "input",
                                                                                {
                                                                                    type:
                                                                                        "checkbox",
                                                                                    checked: f
                                                                                }
                                                                            ),
                                                                            n.a.createElement(
                                                                                "label",
                                                                                null
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        f
                                                            ? n.a.createElement(
                                                                  "table",
                                                                  {
                                                                      className:
                                                                          "table",
                                                                      style: {
                                                                          width:
                                                                              "inherit"
                                                                      }
                                                                  },
                                                                  n.a.createElement(
                                                                      "tbody",
                                                                      null,
                                                                      n.a.createElement(
                                                                          "tr",
                                                                          null,
                                                                          n.a.createElement(
                                                                              "td",
                                                                              {
                                                                                  style: {
                                                                                      border:
                                                                                          "none"
                                                                                  }
                                                                              },
                                                                              n.a.createElement(
                                                                                  i.a,
                                                                                  {
                                                                                      content:
                                                                                          "account.user_issued_assets.pm"
                                                                                  }
                                                                              ),
                                                                              ":"
                                                                          ),
                                                                          n.a.createElement(
                                                                              "td",
                                                                              {
                                                                                  style: {
                                                                                      border:
                                                                                          "none"
                                                                                  }
                                                                              },
                                                                              n.a.createElement(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "switch",
                                                                                      style: {
                                                                                          marginBottom:
                                                                                              "10px"
                                                                                      },
                                                                                      onClick: this._onTogglePM.bind(
                                                                                          this
                                                                                      )
                                                                                  },
                                                                                  n.a.createElement(
                                                                                      "input",
                                                                                      {
                                                                                          type:
                                                                                              "checkbox",
                                                                                          checked: g
                                                                                      }
                                                                                  ),
                                                                                  n.a.createElement(
                                                                                      "label",
                                                                                      null
                                                                                  )
                                                                              )
                                                                          )
                                                                      )
                                                                  )
                                                              )
                                                            : null,
                                                        n.a.createElement(i.a, {
                                                            component: "h3",
                                                            content:
                                                                "account.user_issued_assets.core_exchange_rate"
                                                        }),
                                                        n.a.createElement(
                                                            "label",
                                                            null,
                                                            n.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-block no-margin"
                                                                },
                                                                r.quote_asset
                                                                    ? n.a.createElement(
                                                                          "p",
                                                                          {
                                                                              className:
                                                                                  "grid-content has-error"
                                                                          },
                                                                          r.quote_asset
                                                                      )
                                                                    : null,
                                                                r.base_asset
                                                                    ? n.a.createElement(
                                                                          "p",
                                                                          {
                                                                              className:
                                                                                  "grid-content has-error"
                                                                          },
                                                                          r.base_asset
                                                                      )
                                                                    : null,
                                                                n.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "grid-block no-margin small-12 medium-6"
                                                                    },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "amount-selector",
                                                                            style: {
                                                                                width:
                                                                                    "100%",
                                                                                paddingRight:
                                                                                    "10px"
                                                                            }
                                                                        },
                                                                        n.a.createElement(
                                                                            i.a,
                                                                            {
                                                                                component:
                                                                                    "label",
                                                                                content:
                                                                                    "account.user_issued_assets.quote"
                                                                            }
                                                                        ),
                                                                        n.a.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "inline-label"
                                                                            },
                                                                            n.a.createElement(
                                                                                "input",
                                                                                {
                                                                                    type:
                                                                                        "text",
                                                                                    placeholder:
                                                                                        "0.0",
                                                                                    onChange: this._onCoreRateChange.bind(
                                                                                        this,
                                                                                        "quote"
                                                                                    ),
                                                                                    value:
                                                                                        _
                                                                                            .quote
                                                                                            .amount
                                                                                }
                                                                            )
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "grid-block no-margin small-12 medium-6"
                                                                    },
                                                                    n.a.createElement(
                                                                        E.a,
                                                                        {
                                                                            label:
                                                                                "account.user_issued_assets.base",
                                                                            amount:
                                                                                _
                                                                                    .base
                                                                                    .amount,
                                                                            onChange: this._onCoreRateChange.bind(
                                                                                this,
                                                                                "base"
                                                                            ),
                                                                            asset:
                                                                                _
                                                                                    .base
                                                                                    .asset_id,
                                                                            assets: [
                                                                                _
                                                                                    .base
                                                                                    .asset_id
                                                                            ],
                                                                            placeholder:
                                                                                "0.0",
                                                                            tabIndex: 1,
                                                                            style: {
                                                                                width:
                                                                                    "100%",
                                                                                paddingLeft:
                                                                                    "10px"
                                                                            }
                                                                        }
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                null,
                                                                n.a.createElement(
                                                                    "h5",
                                                                    null,
                                                                    n.a.createElement(
                                                                        i.a,
                                                                        {
                                                                            content:
                                                                                "exchange.price"
                                                                        }
                                                                    ),
                                                                    n.a.createElement(
                                                                        "span",
                                                                        null,
                                                                        ":",
                                                                        " ",
                                                                        p.a.format_number(
                                                                            p.a.get_asset_price(
                                                                                _
                                                                                    .quote
                                                                                    .amount *
                                                                                    p.a.get_asset_precision(
                                                                                        c.precision
                                                                                    ),
                                                                                {
                                                                                    precision:
                                                                                        c.precision
                                                                                },
                                                                                _
                                                                                    .base
                                                                                    .amount *
                                                                                    p.a.get_asset_precision(
                                                                                        a
                                                                                    ),
                                                                                a
                                                                            ),
                                                                            2 +
                                                                                (parseInt(
                                                                                    c.precision,
                                                                                    10
                                                                                ) ||
                                                                                    8)
                                                                        )
                                                                    ),
                                                                    n.a.createElement(
                                                                        "span",
                                                                        null,
                                                                        " ",
                                                                        c.symbol,
                                                                        "/",
                                                                        a.get(
                                                                            "symbol"
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            null,
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.cer_warning_1",
                                                                    component:
                                                                        "label",
                                                                    className:
                                                                        "has-error"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.cer_warning_2",
                                                                    component:
                                                                        "p"
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "p",
                                                            null,
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.approx_fee"
                                                                }
                                                            ),
                                                            ":",
                                                            " ",
                                                            k
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    A.a,
                                                    {
                                                        title:
                                                            "account.user_issued_assets.description"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "small-12 grid-content"
                                                        },
                                                        n.a.createElement(i.a, {
                                                            component: "label",
                                                            content:
                                                                "account.user_issued_assets.description"
                                                        }),
                                                        n.a.createElement(
                                                            "label",
                                                            null,
                                                            n.a.createElement(
                                                                "textarea",
                                                                {
                                                                    style: {
                                                                        height:
                                                                            "7rem"
                                                                    },
                                                                    rows: "1",
                                                                    value:
                                                                        c
                                                                            .description
                                                                            .main,
                                                                    onChange: this._onUpdateDescription.bind(
                                                                        this,
                                                                        "main"
                                                                    )
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(i.a, {
                                                            component: "label",
                                                            content:
                                                                "account.user_issued_assets.short"
                                                        }),
                                                        n.a.createElement(
                                                            "label",
                                                            null,
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "text",
                                                                    rows: "1",
                                                                    value:
                                                                        c
                                                                            .description
                                                                            .short_name,
                                                                    onChange: this._onUpdateDescription.bind(
                                                                        this,
                                                                        "short_name"
                                                                    )
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(i.a, {
                                                            component: "label",
                                                            content:
                                                                "account.user_issued_assets.market"
                                                        }),
                                                        n.a.createElement(w.a, {
                                                            label:
                                                                "account.user_issued_assets.name",
                                                            onChange: this._onInputMarket.bind(
                                                                this
                                                            ),
                                                            asset: this.state
                                                                .marketInput,
                                                            assetInput: this
                                                                .state
                                                                .marketInput,
                                                            style: {
                                                                width: "100%",
                                                                paddingRight:
                                                                    "10px"
                                                            },
                                                            onFound: this._onFoundMarketAsset.bind(
                                                                this
                                                            )
                                                        }),
                                                        g
                                                            ? n.a.createElement(
                                                                  "div",
                                                                  null,
                                                                  n.a.createElement(
                                                                      i.a,
                                                                      {
                                                                          component:
                                                                              "h3",
                                                                          content:
                                                                              "account.user_issued_assets.condition"
                                                                      }
                                                                  ),
                                                                  n.a.createElement(
                                                                      "label",
                                                                      null,
                                                                      n.a.createElement(
                                                                          "input",
                                                                          {
                                                                              type:
                                                                                  "text",
                                                                              rows:
                                                                                  "1",
                                                                              value:
                                                                                  c
                                                                                      .description
                                                                                      .condition,
                                                                              onChange: this._onUpdateDescription.bind(
                                                                                  this,
                                                                                  "condition"
                                                                              )
                                                                          }
                                                                      )
                                                                  ),
                                                                  n.a.createElement(
                                                                      i.a,
                                                                      {
                                                                          component:
                                                                              "h3",
                                                                          content:
                                                                              "account.user_issued_assets.expiry"
                                                                      }
                                                                  ),
                                                                  n.a.createElement(
                                                                      "label",
                                                                      null,
                                                                      n.a.createElement(
                                                                          "input",
                                                                          {
                                                                              type:
                                                                                  "date",
                                                                              value:
                                                                                  c
                                                                                      .description
                                                                                      .expiry,
                                                                              onChange: this._onUpdateDescription.bind(
                                                                                  this,
                                                                                  "expiry"
                                                                              )
                                                                          }
                                                                      )
                                                                  )
                                                              )
                                                            : null
                                                    )
                                                ),
                                                f
                                                    ? n.a.createElement(
                                                          A.a,
                                                          {
                                                              title:
                                                                  "account.user_issued_assets.bitasset_opts"
                                                          },
                                                          n.a.createElement(U, {
                                                              bitasset_opts: y,
                                                              onUpdate: this.onChangeBitAssetOpts.bind(
                                                                  this
                                                              ),
                                                              backingAsset:
                                                                  y.short_backing_asset,
                                                              assetPrecision:
                                                                  c.precision,
                                                              assetSymbol:
                                                                  c.symbol
                                                          })
                                                      )
                                                    : null,
                                                n.a.createElement(
                                                    A.a,
                                                    {
                                                        title:
                                                            "account.permissions"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "small-12 grid-content"
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    maxWidth: 800
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                u.a,
                                                                {
                                                                    path:
                                                                        "components/AccountAssetCreate",
                                                                    section:
                                                                        "permissions"
                                                                }
                                                            )
                                                        ),
                                                        O
                                                    )
                                                ),
                                                n.a.createElement(
                                                    A.a,
                                                    {
                                                        title:
                                                            "account.user_issued_assets.flags"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "small-12 grid-content"
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    maxWidth: 800
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                u.a,
                                                                {
                                                                    path:
                                                                        "components/AccountAssetCreate",
                                                                    section:
                                                                        "flags"
                                                                }
                                                            )
                                                        ),
                                                        h.charge_market_fee
                                                            ? n.a.createElement(
                                                                  "div",
                                                                  null,
                                                                  n.a.createElement(
                                                                      i.a,
                                                                      {
                                                                          component:
                                                                              "h3",
                                                                          content:
                                                                              "account.user_issued_assets.market_fee"
                                                                      }
                                                                  ),
                                                                  n.a.createElement(
                                                                      "table",
                                                                      {
                                                                          className:
                                                                              "table"
                                                                      },
                                                                      n.a.createElement(
                                                                          "tbody",
                                                                          null,
                                                                          n.a.createElement(
                                                                              "tr",
                                                                              null,
                                                                              n.a.createElement(
                                                                                  "td",
                                                                                  {
                                                                                      style: {
                                                                                          border:
                                                                                              "none",
                                                                                          width:
                                                                                              "80%"
                                                                                      }
                                                                                  },
                                                                                  n.a.createElement(
                                                                                      i.a,
                                                                                      {
                                                                                          content:
                                                                                              "account.user_issued_assets.charge_market_fee"
                                                                                      }
                                                                                  ),
                                                                                  ":"
                                                                              ),
                                                                              n.a.createElement(
                                                                                  "td",
                                                                                  {
                                                                                      style: {
                                                                                          border:
                                                                                              "none"
                                                                                      }
                                                                                  },
                                                                                  n.a.createElement(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "switch",
                                                                                          style: {
                                                                                              marginBottom:
                                                                                                  "10px"
                                                                                          },
                                                                                          onClick: this._onFlagChange.bind(
                                                                                              this,
                                                                                              "charge_market_fee"
                                                                                          )
                                                                                      },
                                                                                      n.a.createElement(
                                                                                          "input",
                                                                                          {
                                                                                              type:
                                                                                                  "checkbox",
                                                                                              checked:
                                                                                                  m.charge_market_fee
                                                                                          }
                                                                                      ),
                                                                                      n.a.createElement(
                                                                                          "label",
                                                                                          null
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      )
                                                                  ),
                                                                  n.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className: l()(
                                                                              {
                                                                                  disabled: !m.charge_market_fee
                                                                              }
                                                                          )
                                                                      },
                                                                      n.a.createElement(
                                                                          "label",
                                                                          null,
                                                                          n.a.createElement(
                                                                              i.a,
                                                                              {
                                                                                  content:
                                                                                      "account.user_issued_assets.market_fee"
                                                                              }
                                                                          ),
                                                                          " ",
                                                                          "(%)",
                                                                          n.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  type:
                                                                                      "number",
                                                                                  value:
                                                                                      c.market_fee_percent,
                                                                                  onChange: this._onUpdateInput.bind(
                                                                                      this,
                                                                                      "market_fee_percent"
                                                                                  )
                                                                              }
                                                                          )
                                                                      ),
                                                                      n.a.createElement(
                                                                          "label",
                                                                          null,
                                                                          n.a.createElement(
                                                                              i.a,
                                                                              {
                                                                                  content:
                                                                                      "account.user_issued_assets.max_market_fee"
                                                                              }
                                                                          ),
                                                                          " ",
                                                                          "(",
                                                                          c.symbol,
                                                                          ")",
                                                                          n.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  type:
                                                                                      "number",
                                                                                  value:
                                                                                      c.max_market_fee,
                                                                                  onChange: this._onUpdateInput.bind(
                                                                                      this,
                                                                                      "max_market_fee"
                                                                                  )
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.max_market_fee
                                                                          ? n.a.createElement(
                                                                                "p",
                                                                                {
                                                                                    className:
                                                                                        "grid-content has-error"
                                                                                },
                                                                                r.max_market_fee
                                                                            )
                                                                          : null
                                                                  )
                                                              )
                                                            : null,
                                                        n.a.createElement(
                                                            "h3",
                                                            null,
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets.flags"
                                                                }
                                                            )
                                                        ),
                                                        C
                                                    )
                                                )
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (J.propTypes = {
                core: g.a.ChainAsset.isRequired,
                globalObject: g.a.ChainObject.isRequired
            }),
                (J.defaultProps = {globalObject: "2.0.0", core: "1.3.0"}),
                (J = Object(f.a)(J));
            var D = a(40),
                L = a(132),
                M = a(13),
                W = a(15),
                H = a(8),
                G = a(10),
                V = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            var z = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (a.state = {
                                listType: e.assetWhiteListType,
                                accountTable:
                                    -1 ===
                                    e.assetWhiteListType.indexOf("market"),
                                listTypes: [
                                    "whitelist_authorities",
                                    "blacklist_authorities",
                                    "whitelist_markets",
                                    "blacklist_markets"
                                ],
                                assetInput: null,
                                asset_id: null
                            }),
                            a
                        );
                    }
                    return (
                        (function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                        typeof t
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                t &&
                                    (Object.setPrototypeOf
                                        ? Object.setPrototypeOf(e, t)
                                        : (e.__proto__ = t));
                        })(t, n.a.Component),
                        V(t, [
                            {
                                key: "renderAccountTables",
                                value: function() {
                                    var e = this,
                                        t = this.state.listType;
                                    return this.props.whiteListEnabled
                                        ? n.a.createElement(
                                              "div",
                                              null,
                                              n.a.createElement(
                                                  "table",
                                                  {
                                                      className:
                                                          "table dashboard-table table-hover"
                                                  },
                                                  n.a.createElement(
                                                      "thead",
                                                      null,
                                                      n.a.createElement(
                                                          "tr",
                                                          null,
                                                          n.a.createElement(
                                                              "th",
                                                              null,
                                                              n.a.createElement(
                                                                  i.a,
                                                                  {
                                                                      content:
                                                                          "explorer.account.title"
                                                                  }
                                                              )
                                                          ),
                                                          n.a.createElement(
                                                              "th",
                                                              null,
                                                              n.a.createElement(
                                                                  i.a,
                                                                  {
                                                                      content:
                                                                          "account.perm.remove_text"
                                                                  }
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  n.a.createElement(
                                                      "tbody",
                                                      null,
                                                      this.props[t].map(
                                                          function(a) {
                                                              return n.a.createElement(
                                                                  "tr",
                                                                  {key: a},
                                                                  n.a.createElement(
                                                                      "td",
                                                                      null,
                                                                      n.a.createElement(
                                                                          D.a,
                                                                          {
                                                                              account: a
                                                                          }
                                                                      )
                                                                  ),
                                                                  n.a.createElement(
                                                                      "td",
                                                                      {
                                                                          className:
                                                                              "clickable",
                                                                          onClick: e.props.onChangeList.bind(
                                                                              e,
                                                                              t,
                                                                              "remove",
                                                                              a
                                                                          )
                                                                      },
                                                                      n.a.createElement(
                                                                          M.a,
                                                                          {
                                                                              name:
                                                                                  "cross-circle",
                                                                              title:
                                                                                  "icons.cross_circle.remove",
                                                                              className:
                                                                                  "icon-14px"
                                                                          }
                                                                      )
                                                                  )
                                                              );
                                                          }
                                                      )
                                                  )
                                              ),
                                              n.a.createElement(
                                                  "div",
                                                  {style: {paddingTop: "2rem"}},
                                                  n.a.createElement(k.a, {
                                                      label:
                                                          "account.whitelist." +
                                                          t,
                                                      accountName: this.props
                                                          .authority_name,
                                                      account: this.props
                                                          .authority_name,
                                                      onChange: this.props.onAccountNameChanged.bind(
                                                          this,
                                                          "authority_name"
                                                      ),
                                                      onAccountChanged: this.props.onAccountChanged.bind(
                                                          this,
                                                          "new_authority_id"
                                                      ),
                                                      error: null,
                                                      tabIndex: 1,
                                                      action_label:
                                                          "account.perm.confirm_add",
                                                      onAction: this.props.onChangeList.bind(
                                                          this,
                                                          t,
                                                          "add",
                                                          this.props
                                                              .new_authority_id
                                                      )
                                                  })
                                              )
                                          )
                                        : n.a.createElement(
                                              "div",
                                              null,
                                              n.a.createElement(i.a, {
                                                  className: "txtlabel cancel",
                                                  component: "p",
                                                  content:
                                                      "explorer.asset.whitelist.enable_flag"
                                              })
                                          );
                                }
                            },
                            {
                                key: "_onAssetChange",
                                value: function(e) {
                                    this.setState({assetInput: e});
                                }
                            },
                            {
                                key: "_onAssetFound",
                                value: function(e) {
                                    this.setState({
                                        asset_id: e ? e.get("id") : null
                                    });
                                }
                            },
                            {
                                key: "renderMarketTable",
                                value: function() {
                                    var e = this,
                                        t = this.state.listType;
                                    return n.a.createElement(
                                        "div",
                                        null,
                                        n.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table dashboard-table table-hover"
                                            },
                                            n.a.createElement(
                                                "thead",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    null,
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.title"
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "account.perm.remove_text"
                                                        })
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "tbody",
                                                null,
                                                this.props[t].map(function(a) {
                                                    return n.a.createElement(
                                                        "tr",
                                                        {key: a},
                                                        n.a.createElement(
                                                            "td",
                                                            null,
                                                            n.a.createElement(
                                                                L.a,
                                                                {asset: a}
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "td",
                                                            {
                                                                className:
                                                                    "clickable",
                                                                onClick: e.props.onChangeList.bind(
                                                                    e,
                                                                    t,
                                                                    "remove",
                                                                    a
                                                                )
                                                            },
                                                            n.a.createElement(
                                                                M.a,
                                                                {
                                                                    name:
                                                                        "cross-circle",
                                                                    title:
                                                                        "icons.cross_circle.remove",
                                                                    className:
                                                                        "icon-14px"
                                                                }
                                                            )
                                                        )
                                                    );
                                                })
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {style: {paddingTop: "2rem"}},
                                            n.a.createElement(w.a, {
                                                label:
                                                    "explorer.asset.whitelist." +
                                                    t,
                                                onChange: this._onAssetChange.bind(
                                                    this
                                                ),
                                                asset: this.state.assetInput,
                                                assetInput: this.state
                                                    .assetInput,
                                                tabIndex: 1,
                                                style: {width: "100%"},
                                                onFound: this._onAssetFound.bind(
                                                    this
                                                ),
                                                action_label:
                                                    "account.perm.confirm_add",
                                                onAction: this.props.onChangeList.bind(
                                                    this,
                                                    t,
                                                    "add",
                                                    this.state.asset_id
                                                )
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "_onSwitchType",
                                value: function(e) {
                                    this.setState({
                                        listType: e,
                                        accountTable: -1 === e.indexOf("market")
                                    }),
                                        G.a.changeViewSetting({
                                            assetWhiteListType: e
                                        });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.state.accountTable,
                                        a = this.state.listTypes.indexOf(
                                            this.state.listType
                                        );
                                    return n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "small-12 large-8 large-offset-2 grid-content"
                                        },
                                        n.a.createElement(
                                            "div",
                                            null,
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "header-selector",
                                                    style: {
                                                        paddingBottom: "2rem"
                                                    }
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {className: "selector"},
                                                    this.state.listTypes.map(
                                                        function(t, s) {
                                                            return n.a.createElement(
                                                                "div",
                                                                {
                                                                    key: t,
                                                                    className: l()(
                                                                        "inline-block",
                                                                        {
                                                                            inactive:
                                                                                a !==
                                                                                s
                                                                        }
                                                                    ),
                                                                    onClick: e._onSwitchType.bind(
                                                                        e,
                                                                        t
                                                                    )
                                                                },
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "explorer.asset.whitelist." +
                                                                            t
                                                                    }
                                                                )
                                                            );
                                                        }
                                                    )
                                                )
                                            ),
                                            t
                                                ? this.renderAccountTables()
                                                : this.renderMarketTable(),
                                            this.props.children
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                K = Object(W.connect)(z, {
                    listenTo: function() {
                        return [H.a];
                    },
                    getProps: function() {
                        return {
                            assetWhiteListType: H.a
                                .getState()
                                .viewSettings.get(
                                    "assetWhiteListType",
                                    "whitelist_authorities"
                                )
                        };
                    }
                }),
                X = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            var Y = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (a.state = {producer_name: null}), a;
                    }
                    return (
                        (function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                        typeof t
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                t &&
                                    (Object.setPrototypeOf
                                        ? Object.setPrototypeOf(e, t)
                                        : (e.__proto__ = t));
                        })(t, n.a.Component),
                        X(t, [
                            {
                                key: "onAccountChanged",
                                value: function(e) {
                                    this.setState({
                                        new_producer_id: e ? e.get("id") : null
                                    });
                                }
                            },
                            {
                                key: "onAccountNameChanged",
                                value: function(e) {
                                    this.setState({producer_name: e});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.witnessFed,
                                        s = t.committeeFed;
                                    return a || s
                                        ? n.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content small-12 large-8 large-offset-2"
                                              },
                                              n.a.createElement(i.a, {
                                                  component: "p",
                                                  content:
                                                      "account.user_issued_assets.feed_not_allowed_1",
                                                  className: "has-error"
                                              }),
                                              n.a.createElement(i.a, {
                                                  component: "p",
                                                  content:
                                                      "account.user_issued_assets.feed_not_allowed_2"
                                              })
                                          )
                                        : n.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content small-12 large-8 large-offset-2"
                                              },
                                              n.a.createElement(
                                                  "table",
                                                  {
                                                      className:
                                                          "table dashboard-table table-hover"
                                                  },
                                                  n.a.createElement(
                                                      "thead",
                                                      null,
                                                      n.a.createElement(
                                                          "tr",
                                                          null,
                                                          n.a.createElement(
                                                              "th",
                                                              null
                                                          ),
                                                          n.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      textAlign:
                                                                          "left"
                                                                  }
                                                              },
                                                              n.a.createElement(
                                                                  i.a,
                                                                  {
                                                                      content:
                                                                          "explorer.account.title"
                                                                  }
                                                              )
                                                          ),
                                                          n.a.createElement(
                                                              "th",
                                                              null,
                                                              n.a.createElement(
                                                                  i.a,
                                                                  {
                                                                      content:
                                                                          "account.perm.remove_text"
                                                                  }
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  n.a.createElement(
                                                      "tbody",
                                                      null,
                                                      this.props.producers.map(
                                                          function(t, a) {
                                                              return n.a.createElement(
                                                                  "tr",
                                                                  {key: t},
                                                                  n.a.createElement(
                                                                      "td",
                                                                      {
                                                                          style: {
                                                                              textAlign:
                                                                                  "left"
                                                                          }
                                                                      },
                                                                      "#",
                                                                      a + 1
                                                                  ),
                                                                  n.a.createElement(
                                                                      "td",
                                                                      {
                                                                          style: {
                                                                              textAlign:
                                                                                  "left"
                                                                          }
                                                                      },
                                                                      n.a.createElement(
                                                                          D.a,
                                                                          {
                                                                              account: t
                                                                          }
                                                                      )
                                                                  ),
                                                                  n.a.createElement(
                                                                      "td",
                                                                      {
                                                                          className:
                                                                              "clickable",
                                                                          onClick: e.props.onChangeList.bind(
                                                                              e,
                                                                              "remove",
                                                                              t
                                                                          )
                                                                      },
                                                                      n.a.createElement(
                                                                          M.a,
                                                                          {
                                                                              name:
                                                                                  "cross-circle",
                                                                              title:
                                                                                  "icons.cross_circle.remove",
                                                                              className:
                                                                                  "icon-14px"
                                                                          }
                                                                      )
                                                                  )
                                                              );
                                                          }
                                                      )
                                                  )
                                              ),
                                              n.a.createElement(
                                                  "div",
                                                  {style: {paddingTop: "2rem"}},
                                                  n.a.createElement(k.a, {
                                                      label:
                                                          "account.user_issued_assets.add_feed",
                                                      accountName: this.state
                                                          .producer_name,
                                                      account: this.state
                                                          .producer_name,
                                                      onChange: this.onAccountNameChanged.bind(
                                                          this
                                                      ),
                                                      onAccountChanged: this.onAccountChanged.bind(
                                                          this
                                                      ),
                                                      error: null,
                                                      tabIndex: 1,
                                                      action_label:
                                                          "account.perm.confirm_add",
                                                      onAction: this.props.onChangeList.bind(
                                                          this,
                                                          "add",
                                                          this.state
                                                              .new_producer_id
                                                      )
                                                  })
                                              )
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Q = a(35),
                Z = a(20),
                $ = a.n(Z),
                ee = a(349),
                te =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var s in a)
                                Object.prototype.hasOwnProperty.call(a, s) &&
                                    (e[s] = a[s]);
                        }
                        return e;
                    },
                ae = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            function se(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function ne(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function re(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function ie(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var oe = new x.a(S.a.GRAPHENE_MAX_SHARE_SUPPLY),
                le = (function(e) {
                    function t(e) {
                        ne(this, t);
                        var a = re(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (a.state = a.resetState(e)), a;
                    }
                    return (
                        ie(t, n.a.Component),
                        ae(t, [
                            {
                                key: "_openConfirm",
                                value: function() {
                                    this.refs.confirm_modal.show();
                                }
                            },
                            {
                                key: "_cancelConfirm",
                                value: function() {
                                    this.refs.confirm_modal.onClose();
                                }
                            },
                            {
                                key: "resetState",
                                value: function(e) {
                                    var t = e.asset.toJS(),
                                        a = void 0 !== t.bitasset_data_id,
                                        s = p.a.get_asset_precision(
                                            t.precision
                                        ),
                                        n = p.a.get_asset_precision(
                                            e.core.get("precision")
                                        ),
                                        r = new x.a(t.options.max_market_fee)
                                            .div(s)
                                            .toString(),
                                        i = new x.a(t.options.max_supply)
                                            .div(s)
                                            .toString(),
                                        o = t.options.core_exchange_rate;
                                    (o.quote.amount =
                                        o.quote.asset_id === t.id
                                            ? new x.a(o.quote.amount)
                                                  .div(s)
                                                  .toString()
                                            : new x.a(o.quote.amount)
                                                  .div(n)
                                                  .toString()),
                                        (o.base.amount =
                                            o.base.asset_id === t.id
                                                ? new x.a(o.base.amount)
                                                      .div(s)
                                                      .toString()
                                                : new x.a(o.base.amount)
                                                      .div(n)
                                                      .toString());
                                    var l = N.a.getFlagBooleans(
                                            t.options.flags,
                                            a
                                        ),
                                        c = N.a.getFlagBooleans(
                                            t.options.issuer_permissions,
                                            a
                                        );
                                    t.options.market_fee_percent /= 100;
                                    var u = m.b
                                            .getAsset(o.quote.asset_id)
                                            .get("symbol"),
                                        d = m.b
                                            .getAsset(o.base.asset_id)
                                            .get("symbol");
                                    return {
                                        update: {
                                            max_supply: i,
                                            max_market_fee: r,
                                            market_fee_percent:
                                                t.options.market_fee_percent,
                                            description: N.a.parseDescription(
                                                t.options.description
                                            )
                                        },
                                        core_exchange_rate: o,
                                        issuer: t.issuer,
                                        new_issuer_account_id: null,
                                        issuer_account_name: null,
                                        new_funder_account: e.account.get("id"),
                                        asset_to_update: t.id,
                                        errors: {max_supply: null},
                                        new_authority_id: null,
                                        authority_name: null,
                                        isValid: !0,
                                        flagBooleans: l,
                                        permissionBooleans: c,
                                        isBitAsset: a,
                                        coreRateQuoteAssetName: u,
                                        quoteAssetInput: u,
                                        coreRateBaseAssetName: d,
                                        baseAssetInput: d,
                                        claimFeesAmount: 0,
                                        bitasset_opts: a
                                            ? t.bitasset.options
                                            : null,
                                        original_bitasset_opts: a
                                            ? e.asset
                                                  .getIn([
                                                      "bitasset",
                                                      "options"
                                                  ])
                                                  .toJS()
                                            : null,
                                        marketInput: "",
                                        whitelist_authorities: e.asset.getIn([
                                            "options",
                                            "whitelist_authorities"
                                        ]),
                                        blacklist_authorities: e.asset.getIn([
                                            "options",
                                            "blacklist_authorities"
                                        ]),
                                        whitelist_markets: e.asset.getIn([
                                            "options",
                                            "whitelist_markets"
                                        ]),
                                        blacklist_markets: e.asset.getIn([
                                            "options",
                                            "blacklist_markets"
                                        ]),
                                        maxFeedProducers: e.globalObject.getIn([
                                            "parameters",
                                            "maximum_asset_feed_publishers"
                                        ]),
                                        feedProducers: a
                                            ? e.asset
                                                  .getIn(
                                                      ["bitasset", "feeds"],
                                                      []
                                                  )
                                                  .map(function(e) {
                                                      return e.first();
                                                  })
                                            : null,
                                        originalFeedProducers: a
                                            ? e.asset
                                                  .getIn(
                                                      ["bitasset", "feeds"],
                                                      []
                                                  )
                                                  .map(function(e) {
                                                      return e.first();
                                                  })
                                            : null
                                    };
                                }
                            },
                            {
                                key: "assetChanged",
                                value: function() {
                                    var e = this.state,
                                        t = this.resetState(this.props);
                                    return (
                                        JSON.stringify(e.update) !==
                                            JSON.stringify(t.update) ||
                                        JSON.stringify(e.core_exchange_rate) !==
                                            JSON.stringify(
                                                t.core_exchange_rate
                                            ) ||
                                        (null !== e.new_issuer_account_id &&
                                            e.new_issuer_account_id !==
                                                e.issuer) ||
                                        JSON.stringify(e.flagBooleans) !==
                                            JSON.stringify(t.flagBooleans) ||
                                        JSON.stringify(e.permissionBooleans) !==
                                            JSON.stringify(
                                                t.permissionBooleans
                                            ) ||
                                        JSON.stringify(
                                            e.whitelist_authorities
                                        ) !==
                                            JSON.stringify(
                                                t.whitelist_authorities
                                            ) ||
                                        JSON.stringify(
                                            e.blacklist_authorities
                                        ) !==
                                            JSON.stringify(
                                                t.blacklist_authorities
                                            ) ||
                                        JSON.stringify(e.whitelist_markets) !==
                                            JSON.stringify(
                                                t.whitelist_markets
                                            ) ||
                                        JSON.stringify(e.blacklist_markets) !==
                                            JSON.stringify(t.blacklist_markets)
                                    );
                                }
                            },
                            {
                                key: "tabChanged",
                                value: function(e) {
                                    var t = this.tabsChanged();
                                    return !!t[e] && t[e];
                                }
                            },
                            {
                                key: "tabsChanged",
                                value: function() {
                                    var e = this.state,
                                        t = this.resetState(this.props),
                                        a = [];
                                    return (
                                        (e.update.max_supply ===
                                            t.update.max_supply &&
                                            e.core_exchange_rate.base.amount ===
                                                t.core_exchange_rate.base
                                                    .amount &&
                                            e.core_exchange_rate.quote
                                                .amount ===
                                                t.core_exchange_rate.quote
                                                    .amount) ||
                                            (a[0] = !0),
                                        (JSON.stringify(
                                            e.whitelist_authorities
                                        ) ===
                                            JSON.stringify(
                                                t.whitelist_authorities
                                            ) &&
                                            JSON.stringify(
                                                e.blacklist_authorities
                                            ) ===
                                                JSON.stringify(
                                                    t.blacklist_authorities
                                                ) &&
                                            JSON.stringify(
                                                e.whitelist_markets
                                            ) ===
                                                JSON.stringify(
                                                    t.whitelist_markets
                                                ) &&
                                            JSON.stringify(
                                                e.blacklist_markets
                                            ) ===
                                                JSON.stringify(
                                                    t.blacklist_markets
                                                )) ||
                                            (a[1] = !0),
                                        (e.update.description.main ===
                                            t.update.description.main &&
                                            e.update.description.short_name ===
                                                t.update.description
                                                    .short_name &&
                                            e.update.description.market ===
                                                t.update.description.market) ||
                                            (a[2] = !0),
                                        JSON.stringify(e.bitasset_opts) !==
                                            JSON.stringify(
                                                t.original_bitasset_opts
                                            ) && (a[3] = !0),
                                        null !== e.new_issuer_account_id &&
                                            e.new_issuer_account_id !==
                                                e.issuer &&
                                            (a[4] = !0),
                                        JSON.stringify(e.permissionBooleans) !==
                                            JSON.stringify(
                                                t.permissionBooleans
                                            ) && (a[5] = !0),
                                        (JSON.stringify(e.flagBooleans) ===
                                            JSON.stringify(t.flagBooleans) &&
                                            e.update.market_fee_percent ===
                                                t.update.market_fee_percent &&
                                            e.update.max_market_fee ===
                                                t.update.max_market_fee) ||
                                            (a[6] = !0),
                                        JSON.stringify(e.feedProducers) !==
                                            JSON.stringify(
                                                t.originalFeedProducers
                                            ) && (a[8] = !0),
                                        a
                                    );
                                }
                            },
                            {
                                key: "pageChanged",
                                value: function() {
                                    var e = this.state,
                                        t = e.isBitAsset,
                                        a = e.bitasset_opts,
                                        s = e.original_bitasset_opts,
                                        n = e.feedProducers,
                                        r = e.originalFeedProducers;
                                    return (
                                        this.assetChanged() ||
                                        (t &&
                                            (JSON.stringify(a) !==
                                                JSON.stringify(s) ||
                                                !p.a.are_equal_shallow(
                                                    n.toJS(),
                                                    r.toJS()
                                                )))
                                    );
                                }
                            },
                            {
                                key: "_updateAsset",
                                value: function(e) {
                                    var t = this;
                                    e.preventDefault(),
                                        this.refs.confirm_modal.onClose();
                                    var a = this.state,
                                        s = a.update,
                                        n = a.issuer,
                                        r = a.new_issuer_account_id,
                                        i = a.core_exchange_rate,
                                        o = a.flagBooleans,
                                        l = a.permissionBooleans,
                                        u = a.isBitAsset,
                                        p = a.bitasset_opts,
                                        d = a.original_bitasset_opts,
                                        h = a.feedProducers,
                                        _ = a.originalFeedProducers,
                                        b = N.a.getFlags(o);
                                    128 &
                                        this.props.asset.getIn([
                                            "options",
                                            "flags"
                                        ]) &&
                                        !(
                                            128 &
                                            this.props.asset.getIn([
                                                "options",
                                                "issuer_permissions"
                                            ])
                                        ) &&
                                        (b += 128);
                                    var g = N.a.getPermissions(l, u);
                                    this.state.marketInput !==
                                        s.description.market &&
                                        (s.description.market = "");
                                    var f = JSON.stringify(s.description),
                                        y = {
                                            whitelist_authorities: this.state
                                                .whitelist_authorities,
                                            blacklist_authorities: this.state
                                                .blacklist_authorities,
                                            whitelist_markets: this.state
                                                .whitelist_markets,
                                            blacklist_markets: this.state
                                                .blacklist_markets
                                        },
                                        E = u ? h.toJS() : null,
                                        v = u ? _.toJS() : null;
                                    c.a
                                        .updateAsset(
                                            n,
                                            r,
                                            s,
                                            i,
                                            this.props.asset,
                                            b,
                                            g,
                                            u,
                                            p,
                                            d,
                                            f,
                                            y,
                                            E,
                                            v,
                                            this.assetChanged()
                                        )
                                        .then(function() {
                                            console.log(
                                                "... AssetActions.updateAsset(account_id, update)",
                                                n,
                                                r,
                                                t.props.asset.get("id"),
                                                s
                                            ),
                                                setTimeout(function() {
                                                    m.b.getAsset(
                                                        t.props.asset.get("id")
                                                    ),
                                                        t.setState(
                                                            t.resetState(
                                                                t.props
                                                            )
                                                        );
                                                }, 3e3);
                                        });
                                }
                            },
                            {
                                key: "_reset",
                                value: function(e) {
                                    e.preventDefault(),
                                        this.setState(
                                            this.resetState(this.props)
                                        );
                                }
                            },
                            {
                                key: "_forcePositive",
                                value: function(e) {
                                    return parseFloat(e) < 0 ? "0" : e;
                                }
                            },
                            {
                                key: "_onUpdateDescription",
                                value: function(e, t) {
                                    var a = this.state.update,
                                        s = !0;
                                    switch (e) {
                                        case "condition":
                                            if (t.target.value.length > 60)
                                                return void (s = !1);
                                            a.description[e] = t.target.value;
                                            break;
                                        case "short_name":
                                            if (t.target.value.length > 32)
                                                return void (s = !1);
                                            a.description[e] = t.target.value;
                                            break;
                                        case "market":
                                            a.description[e] = t;
                                            break;
                                        case "visible":
                                            a.description[e] = !a.description[
                                                e
                                            ];
                                            break;
                                        default:
                                            a.description[e] = t.target.value;
                                    }
                                    s &&
                                        (this.forceUpdate(),
                                        this._validateEditFields(a));
                                }
                            },
                            {
                                key: "onChangeBitAssetOpts",
                                value: function(e, t) {
                                    var a = this.state.bitasset_opts;
                                    switch (e) {
                                        case "force_settlement_offset_percent":
                                        case "maximum_force_settlement_volume":
                                            a[e] =
                                                parseFloat(t.target.value) *
                                                S.a.GRAPHENE_1_PERCENT;
                                            break;
                                        case "feed_lifetime_sec":
                                        case "force_settlement_delay_sec":
                                            console.log(
                                                t.target.value,
                                                parseInt(
                                                    60 *
                                                        parseFloat(
                                                            t.target.value
                                                        ),
                                                    10
                                                )
                                            ),
                                                (a[e] = parseInt(
                                                    60 *
                                                        parseFloat(
                                                            t.target.value
                                                        ),
                                                    10
                                                ));
                                            break;
                                        case "short_backing_asset":
                                            a[e] = t;
                                            break;
                                        default:
                                            a[e] = parseInt(t.target.value, 10);
                                    }
                                    this.forceUpdate();
                                }
                            },
                            {
                                key: "_onUpdateInput",
                                value: function(e, t) {
                                    var a = this.state.update,
                                        s = !0,
                                        n = p.a.get_asset_precision(
                                            this.props.asset.get("precision")
                                        );
                                    switch (e) {
                                        case "market_fee_percent":
                                            a[e] = this._forcePositive(
                                                t.target.value
                                            );
                                            break;
                                        case "max_market_fee":
                                            var r = t.amount.replace(/,/g, "");
                                            if (new x.a(r).times(n).gt(oe))
                                                return (
                                                    (s = !1),
                                                    this.setState({
                                                        errors: {
                                                            max_market_fee:
                                                                "The number you tried to enter is too large"
                                                        }
                                                    })
                                                );
                                            a[e] = p.a.limitByPrecision(
                                                r,
                                                this.props.asset.get(
                                                    "precision"
                                                )
                                            );
                                            break;
                                        case "max_supply":
                                            var i = t.amount.replace(/,/g, "");
                                            a[e] = p.a.limitByPrecision(
                                                i,
                                                this.props.asset.get(
                                                    "precision"
                                                )
                                            );
                                            break;
                                        default:
                                            a[e] = t.target.value;
                                    }
                                    s &&
                                        (this.setState({update: a}),
                                        this._validateEditFields(a));
                                }
                            },
                            {
                                key: "_validateEditFields",
                                value: function(e) {
                                    var t = e.core_exchange_rate,
                                        a = e.feedProducers
                                            ? e.feedProducers
                                            : this.state.feedProducers,
                                        s = this.state.flagBooleans,
                                        n = this.props,
                                        r = n.asset,
                                        i = n.core,
                                        o = {
                                            max_supply: null,
                                            quote_asset: null,
                                            base_asset: null,
                                            max_feed_producer: null,
                                            conflict_producer: null,
                                            invalid_market_pair: null
                                        },
                                        l = this.props.asset.get("precision");
                                    try {
                                        o.max_supply =
                                            e.max_supply <= 0
                                                ? b.a.translate(
                                                      "account.user_issued_assets.max_positive"
                                                  )
                                                : new x.a(
                                                      parseInt(e.max_supply, 10)
                                                  )
                                                      .times(Math.pow(10, l))
                                                      .gt(oe)
                                                    ? b.a.translate(
                                                          "account.user_issued_assets.too_large"
                                                      )
                                                    : null;
                                    } catch (e) {
                                        console.log("err:", e),
                                            (o.max_supply = b.a.translate(
                                                "account.user_issued_assets.too_large"
                                            ));
                                    }
                                    t &&
                                        (t.quote.asset_id !== r.get("id") &&
                                            t.base.asset_id !== r.get("id") &&
                                            (o.quote_asset = b.a.translate(
                                                "account.user_issued_assets.need_asset",
                                                {name: r.get("symbol")}
                                            )),
                                        t.quote.asset_id !== i.get("id") &&
                                            t.base.asset_id !== i.get("id") &&
                                            (o.base_asset = b.a.translate(
                                                "account.user_issued_assets.need_asset",
                                                {name: i.get("symbol")}
                                            ))),
                                        a &&
                                            a.size >
                                                this.state.maxFeedProducers &&
                                            (o.max_feed_producer = b.a.translate(
                                                "account.user_issued_assets.too_many_feed",
                                                {
                                                    max: this.state
                                                        .maxFeedProducers
                                                }
                                            )),
                                        s.committee_fed_asset &&
                                            s.witness_fed_asset &&
                                            (o.conflict_producer = b.a.translate(
                                                "account.user_issued_assets.conflict_feed"
                                            )),
                                        this.state.marketInput ==
                                            this.props.asset.get("symbol") &&
                                            (o.invalid_market_pair = b.a.translate(
                                                "account.user_issued_assets.invalid_market_pair"
                                            ));
                                    var c = !(
                                        o.invalid_market_pair ||
                                        o.max_supply ||
                                        o.base_asset ||
                                        o.quote_asset ||
                                        o.max_feed_producer ||
                                        o.conflict_producer
                                    );
                                    this.setState({isValid: c, errors: o});
                                }
                            },
                            {
                                key: "_onCoreRateChange",
                                value: function(e, t) {
                                    (t.amount =
                                        "" == t.amount
                                            ? "0"
                                            : t.amount.replace(/,/g, "")),
                                        (t.amount = p.a.limitByPrecision(
                                            t.amount,
                                            t.asset.get("precision")
                                        )),
                                        (this.state.core_exchange_rate[e] = {
                                            amount: t.amount,
                                            asset_id: t.asset.get("id")
                                        }),
                                        this.forceUpdate();
                                }
                            },
                            {
                                key: "onAccountChanged",
                                value: function(e, t) {
                                    this.setState(
                                        se({}, e, t ? t.get("id") : null)
                                    );
                                }
                            },
                            {
                                key: "onAccountNameChanged",
                                value: function(e, t) {
                                    this.setState(se({}, e, t));
                                }
                            },
                            {
                                key: "_onInputCoreAsset",
                                value: function(e, t) {
                                    "quote" === e
                                        ? this.setState({quoteAssetInput: t})
                                        : "base" === e &&
                                          this.setState({baseAssetInput: t});
                                }
                            },
                            {
                                key: "_onFoundCoreAsset",
                                value: function(e, t) {
                                    if (t) {
                                        var a = this.state.core_exchange_rate;
                                        (a[e].asset_id = t.get("id")),
                                            this.setState({
                                                core_exchange_rate: a
                                            }),
                                            this._validateEditFields({
                                                max_supply: this.state
                                                    .max_supply,
                                                core_exchange_rate: a
                                            });
                                    }
                                }
                            },
                            {
                                key: "_onInputMarket",
                                value: function(e) {
                                    this.setState({marketInput: e});
                                }
                            },
                            {
                                key: "_onFoundMarketAsset",
                                value: function(e) {
                                    e &&
                                        this._onUpdateDescription(
                                            "market",
                                            e.get("symbol")
                                        );
                                }
                            },
                            {
                                key: "_onFlagChange",
                                value: function(e) {
                                    var t = this.state.flagBooleans;
                                    (t[e] = !t[e]),
                                        this.setState({flagBooleans: t}),
                                        this._validateEditFields({});
                                }
                            },
                            {
                                key: "_onPermissionChange",
                                value: function(e) {
                                    var t = this.state.permissionBooleans;
                                    (t[e] = !t[e]),
                                        this.setState({permissionBooleans: t});
                                }
                            },
                            {
                                key: "_onClaimInput",
                                value: function(e) {
                                    this.setState({claimFeesAmount: e.amount});
                                }
                            },
                            {
                                key: "_onClaimFees",
                                value: function() {
                                    c.a.claimPoolFees(
                                        this.props.account.get("id"),
                                        this.props.asset,
                                        this.state.claimFeesAmount.replace(
                                            /,/g,
                                            ""
                                        )
                                    );
                                }
                            },
                            {
                                key: "onChangeList",
                                value: function(e) {
                                    var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : "add",
                                        a = arguments[2],
                                        s = this.state[e];
                                    "add" !== t || s.includes(a)
                                        ? "remove" === t &&
                                          s.includes(a) &&
                                          (s = s.remove(s.indexOf(a)))
                                        : (s = s.push(a)),
                                        this.setState(se({}, e, s));
                                }
                            },
                            {
                                key: "onChangeFeedProducerList",
                                value: function() {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : "add",
                                        t = arguments[1],
                                        a = this.state.feedProducers;
                                    "add" !== e || a.includes(t)
                                        ? "remove" === e &&
                                          a.includes(t) &&
                                          (a = a.remove(a.indexOf(t)))
                                        : (a = a.push(t)),
                                        this.setState({feedProducers: a}),
                                        this._validateEditFields({
                                            feedProducers: a
                                        });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e,
                                        t = this,
                                        a = this.props,
                                        s = a.account,
                                        r = a.asset,
                                        o = (a.core, this.state),
                                        c = o.errors,
                                        _ = o.isValid,
                                        b = o.update,
                                        g = o.core_exchange_rate,
                                        f = o.flagBooleans,
                                        y = o.permissionBooleans,
                                        C = o.claimFeesAmount,
                                        x = o.isBitAsset,
                                        O = o.bitasset_opts,
                                        S = r.get("symbol");
                                    e = n.a.createElement(h.a, {
                                        opType: "asset_update"
                                    });
                                    var P = m.b.getAsset(g.quote.asset_id),
                                        T = p.a.get_asset_precision(
                                            P.get("precision")
                                        ),
                                        I = m.b.getAsset(g.base.asset_id),
                                        B = p.a.get_asset_precision(
                                            I.get("precision")
                                        ),
                                        j = parseFloat(g.quote.amount) * T,
                                        F = parseFloat(g.base.amount) * B,
                                        q = N.a.getFlagBooleans(
                                            r.getIn([
                                                "options",
                                                "issuer_permissions"
                                            ]),
                                            void 0 !== r.get("bitasset")
                                        ),
                                        R = [],
                                        J = function(e, t, a) {
                                            return n.a.createElement(
                                                "table",
                                                {
                                                    key: "table_" + e,
                                                    className: "table"
                                                },
                                                n.a.createElement(
                                                    "tbody",
                                                    null,
                                                    n.a.createElement(
                                                        "tr",
                                                        null,
                                                        n.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    border:
                                                                        "none",
                                                                    width: "80%"
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets." +
                                                                        e
                                                                }
                                                            ),
                                                            ":"
                                                        ),
                                                        n.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    border:
                                                                        "none"
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "switch",
                                                                    style: {
                                                                        marginBottom:
                                                                            "10px"
                                                                    },
                                                                    onClick: t
                                                                },
                                                                n.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "checkbox",
                                                                        checked: a
                                                                    }
                                                                ),
                                                                n.a.createElement(
                                                                    "label",
                                                                    null
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            );
                                        };
                                    for (var D in q)
                                        q[D] &&
                                            "charge_market_fee" !== D &&
                                            R.push(
                                                J(
                                                    D,
                                                    this._onFlagChange.bind(
                                                        this,
                                                        D
                                                    ),
                                                    f[D]
                                                )
                                            );
                                    R.push(
                                        J(
                                            "visible",
                                            this._onUpdateDescription.bind(
                                                this,
                                                "visible"
                                            ),
                                            !b.description.visible &&
                                                !1 === b.description.visible
                                        )
                                    );
                                    var L = [];
                                    for (var M in q)
                                        L.push(
                                            n.a.createElement(
                                                "table",
                                                {
                                                    key: "table_" + M,
                                                    className: "table"
                                                },
                                                n.a.createElement(
                                                    "tbody",
                                                    null,
                                                    n.a.createElement(
                                                        "tr",
                                                        null,
                                                        n.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    border:
                                                                        "none",
                                                                    width: "80%"
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    content:
                                                                        "account.user_issued_assets." +
                                                                        M
                                                                }
                                                            ),
                                                            ":"
                                                        ),
                                                        n.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    border:
                                                                        "none"
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "switch",
                                                                    style: {
                                                                        marginBottom:
                                                                            "10px"
                                                                    },
                                                                    onClick: this._onPermissionChange.bind(
                                                                        this,
                                                                        M
                                                                    )
                                                                },
                                                                n.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "checkbox",
                                                                        checked:
                                                                            y[
                                                                                M
                                                                            ],
                                                                        onChange: function() {}
                                                                    }
                                                                ),
                                                                n.a.createElement(
                                                                    "label",
                                                                    null
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        );
                                    var W = 0;
                                    this.tabsChanged().forEach(function() {
                                        W++;
                                    });
                                    var H = n.a.createElement(
                                            "div",
                                            null,
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: l()("button", {
                                                        disabled:
                                                            !_ ||
                                                            !this.pageChanged()
                                                    }),
                                                    style: {width: "9rem"},
                                                    onClick:
                                                        W > 1
                                                            ? this._openConfirm.bind(
                                                                  this
                                                              )
                                                            : this._updateAsset.bind(
                                                                  this
                                                              )
                                                },
                                                W > 1
                                                    ? n.a.createElement(i.a, {
                                                          content:
                                                              "account.perm.save_all"
                                                      })
                                                    : n.a.createElement(i.a, {
                                                          content:
                                                              "account.perm.save"
                                                      })
                                            ),
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: l()(
                                                        "button primary hollow",
                                                        {
                                                            disabled: !this.pageChanged()
                                                        }
                                                    ),
                                                    onClick: this._reset.bind(
                                                        this
                                                    )
                                                },
                                                n.a.createElement(i.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        ),
                                        G = this.props.getDynamicObject(
                                            r.get("dynamic_asset_data_id")
                                        ),
                                        V = G ? G.get("accumulated_fees") : 0,
                                        z =
                                            C > 0 &&
                                            p.a.get_asset_precision(
                                                r.get("precision")
                                            ) *
                                                C <=
                                                V,
                                        X = n.a.createElement(
                                            "span",
                                            null,
                                            n.a.createElement(i.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ": ",
                                            n.a.createElement(d.a, {
                                                amount: V,
                                                asset: r.get("id")
                                            })
                                        ),
                                        Q = !1;
                                    ("1.3.0" !== P.get("id") &&
                                        "1.3.0" !== I.get("id")) ||
                                        (P.get("id") !== r.get("id") &&
                                            I.get("id") !== r.get("id")) ||
                                        (Q = !0);
                                    var Z = r.getIn([
                                            "bitasset",
                                            "is_prediction_market"
                                        ]),
                                        $ = N.a.parseDescription(
                                            this.props.asset.toJS().options
                                                .description
                                        );
                                    return n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content app-tables no-padding",
                                            ref: "appTables"
                                        },
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "content-block small-12"
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "tabs-container generic-bordered-box"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {className: "tabs-header"},
                                                    n.a.createElement(
                                                        "h3",
                                                        null,
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "header.update_asset"
                                                        }),
                                                        ":",
                                                        " ",
                                                        S
                                                    )
                                                ),
                                                n.a.createElement(
                                                    A.b,
                                                    {
                                                        setting:
                                                            "updateAssetTab",
                                                        className:
                                                            "account-tabs",
                                                        tabsClass:
                                                            "account-overview bordered-header content-block",
                                                        contentClass:
                                                            "grid-block padding-top shrink small-vertical medium-horizontal",
                                                        segmented: !1,
                                                        actionButtons: H,
                                                        onChangeTab: function(
                                                            e
                                                        ) {
                                                            t.setState({
                                                                activeTab: e
                                                            });
                                                        }
                                                    },
                                                    n.a.createElement(
                                                        A.a,
                                                        {
                                                            title:
                                                                "account.user_issued_assets.primary",
                                                            updatedTab: this.tabChanged(
                                                                0
                                                            )
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "small-12 large-8 large-offset-2 grid-content"
                                                            },
                                                            n.a.createElement(
                                                                "label",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.precision"
                                                                    }
                                                                ),
                                                                n.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    ": ",
                                                                    r.get(
                                                                        "precision"
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "br",
                                                                null
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null,
                                                                n.a.createElement(
                                                                    E.a,
                                                                    {
                                                                        label:
                                                                            "account.user_issued_assets.max_supply",
                                                                        amount:
                                                                            b.max_supply,
                                                                        onChange: this._onUpdateInput.bind(
                                                                            this,
                                                                            "max_supply"
                                                                        ),
                                                                        asset: r.get(
                                                                            "id"
                                                                        ),
                                                                        assets: [
                                                                            r.get(
                                                                                "id"
                                                                            )
                                                                        ],
                                                                        placeholder:
                                                                            "0.0",
                                                                        tabIndex: 1
                                                                    }
                                                                )
                                                            ),
                                                            c.max_supply
                                                                ? n.a.createElement(
                                                                      "p",
                                                                      {
                                                                          className:
                                                                              "grid-content has-error"
                                                                      },
                                                                      c.max_supply
                                                                  )
                                                                : null,
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    component:
                                                                        "h3",
                                                                    content:
                                                                        "account.user_issued_assets.core_exchange_rate"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null,
                                                                n.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "grid-block no-margin"
                                                                    },
                                                                    Q
                                                                        ? null
                                                                        : n.a.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "grid-block no-margin small-12 medium-6"
                                                                              },
                                                                              n.a.createElement(
                                                                                  w.a,
                                                                                  {
                                                                                      label:
                                                                                          "account.user_issued_assets.quote_name",
                                                                                      onChange: this._onInputCoreAsset.bind(
                                                                                          this,
                                                                                          "quote"
                                                                                      ),
                                                                                      asset: this
                                                                                          .state
                                                                                          .quoteAssetInput,
                                                                                      assetInput: this
                                                                                          .state
                                                                                          .quoteAssetInput,
                                                                                      tabIndex: 1,
                                                                                      style: {
                                                                                          width:
                                                                                              "100%",
                                                                                          paddingRight:
                                                                                              "10px"
                                                                                      },
                                                                                      onFound: this._onFoundCoreAsset.bind(
                                                                                          this,
                                                                                          "quote"
                                                                                      )
                                                                                  }
                                                                              )
                                                                          ),
                                                                    Q
                                                                        ? null
                                                                        : n.a.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "grid-block no-margin small-12 medium-6"
                                                                              },
                                                                              n.a.createElement(
                                                                                  w.a,
                                                                                  {
                                                                                      label:
                                                                                          "account.user_issued_assets.base_name",
                                                                                      onChange: this._onInputCoreAsset.bind(
                                                                                          this,
                                                                                          "base"
                                                                                      ),
                                                                                      asset: this
                                                                                          .state
                                                                                          .baseAssetInput,
                                                                                      assetInput: this
                                                                                          .state
                                                                                          .baseAssetInput,
                                                                                      tabIndex: 1,
                                                                                      style: {
                                                                                          width:
                                                                                              "100%",
                                                                                          paddingLeft:
                                                                                              "10px"
                                                                                      },
                                                                                      onFound: this._onFoundCoreAsset.bind(
                                                                                          this,
                                                                                          "base"
                                                                                      )
                                                                                  }
                                                                              )
                                                                          ),
                                                                    c.quote_asset
                                                                        ? n.a.createElement(
                                                                              "p",
                                                                              {
                                                                                  className:
                                                                                      "grid-content has-error"
                                                                              },
                                                                              c.quote_asset
                                                                          )
                                                                        : null,
                                                                    c.base_asset
                                                                        ? n.a.createElement(
                                                                              "p",
                                                                              {
                                                                                  className:
                                                                                      "grid-content has-error"
                                                                              },
                                                                              c.base_asset
                                                                          )
                                                                        : null,
                                                                    n.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "grid-block no-margin small-12 medium-6"
                                                                        },
                                                                        n.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                label:
                                                                                    "account.user_issued_assets.quote",
                                                                                amount:
                                                                                    g
                                                                                        .quote
                                                                                        .amount,
                                                                                onChange: this._onCoreRateChange.bind(
                                                                                    this,
                                                                                    "quote"
                                                                                ),
                                                                                asset:
                                                                                    g
                                                                                        .quote
                                                                                        .asset_id,
                                                                                assets: [
                                                                                    g
                                                                                        .quote
                                                                                        .asset_id
                                                                                ],
                                                                                placeholder:
                                                                                    "0.0",
                                                                                tabIndex: 1,
                                                                                style: {
                                                                                    width:
                                                                                        "100%",
                                                                                    paddingRight:
                                                                                        "10px"
                                                                                }
                                                                            }
                                                                        )
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "grid-block no-margin small-12 medium-6"
                                                                        },
                                                                        n.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                label:
                                                                                    "account.user_issued_assets.base",
                                                                                amount:
                                                                                    g
                                                                                        .base
                                                                                        .amount,
                                                                                onChange: this._onCoreRateChange.bind(
                                                                                    this,
                                                                                    "base"
                                                                                ),
                                                                                asset:
                                                                                    g
                                                                                        .base
                                                                                        .asset_id,
                                                                                assets: [
                                                                                    g
                                                                                        .base
                                                                                        .asset_id
                                                                                ],
                                                                                placeholder:
                                                                                    "0.0",
                                                                                tabIndex: 1,
                                                                                style: {
                                                                                    width:
                                                                                        "100%",
                                                                                    paddingLeft:
                                                                                        "10px"
                                                                                }
                                                                            }
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "h5",
                                                                        null,
                                                                        n.a.createElement(
                                                                            i.a,
                                                                            {
                                                                                content:
                                                                                    "exchange.price"
                                                                            }
                                                                        ),
                                                                        ":",
                                                                        " ",
                                                                        n.a.createElement(
                                                                            v.a,
                                                                            {
                                                                                style: {
                                                                                    fontWeight:
                                                                                        "bold"
                                                                                },
                                                                                quote_amount: j,
                                                                                quote_asset:
                                                                                    g
                                                                                        .quote
                                                                                        .asset_id,
                                                                                base_asset:
                                                                                    g
                                                                                        .base
                                                                                        .asset_id,
                                                                                base_amount: F
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.cer_warning_1",
                                                                        component:
                                                                            "label",
                                                                        className:
                                                                            "has-error"
                                                                    }
                                                                ),
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.cer_warning_2",
                                                                        component:
                                                                            "p"
                                                                    }
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "p",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.approx_fee"
                                                                    }
                                                                ),
                                                                ":",
                                                                " ",
                                                                e
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        A.a,
                                                        {
                                                            title:
                                                                "account.whitelist.title",
                                                            updatedTab: this.tabChanged(
                                                                1
                                                            )
                                                        },
                                                        n.a.createElement(
                                                            K,
                                                            {
                                                                whiteListEnabled:
                                                                    f.white_list,
                                                                whitelist_authorities: this
                                                                    .state
                                                                    .whitelist_authorities,
                                                                blacklist_authorities: this
                                                                    .state
                                                                    .blacklist_authorities,
                                                                whitelist_markets: this
                                                                    .state
                                                                    .whitelist_markets,
                                                                blacklist_markets: this
                                                                    .state
                                                                    .blacklist_markets,
                                                                new_authority_id: this
                                                                    .state
                                                                    .new_authority_id,
                                                                authority_name: this
                                                                    .state
                                                                    .authority_name,
                                                                onAccountNameChanged: this.onAccountNameChanged.bind(
                                                                    this
                                                                ),
                                                                onAccountChanged: this.onAccountChanged.bind(
                                                                    this
                                                                ),
                                                                onChangeList: this.onChangeList.bind(
                                                                    this
                                                                )
                                                            },
                                                            n.a.createElement(
                                                                "p",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.approx_fee"
                                                                    }
                                                                ),
                                                                ":",
                                                                " ",
                                                                e
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        A.a,
                                                        {
                                                            title:
                                                                "account.user_issued_assets.description",
                                                            updatedTab: this.tabChanged(
                                                                2
                                                            )
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "small-12 large-8 large-offset-2 grid-content"
                                                            },
                                                            n.a.createElement(
                                                                "label",
                                                                null,
                                                                n.a.createElement(
                                                                    "textarea",
                                                                    {
                                                                        style: {
                                                                            height:
                                                                                "7rem"
                                                                        },
                                                                        rows:
                                                                            "1",
                                                                        value:
                                                                            b
                                                                                .description
                                                                                .main ||
                                                                            "",
                                                                        onChange: this._onUpdateDescription.bind(
                                                                            this,
                                                                            "main"
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    component:
                                                                        "h3",
                                                                    content:
                                                                        "account.user_issued_assets.short"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null,
                                                                n.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "text",
                                                                        rows:
                                                                            "1",
                                                                        value:
                                                                            b
                                                                                .description
                                                                                .short_name ||
                                                                            "",
                                                                        onChange: this._onUpdateDescription.bind(
                                                                            this,
                                                                            "short_name"
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    component:
                                                                        "h3",
                                                                    content:
                                                                        "account.user_issued_assets.market"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    label:
                                                                        "account.user_issued_assets.name",
                                                                    onChange: this._onInputMarket.bind(
                                                                        this
                                                                    ),
                                                                    placeholder:
                                                                        $.market,
                                                                    asset: this
                                                                        .state
                                                                        .marketInput,
                                                                    assetInput: this
                                                                        .state
                                                                        .marketInput,
                                                                    style: {
                                                                        width:
                                                                            "100%",
                                                                        paddingRight:
                                                                            "10px",
                                                                        paddingBottom:
                                                                            "20px"
                                                                    },
                                                                    onFound: this._onFoundMarketAsset.bind(
                                                                        this
                                                                    )
                                                                }
                                                            ),
                                                            c.invalid_market_pair
                                                                ? n.a.createElement(
                                                                      "p",
                                                                      {
                                                                          className:
                                                                              "grid-content has-error"
                                                                      },
                                                                      c.invalid_market_pair
                                                                  )
                                                                : null,
                                                            Z
                                                                ? n.a.createElement(
                                                                      "div",
                                                                      null,
                                                                      n.a.createElement(
                                                                          i.a,
                                                                          {
                                                                              component:
                                                                                  "h3",
                                                                              content:
                                                                                  "account.user_issued_assets.condition"
                                                                          }
                                                                      ),
                                                                      n.a.createElement(
                                                                          "label",
                                                                          null,
                                                                          n.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  type:
                                                                                      "text",
                                                                                  rows:
                                                                                      "1",
                                                                                  value:
                                                                                      b
                                                                                          .description
                                                                                          .condition,
                                                                                  onChange: this._onUpdateDescription.bind(
                                                                                      this,
                                                                                      "condition"
                                                                                  )
                                                                              }
                                                                          )
                                                                      ),
                                                                      n.a.createElement(
                                                                          i.a,
                                                                          {
                                                                              component:
                                                                                  "h3",
                                                                              content:
                                                                                  "account.user_issued_assets.expiry"
                                                                          }
                                                                      ),
                                                                      n.a.createElement(
                                                                          "label",
                                                                          null,
                                                                          n.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  type:
                                                                                      "date",
                                                                                  value:
                                                                                      b
                                                                                          .description
                                                                                          .expiry,
                                                                                  onChange: this._onUpdateDescription.bind(
                                                                                      this,
                                                                                      "expiry"
                                                                                  )
                                                                              }
                                                                          )
                                                                      )
                                                                  )
                                                                : null,
                                                            n.a.createElement(
                                                                "p",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.approx_fee"
                                                                    }
                                                                ),
                                                                ":",
                                                                " ",
                                                                e
                                                            )
                                                        )
                                                    ),
                                                    x
                                                        ? n.a.createElement(
                                                              A.a,
                                                              {
                                                                  title:
                                                                      "account.user_issued_assets.bitasset_opts",
                                                                  updatedTab: this.tabChanged(
                                                                      3
                                                                  )
                                                              },
                                                              n.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "small-12 large-8 large-offset-2 grid-content"
                                                                  },
                                                                  n.a.createElement(
                                                                      U,
                                                                      {
                                                                          bitasset_opts: O,
                                                                          onUpdate: this.onChangeBitAssetOpts.bind(
                                                                              this
                                                                          ),
                                                                          backingAsset:
                                                                              O.short_backing_asset,
                                                                          assetPrecision: r.get(
                                                                              "precision"
                                                                          ),
                                                                          assetSymbol: r.get(
                                                                              "symbol"
                                                                          )
                                                                      }
                                                                  ),
                                                                  n.a.createElement(
                                                                      "p",
                                                                      null,
                                                                      n.a.createElement(
                                                                          i.a,
                                                                          {
                                                                              content:
                                                                                  "account.user_issued_assets.approx_fee"
                                                                          }
                                                                      ),
                                                                      ":",
                                                                      " ",
                                                                      e
                                                                  )
                                                              )
                                                          )
                                                        : null,
                                                    n.a.createElement(
                                                        A.a,
                                                        {
                                                            title:
                                                                "account.user_issued_assets.update_owner",
                                                            updatedTab: this.tabChanged(
                                                                4
                                                            )
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "small-12 large-8 large-offset-2 grid-content"
                                                            },
                                                            n.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        paddingBottom:
                                                                            "1rem"
                                                                    }
                                                                },
                                                                n.a.createElement(
                                                                    k.a,
                                                                    {
                                                                        label:
                                                                            "account.user_issued_assets.current_issuer",
                                                                        accountName: s.get(
                                                                            "name"
                                                                        ),
                                                                        account: s.get(
                                                                            "name"
                                                                        ),
                                                                        error: null,
                                                                        tabIndex: 1,
                                                                        disabled: !0
                                                                    }
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                k.a,
                                                                {
                                                                    label:
                                                                        "account.user_issued_assets.new_issuer",
                                                                    accountName: this
                                                                        .state
                                                                        .issuer_account_name,
                                                                    onChange: this.onAccountNameChanged.bind(
                                                                        this,
                                                                        "issuer_account_name"
                                                                    ),
                                                                    onAccountChanged: this.onAccountChanged.bind(
                                                                        this,
                                                                        "new_issuer_account_id"
                                                                    ),
                                                                    account: this
                                                                        .state
                                                                        .issuer_account_name,
                                                                    error: null,
                                                                    tabIndex: 1,
                                                                    typeahead: !0
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "p",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.approx_fee"
                                                                    }
                                                                ),
                                                                ":",
                                                                " ",
                                                                e
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        A.a,
                                                        {
                                                            title:
                                                                "account.permissions",
                                                            updatedTab: this.tabChanged(
                                                                5
                                                            )
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "small-12 large-8 large-offset-2 grid-content"
                                                            },
                                                            n.a.createElement(
                                                                u.a,
                                                                {
                                                                    path:
                                                                        "components/AccountAssetCreate",
                                                                    section:
                                                                        "permissions"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "p",
                                                                {
                                                                    className:
                                                                        "grid-content has-error"
                                                                },
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.perm_warning"
                                                                    }
                                                                )
                                                            ),
                                                            L,
                                                            n.a.createElement(
                                                                "p",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.approx_fee"
                                                                    }
                                                                ),
                                                                ":",
                                                                " ",
                                                                e
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        A.a,
                                                        {
                                                            title:
                                                                "account.user_issued_assets.flags",
                                                            updatedTab: this.tabChanged(
                                                                6
                                                            )
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "small-12 large-8 large-offset-2 grid-content"
                                                            },
                                                            n.a.createElement(
                                                                u.a,
                                                                {
                                                                    path:
                                                                        "components/AccountAssetCreate",
                                                                    section:
                                                                        "flags"
                                                                }
                                                            ),
                                                            q.charge_market_fee
                                                                ? n.a.createElement(
                                                                      "div",
                                                                      null,
                                                                      n.a.createElement(
                                                                          i.a,
                                                                          {
                                                                              component:
                                                                                  "h3",
                                                                              content:
                                                                                  "account.user_issued_assets.market_fee"
                                                                          }
                                                                      ),
                                                                      n.a.createElement(
                                                                          "table",
                                                                          {
                                                                              className:
                                                                                  "table"
                                                                          },
                                                                          n.a.createElement(
                                                                              "tbody",
                                                                              null,
                                                                              n.a.createElement(
                                                                                  "tr",
                                                                                  null,
                                                                                  n.a.createElement(
                                                                                      "td",
                                                                                      {
                                                                                          style: {
                                                                                              border:
                                                                                                  "none",
                                                                                              width:
                                                                                                  "80%"
                                                                                          }
                                                                                      },
                                                                                      n.a.createElement(
                                                                                          i.a,
                                                                                          {
                                                                                              content:
                                                                                                  "account.user_issued_assets.charge_market_fee"
                                                                                          }
                                                                                      ),
                                                                                      ":"
                                                                                  ),
                                                                                  n.a.createElement(
                                                                                      "td",
                                                                                      {
                                                                                          style: {
                                                                                              border:
                                                                                                  "none"
                                                                                          }
                                                                                      },
                                                                                      n.a.createElement(
                                                                                          "div",
                                                                                          {
                                                                                              className:
                                                                                                  "switch",
                                                                                              style: {
                                                                                                  marginBottom:
                                                                                                      "10px"
                                                                                              },
                                                                                              onClick: this._onFlagChange.bind(
                                                                                                  this,
                                                                                                  "charge_market_fee"
                                                                                              )
                                                                                          },
                                                                                          n.a.createElement(
                                                                                              "input",
                                                                                              {
                                                                                                  type:
                                                                                                      "checkbox",
                                                                                                  onChange: function() {},
                                                                                                  checked:
                                                                                                      f.charge_market_fee
                                                                                              }
                                                                                          ),
                                                                                          n.a.createElement(
                                                                                              "label",
                                                                                              null
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      n.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className: l()(
                                                                                  {
                                                                                      disabled: !f.charge_market_fee
                                                                                  }
                                                                              )
                                                                          },
                                                                          n.a.createElement(
                                                                              "label",
                                                                              null,
                                                                              n.a.createElement(
                                                                                  i.a,
                                                                                  {
                                                                                      content:
                                                                                          "account.user_issued_assets.market_fee"
                                                                                  }
                                                                              ),
                                                                              " ",
                                                                              "(%)",
                                                                              n.a.createElement(
                                                                                  "input",
                                                                                  {
                                                                                      type:
                                                                                          "number",
                                                                                      value:
                                                                                          b.market_fee_percent,
                                                                                      onChange: this._onUpdateInput.bind(
                                                                                          this,
                                                                                          "market_fee_percent"
                                                                                      )
                                                                                  }
                                                                              )
                                                                          ),
                                                                          n.a.createElement(
                                                                              "label",
                                                                              null,
                                                                              n.a.createElement(
                                                                                  E.a,
                                                                                  {
                                                                                      label:
                                                                                          "account.user_issued_assets.max_market_fee",
                                                                                      amount:
                                                                                          b.max_market_fee,
                                                                                      onChange: this._onUpdateInput.bind(
                                                                                          this,
                                                                                          "max_market_fee"
                                                                                      ),
                                                                                      asset: r.get(
                                                                                          "id"
                                                                                      ),
                                                                                      assets: [
                                                                                          r.get(
                                                                                              "id"
                                                                                          )
                                                                                      ],
                                                                                      placeholder:
                                                                                          "0.0",
                                                                                      tabIndex: 1
                                                                                  }
                                                                              )
                                                                          ),
                                                                          c.max_market_fee
                                                                              ? n.a.createElement(
                                                                                    "p",
                                                                                    {
                                                                                        className:
                                                                                            "grid-content has-error"
                                                                                    },
                                                                                    c.max_market_fee
                                                                                )
                                                                              : null
                                                                      )
                                                                  )
                                                                : null,
                                                            n.a.createElement(
                                                                "h3",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.flags"
                                                                    }
                                                                )
                                                            ),
                                                            R,
                                                            n.a.createElement(
                                                                "p",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.approx_fee"
                                                                    }
                                                                ),
                                                                ":",
                                                                " ",
                                                                e
                                                            ),
                                                            c.conflict_producer
                                                                ? n.a.createElement(
                                                                      "p",
                                                                      {
                                                                          className:
                                                                              "grid-content has-error"
                                                                      },
                                                                      c.conflict_producer
                                                                  )
                                                                : null
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        A.a,
                                                        {
                                                            title:
                                                                "explorer.asset.fee_pool.title"
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "small-12 large-8 large-offset-2 grid-content"
                                                            },
                                                            n.a.createElement(
                                                                ee.a,
                                                                {
                                                                    asset: r.get(
                                                                        "symbol"
                                                                    ),
                                                                    funderAccountName: this.props.account.get(
                                                                        "name"
                                                                    )
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    component:
                                                                        "h3",
                                                                    content:
                                                                        "transaction.trxTypes.asset_claim_fees"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                i.a,
                                                                {
                                                                    component:
                                                                        "p",
                                                                    content:
                                                                        "explorer.asset.fee_pool.claim_text",
                                                                    asset: r.get(
                                                                        "symbol"
                                                                    )
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        paddingBottom:
                                                                            "1rem"
                                                                    }
                                                                },
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "explorer.asset.fee_pool.unclaimed_issuer_income"
                                                                    }
                                                                ),
                                                                ": ",
                                                                G
                                                                    ? n.a.createElement(
                                                                          d.a,
                                                                          {
                                                                              amount: G.get(
                                                                                  "accumulated_fees"
                                                                              ),
                                                                              asset: r.get(
                                                                                  "id"
                                                                              )
                                                                          }
                                                                      )
                                                                    : null
                                                            ),
                                                            n.a.createElement(
                                                                E.a,
                                                                {
                                                                    label:
                                                                        "transfer.amount",
                                                                    display_balance: X,
                                                                    amount: C,
                                                                    onChange: this._onClaimInput.bind(
                                                                        this
                                                                    ),
                                                                    asset: r.get(
                                                                        "id"
                                                                    ),
                                                                    assets: [
                                                                        r.get(
                                                                            "id"
                                                                        )
                                                                    ],
                                                                    placeholder:
                                                                        "0.0",
                                                                    tabIndex: 1,
                                                                    style: {
                                                                        width:
                                                                            "100%",
                                                                        paddingTop: 16
                                                                    }
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        paddingTop:
                                                                            "1rem"
                                                                    }
                                                                },
                                                                n.a.createElement(
                                                                    "button",
                                                                    {
                                                                        className: l()(
                                                                            "button",
                                                                            {
                                                                                disabled: !z
                                                                            }
                                                                        ),
                                                                        onClick: this._onClaimFees.bind(
                                                                            this
                                                                        )
                                                                    },
                                                                    n.a.createElement(
                                                                        i.a,
                                                                        {
                                                                            content:
                                                                                "explorer.asset.fee_pool.claim_fees"
                                                                        }
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "button",
                                                                    {
                                                                        className:
                                                                            "button outline",
                                                                        onClick: this._reset.bind(
                                                                            this
                                                                        )
                                                                    },
                                                                    n.a.createElement(
                                                                        i.a,
                                                                        {
                                                                            content:
                                                                                "account.perm.reset"
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    x
                                                        ? n.a.createElement(
                                                              A.a,
                                                              {
                                                                  title:
                                                                      "account.user_issued_assets.feed_producers",
                                                                  updatedTab: this.tabChanged(
                                                                      8
                                                                  )
                                                              },
                                                              n.a.createElement(
                                                                  Y,
                                                                  {
                                                                      asset: this
                                                                          .props
                                                                          .asset,
                                                                      account: this
                                                                          .props
                                                                          .account,
                                                                      witnessFed:
                                                                          f.witness_fed_asset,
                                                                      committeeFed:
                                                                          f.committee_fed_asset,
                                                                      producers: this
                                                                          .state
                                                                          .feedProducers,
                                                                      onChangeList: this.onChangeFeedProducerList.bind(
                                                                          this
                                                                      )
                                                                  }
                                                              ),
                                                              c.max_feed_producer
                                                                  ? n.a.createElement(
                                                                        "p",
                                                                        {
                                                                            className:
                                                                                "grid-content has-error large-8 large-offset-2",
                                                                            style: {
                                                                                marginTop:
                                                                                    "20px"
                                                                            }
                                                                        },
                                                                        c.max_feed_producer
                                                                    )
                                                                  : null
                                                          )
                                                        : null
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            ce,
                                            te(
                                                {
                                                    modalId:
                                                        "asset_update_modal",
                                                    ref: "confirm_modal",
                                                    tabsChanged: this.tabsChanged(),
                                                    _cancelConfirm: this._cancelConfirm.bind(
                                                        this
                                                    ),
                                                    _updateAsset: this._updateAsset.bind(
                                                        this
                                                    )
                                                },
                                                this.props
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (le.propTypes = {globalObject: g.a.ChainObject.isRequired}),
                (le.defaultProps = {globalObject: "2.0.0"}),
                (le = Object(f.a)(le)),
                (le = Object(y.a)(le, {
                    propNames: ["asset", "core"],
                    defaultProps: {core: "1.3.0"},
                    withDynamic: !0
                }));
            var ce = (function(e) {
                    function t() {
                        ne(this, t);
                        var e = re(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {open: !1}), e;
                    }
                    return (
                        ie(t, n.a.Component),
                        ae(t, [
                            {
                                key: "show",
                                value: function() {
                                    var e = this;
                                    this.setState({open: !0}, function() {
                                        $.a.publish(e.props.modalId, "open");
                                    });
                                }
                            },
                            {
                                key: "onClose",
                                value: function() {
                                    this.setState({open: !1});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.tabsChanged;
                                    return this.state.open
                                        ? n.a.createElement(
                                              Q.a,
                                              {
                                                  id: this.props.modalId,
                                                  overlay: !0,
                                                  modalHeader:
                                                      "account.confirm_asset_modal.header",
                                                  noLogo: !0
                                              },
                                              n.a.createElement(i.a, {
                                                  content:
                                                      "account.confirm_asset_modal.are_you_sure",
                                                  component: "div",
                                                  style: {paddingBottom: "1rem"}
                                              }),
                                              n.a.createElement(
                                                  "div",
                                                  null,
                                                  n.a.createElement(
                                                      "ul",
                                                      null,
                                                      e[0]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.primary"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      e[1]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.whitelist.title"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      e[2]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.description"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      e[3]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.bitasset_opts"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      e[4]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.update_owner"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      e[5]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.permissions"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      e[6]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.flags"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      e[8]
                                                          ? n.a.createElement(
                                                                "li",
                                                                null,
                                                                n.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.feed_producers"
                                                                    }
                                                                )
                                                            )
                                                          : null
                                                  )
                                              ),
                                              n.a.createElement(
                                                  "div",
                                                  null,
                                                  n.a.createElement(
                                                      "button",
                                                      {
                                                          className:
                                                              "button primary",
                                                          onClick: this.props._updateAsset.bind(
                                                              this
                                                          )
                                                      },
                                                      n.a.createElement(i.a, {
                                                          content:
                                                              "global.confirm"
                                                      })
                                                  ),
                                                  n.a.createElement(
                                                      "button",
                                                      {
                                                          className:
                                                              "button primary hollow",
                                                          onClick: this.props._cancelConfirm.bind(
                                                              this
                                                          )
                                                      },
                                                      n.a.createElement(i.a, {
                                                          content:
                                                              "global.cancel"
                                                      })
                                                  )
                                              )
                                          )
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ue = (function(e) {
                    function t() {
                        return (
                            ne(this, t),
                            re(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        ie(t, n.a.Component),
                        ae(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.params.asset;
                                    return n.a.createElement(
                                        le,
                                        te({asset: e}, this.props)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            t.default = ue;
        },
        72: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return y;
            }),
                a.d(t, "a", function() {
                    return f;
                });
            var s = a(0),
                n = a.n(s),
                r = a(2),
                i = a.n(r),
                o = (a(1), a(9)),
                l = a.n(o),
                c = a(15),
                u = a(10),
                p = a(8),
                m = a(3),
                d = a.n(m),
                h = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            function _(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function b(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function g(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var f = (function(e) {
                function t() {
                    return (
                        _(this, t),
                        b(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    g(t, n.a.Component),
                    h(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    a = e.index,
                                    s = e.changeTab,
                                    r = e.title,
                                    i = e.className,
                                    o = e.updatedTab,
                                    c = e.disabled,
                                    u = e.subText,
                                    p = l()({"is-active": t}, i);
                                return (
                                    "string" == typeof r &&
                                        r.indexOf(".") > 0 &&
                                        (r = d.a.translate(r)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          n.a.createElement(
                                              "option",
                                              {
                                                  value: a,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              n.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  r,
                                                  o ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : n.a.createElement(
                                              "li",
                                              {
                                                  className: p,
                                                  onClick: c
                                                      ? null
                                                      : s.bind(
                                                            this,
                                                            a,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              n.a.createElement(
                                                  "a",
                                                  null,
                                                  n.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      r,
                                                      o ? "*" : ""
                                                  ),
                                                  u &&
                                                      n.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "tab-subtext"
                                                          },
                                                          u
                                                      )
                                              )
                                          )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (f.propTypes = {
                changeTab: i.a.func,
                isActive: i.a.bool.isRequired,
                index: i.a.number.isRequired,
                className: i.a.string,
                isLinkTo: i.a.string,
                subText: i.a.oneOfType([i.a.object, i.a.string])
            }),
                (f.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var y = (function(e) {
                function t(e) {
                    _(this, t);
                    var a = b(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (a._setDimensions = a._setDimensions.bind(a)),
                        a
                    );
                }
                return (
                    g(t, n.a.Component),
                    h(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._setDimensions(),
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = e.viewSettings.get(e.setting);
                                t !==
                                    this.props.viewSettings.get(
                                        this.props.setting
                                    ) && this.setState({activeTab: t});
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener(
                                    "resize",
                                    this._setDimensions
                                );
                            }
                        },
                        {
                            key: "_setDimensions",
                            value: function() {
                                var e = window.innerWidth;
                                e !== this.state.width &&
                                    this.setState({width: e});
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e, t) {
                                e !== this.state.activeTab &&
                                    ("" === t
                                        ? (this.props.setting &&
                                              u.a.changeViewSetting(
                                                  (function(e, t, a) {
                                                      return (
                                                          t in e
                                                              ? Object.defineProperty(
                                                                    e,
                                                                    t,
                                                                    {
                                                                        value: a,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    }
                                                                )
                                                              : (e[t] = a),
                                                          e
                                                      );
                                                  })({}, this.props.setting, e)
                                              ),
                                          this.setState({activeTab: e}),
                                          this.props.onChangeTab &&
                                              this.props.onChangeTab(e))
                                        : this.context.router.push(t));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.children,
                                    s = t.contentClass,
                                    r = t.tabsClass,
                                    i = t.style,
                                    o = t.segmented,
                                    c =
                                        this.state.width < 900 &&
                                        n.a.Children.count(a) > 2,
                                    u = null,
                                    p = n.a.Children.map(a, function(t, a) {
                                        if (!t) return null;
                                        if (c && t.props.disabled) return null;
                                        var s = a === e.state.activeTab;
                                        return (
                                            s && (u = t.props.children),
                                            n.a.cloneElement(t, {
                                                collapsed: c,
                                                isActive: s,
                                                changeTab: e._changeTab.bind(e),
                                                index: a
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = p[0].props.children),
                                    n.a.createElement(
                                        "div",
                                        {
                                            className: l()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        n.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            n.a.createElement(
                                                "ul",
                                                {
                                                    style: i,
                                                    className: l()(
                                                        "button-group no-margin",
                                                        r,
                                                        {segmented: o}
                                                    )
                                                },
                                                c
                                                    ? n.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          n.a.createElement(
                                                              "select",
                                                              {
                                                                  value: this
                                                                      .state
                                                                      .activeTab,
                                                                  style: {
                                                                      marginTop: 10,
                                                                      marginBottom: 10
                                                                  },
                                                                  className:
                                                                      "bts-select",
                                                                  onChange: function(
                                                                      t
                                                                  ) {
                                                                      var a = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          a,
                                                                          t
                                                                              .target[
                                                                              a
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              p
                                                          )
                                                      )
                                                    : p,
                                                this.props.actionButtons
                                                    ? n.a.createElement(
                                                          "li",
                                                          {
                                                              className:
                                                                  "tabs-action-buttons"
                                                          },
                                                          this.props
                                                              .actionButtons
                                                      )
                                                    : null
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {className: l()("tab-content", s)},
                                            u
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (y.propTypes = {
                setting: i.a.string,
                defaultActiveTab: i.a.number,
                segmented: i.a.bool
            }),
                (y.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (y.contextTypes = {router: i.a.object.isRequired}),
                (y = Object(c.connect)(y, {
                    listenTo: function() {
                        return [p.a];
                    },
                    getProps: function() {
                        return {viewSettings: p.a.getState().viewSettings};
                    }
                }));
        }
    }
]);