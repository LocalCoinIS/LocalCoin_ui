(window.webpackJsonp = window.webpackJsonp || []).push([
    [31],
    {
        357: function(e, t, a) {
            "use strict";
            var n = a(0),
                s = a.n(n),
                o = a(1),
                i = a.n(o),
                r = a(5),
                c = a(57),
                l = a(3),
                u = a.n(l),
                p = a(43),
                m = a(77),
                h = a(4),
                d = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var b = (function(e) {
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (a.state = {amount: 0, showError: !1}), a;
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
                    })(t, s.a.Component),
                    d(t, [
                        {
                            key: "onAmountChanged",
                            value: function(e) {
                                var t = e.amount,
                                    a = e.asset;
                                this.setState({amount: t, asset: a});
                            }
                        },
                        {
                            key: "getBalance",
                            value: function() {
                                var e = this,
                                    t = this.props.account.get("balances"),
                                    a = 0;
                                return (
                                    t &&
                                        t.forEach(function(t, n) {
                                            if (n == e.props.assetId) {
                                                var s = h.b.getObject(t);
                                                a = s.get("balance");
                                            }
                                        }),
                                    a
                                );
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                var e = r.a.get_asset_precision(
                                        this.state.asset.get("precision")
                                    ),
                                    t = this.state.amount.replace(/,/g, "");
                                t *= e;
                                var a = this.getBalance();
                                t <= 0 || t > a
                                    ? this.setState({showError: !0})
                                    : (this.setState({showError: !1}),
                                      m.a.reserveAsset(
                                          t,
                                          this.props.assetId,
                                          this.props.account.get("id")
                                      ),
                                      this.props.onClose());
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props.assetId;
                                return s.a.createElement(
                                    "form",
                                    {
                                        className:
                                            "grid-block vertical full-width-content"
                                    },
                                    s.a.createElement(i.a, {
                                        component: "h3",
                                        content: "modal.reserve.title"
                                    }),
                                    s.a.createElement(
                                        "div",
                                        {
                                            className: "grid-container ",
                                            style: {paddingTop: "2rem"}
                                        },
                                        s.a.createElement(
                                            "div",
                                            {
                                                className: "content-block",
                                                onClick: function() {
                                                    e.setState({showError: !1});
                                                }
                                            },
                                            s.a.createElement(p.a, {
                                                label: "modal.reserve.amount",
                                                amount: this.state.amount,
                                                onChange: this.onAmountChanged.bind(
                                                    this
                                                ),
                                                asset: t,
                                                assets: [t],
                                                display_balance: s.a.createElement(
                                                    c.a,
                                                    {
                                                        balance: this.props.account.getIn(
                                                            ["balances", t]
                                                        )
                                                    }
                                                ),
                                                tabIndex: 1
                                            })
                                        ),
                                        this.state.showError
                                            ? s.a.createElement(
                                                  "p",
                                                  {className: "errorModal"},
                                                  u.a.translate(
                                                      "exchange.invalid_amount"
                                                  )
                                              )
                                            : null,
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "content-block button-group"
                                            },
                                            s.a.createElement("input", {
                                                type: "submit",
                                                className: "button success",
                                                onClick: this.onSubmit.bind(
                                                    this
                                                ),
                                                value: u.a.translate(
                                                    "modal.reserve.submit"
                                                ),
                                                tabIndex: 2
                                            }),
                                            s.a.createElement(
                                                "div",
                                                {
                                                    className: "button",
                                                    onClick: this.props.onClose,
                                                    tabIndex: 3
                                                },
                                                u.a.translate("cancel")
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
            t.a = b;
        },
        4970: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(76),
                s = a(0),
                o = a.n(s),
                i = a(2),
                r = a.n(i),
                c = a(11),
                l = a(1),
                u = a.n(l),
                p = a(77),
                m = a(106),
                h = a(24),
                d = a(34),
                b = a(17),
                f = a(20),
                v = a.n(f),
                g = a(28),
                y = a(5),
                _ = a(37),
                E = a(576),
                k = a(357),
                w = a(15),
                C = a(48),
                T = a(7),
                N = a(50),
                O = (a(72), a(3)),
                S = a.n(O),
                x = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var j = (function(e) {
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (a.state = {
                            create: {
                                symbol: "",
                                name: "",
                                description: "",
                                max_supply: 1e15,
                                precision: 4
                            },
                            issue: {
                                amount: 0,
                                to: "",
                                to_id: "",
                                asset_id: "",
                                symbol: ""
                            },
                            errors: {symbol: null},
                            isValid: !1,
                            searchTerm: ""
                        }),
                        (a._searchAccounts = Object(n.a)(
                            a._searchAccounts,
                            150
                        )),
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
                    })(t, o.a.Component),
                    x(t, [
                        {
                            key: "_checkAssets",
                            value: function(e, t) {
                                if (!this.props.account.get("assets").size) {
                                    var a = e
                                        .sort(function(e, t) {
                                            return e.symbol > t.symbol
                                                ? 1
                                                : e.symbol < t.symbol
                                                    ? -1
                                                    : 0;
                                        })
                                        .last();
                                    0 === e.size || t
                                        ? (p.a.getAssetList.defer("A", 100),
                                          this.setState({assetsFetched: 100}))
                                        : e.size >= this.state.assetsFetched &&
                                          (p.a.getAssetList.defer(
                                              a.symbol,
                                              100
                                          ),
                                          this.setState({
                                              assetsFetched:
                                                  this.state.assetsFetched + 99
                                          }));
                                }
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this._checkAssets(e.assets);
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._checkAssets(this.props.assets, !0);
                            }
                        },
                        {
                            key: "_onIssueInput",
                            value: function(e, t) {
                                var a = t.target.id,
                                    n = this.state.issue;
                                if ("to" === a) {
                                    this._searchAccounts(t.target.value),
                                        (n.to = t.target.value);
                                    var s = this.props.searchAccounts.findEntry(
                                        function(e) {
                                            return e === t.target.value;
                                        }
                                    );
                                    n.to_id = s ? s[0] : null;
                                } else n[e] = t.target.value;
                                this.setState({issue: n});
                            }
                        },
                        {
                            key: "_searchAccounts",
                            value: function(e) {
                                h.a.accountSearch(e);
                            }
                        },
                        {
                            key: "_issueAsset",
                            value: function(e, t) {
                                var a = this;
                                t.preventDefault(),
                                    v.a.publish("issue_asset", "close");
                                var n = this.state.issue,
                                    s = this.props.assets.get(n.asset_id);
                                (n.amount *= y.a.get_asset_precision(
                                    s.precision
                                )),
                                    p.a.issueAsset(e, n).then(function(e) {
                                        e
                                            ? (g.a.addNotification({
                                                  message:
                                                      "Successfully issued " +
                                                      y.a.format_asset(
                                                          n.amount,
                                                          a.props.assets.get(
                                                              n.asset_id
                                                          )
                                                      ),
                                                  level: "success",
                                                  autoDismiss: 10
                                              }),
                                              ChainStore.getAsset(n.asset_id))
                                            : g.a.addNotification({
                                                  message:
                                                      "Failed to issue asset",
                                                  level: "error",
                                                  autoDismiss: 10
                                              });
                                    });
                            }
                        },
                        {
                            key: "_reserveButtonClick",
                            value: function(e, t) {
                                t.preventDefault(),
                                    this.setState({reserve: e}),
                                    v.a.publish("reserve_asset", "open");
                            }
                        },
                        {
                            key: "_reserveAsset",
                            value: function(e, t) {
                                t.preventDefault(),
                                    v.a.publish("reserve_asset", "close");
                                var a = this.state.issue,
                                    n = this.props.assets.get(a.asset_id);
                                (a.amount *= y.a.get_asset_precision(
                                    n.precision
                                )),
                                    p.a.issueAsset(e, a);
                            }
                        },
                        {
                            key: "_issueButtonClick",
                            value: function(e, t, a) {
                                a.preventDefault();
                                var n = this.state.issue;
                                (n.asset_id = e),
                                    (n.symbol = t),
                                    this.setState({issue: n}),
                                    v.a.publish("issue_asset", "open");
                            }
                        },
                        {
                            key: "_editButtonClick",
                            value: function(e, t, a) {
                                a.preventDefault(),
                                    this.props.router.push(
                                        "/account/" + t + "/update-asset/" + e
                                    );
                            }
                        },
                        {
                            key: "_onAccountSelect",
                            value: function(e) {
                                var t = this.state.issue;
                                (t.to = e),
                                    (t.to_id = this.props.account_name_to_id[
                                        e
                                    ]),
                                    this.setState({issue: t});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.account,
                                    n = t.account_name,
                                    s = t.assets,
                                    i = t.assetsList,
                                    r = !0;
                                if (!a)
                                    return o.a.createElement(_.a, {
                                        type: "circle"
                                    });
                                if ((a.notFound && (r = !1), !r))
                                    return o.a.createElement(
                                        "div",
                                        {className: "grid-block"},
                                        o.a.createElement(
                                            "h5",
                                            null,
                                            o.a.createElement(u.a, {
                                                component: "h5",
                                                content:
                                                    "account.errors.not_found",
                                                name: n
                                            })
                                        )
                                    );
                                i.length &&
                                    ((s = s.clear()),
                                    i.forEach(function(e) {
                                        e && (s = s.set(e.get("id"), e.toJS()));
                                    }));
                                var l = s
                                    .filter(function(e) {
                                        return e.issuer === a.get("id");
                                    })
                                    .sort(function(e, t) {
                                        return (
                                            parseInt(
                                                e.id.substring(4, e.id.length),
                                                10
                                            ) -
                                            parseInt(
                                                t.id.substring(4, t.id.length),
                                                10
                                            )
                                        );
                                    })
                                    .map(function(t) {
                                        var a = C.a.parseDescription(
                                                t.options.description
                                            ),
                                            s = a.short_name
                                                ? a.short_name
                                                : a.main;
                                        s.length > 100 &&
                                            (s = s.substr(0, 100) + "...");
                                        var i = e.props.getDynamicObject(
                                            t.dynamic_asset_data_id
                                        );
                                        return o.a.createElement(
                                            "tr",
                                            {key: t.symbol},
                                            o.a.createElement(
                                                "td",
                                                null,
                                                o.a.createElement(
                                                    c.b,
                                                    {to: "/asset/" + t.symbol},
                                                    t.symbol
                                                )
                                            ),
                                            o.a.createElement(
                                                "td",
                                                {style: {maxWidth: "250px"}},
                                                s
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                i
                                                    ? o.a.createElement(b.a, {
                                                          amount: parseInt(
                                                              i.get(
                                                                  "current_supply"
                                                              ),
                                                              10
                                                          ),
                                                          asset: t.id
                                                      })
                                                    : null
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                o.a.createElement(b.a, {
                                                    amount: parseInt(
                                                        t.options.max_supply,
                                                        10
                                                    ),
                                                    asset: t.id
                                                })
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                t.bitasset_data_id
                                                    ? null
                                                    : o.a.createElement(
                                                          "button",
                                                          {
                                                              onClick: e._issueButtonClick.bind(
                                                                  e,
                                                                  t.id,
                                                                  t.symbol
                                                              ),
                                                              className:
                                                                  "btn outline"
                                                          },
                                                          S.a.translate(
                                                              "transaction.trxTypes.asset_issue"
                                                          )
                                                      )
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                t.bitasset_data_id
                                                    ? null
                                                    : o.a.createElement(
                                                          "button",
                                                          {
                                                              onClick: e._reserveButtonClick.bind(
                                                                  e,
                                                                  t.id
                                                              ),
                                                              className:
                                                                  "btn outline"
                                                          },
                                                          o.a.createElement(
                                                              u.a,
                                                              {
                                                                  content:
                                                                      "transaction.trxTypes.asset_reserve"
                                                              }
                                                          )
                                                      )
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                o.a.createElement(
                                                    "button",
                                                    {
                                                        onClick: e._editButtonClick.bind(
                                                            e,
                                                            t.symbol,
                                                            n
                                                        ),
                                                        className: "btn outline"
                                                    },
                                                    S.a.translate(
                                                        "transaction.trxTypes.asset_update"
                                                    )
                                                )
                                            )
                                        );
                                    })
                                    .toArray();
                                return o.a.createElement(
                                    "div",
                                    null,
                                    o.a.createElement(
                                        "h2",
                                        {className: "content__heading"},
                                        S.a.translate(
                                            "account.user_issued_assets.issued_assets"
                                        )
                                    ),
                                    o.a.createElement(
                                        "div",
                                        {className: "negative-margins"},
                                        o.a.createElement(
                                            "div",
                                            {className: "container-fluid"},
                                            o.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                o.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "blue-bg with-borders"
                                                    },
                                                    o.a.createElement(
                                                        "thead",
                                                        null,
                                                        o.a.createElement(
                                                            "tr",
                                                            null,
                                                            o.a.createElement(
                                                                "th",
                                                                null,
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.symbol"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        maxWidth:
                                                                            "200px"
                                                                    }
                                                                },
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.description"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                u.a,
                                                                {
                                                                    component:
                                                                        "th",
                                                                    content:
                                                                        "markets.supply"
                                                                }
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                null,
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.max_supply"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "center"
                                                                    },
                                                                    colSpan: "3"
                                                                },
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.perm.action"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    o.a.createElement(
                                                        "tbody",
                                                        null,
                                                        l
                                                    )
                                                )
                                            ),
                                            o.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                o.a.createElement(
                                                    c.b,
                                                    {
                                                        to:
                                                            "/account/" +
                                                            n +
                                                            "/create-asset/"
                                                    },
                                                    o.a.createElement(
                                                        "button",
                                                        {
                                                            className:
                                                                "btn large inverted"
                                                        },
                                                        S.a.translate(
                                                            "transaction.trxTypes.asset_create"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    o.a.createElement(
                                        d.a,
                                        {id: "issue_asset", overlay: !0},
                                        o.a.createElement("br", null),
                                        o.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            o.a.createElement(E.a, {
                                                asset_to_issue: this.state.issue
                                                    .asset_id,
                                                onClose: function() {
                                                    v.a.publish(
                                                        "issue_asset",
                                                        "close"
                                                    );
                                                }
                                            })
                                        )
                                    ),
                                    o.a.createElement(
                                        d.a,
                                        {id: "reserve_asset", overlay: !0},
                                        o.a.createElement("br", null),
                                        o.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            o.a.createElement(k.a, {
                                                assetId: this.state.reserve,
                                                account: a,
                                                onClose: function() {
                                                    v.a.publish(
                                                        "reserve_asset",
                                                        "close"
                                                    );
                                                }
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (j.defaultProps = {
                symbol: "",
                name: "",
                description: "",
                max_supply: 0,
                precision: 0
            }),
                (j.propTypes = {symbol: r.a.string.isRequired}),
                (j = Object(N.a)(j, {
                    propNames: ["assetsList"],
                    asList: !0,
                    withDynamic: !0
                })),
                (t.default = Object(w.connect)(j, {
                    listenTo: function() {
                        return [m.a];
                    },
                    getProps: function(e) {
                        var t = Object(T.Map)(),
                            a = Object(T.List)();
                        return (
                            e.account.get("assets", []).size
                                ? e.account
                                      .get("assets", [])
                                      .forEach(function(e) {
                                          a = a.push(e);
                                      })
                                : (t = m.a.getState().assets),
                            {assets: t, assetsList: a}
                        );
                    }
                }));
        },
        576: function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a(0),
                    s = a.n(n),
                    o = a(1),
                    i = a.n(o),
                    r = a(6),
                    c = a(13),
                    l = a(5),
                    u = a(3),
                    p = a.n(u),
                    m = a(77),
                    h = a(101),
                    d = a(43),
                    b = (function() {
                        function e(e, t) {
                            for (var a = 0; a < t.length; a++) {
                                var n = t[a];
                                (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    "value" in n && (n.writable = !0),
                                    Object.defineProperty(e, n.key, n);
                            }
                        }
                        return function(t, a, n) {
                            return a && e(t.prototype, a), n && e(t, n), t;
                        };
                    })();
                var f = (function(t) {
                    function a(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, a);
                        var t = (function(e, t) {
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
                            (a.__proto__ || Object.getPrototypeOf(a)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (t.state = {
                                amount: e.amount,
                                to: e.to,
                                to_id: null,
                                memo: ""
                            }),
                            t
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
                        })(a, s.a.Component),
                        b(a, [
                            {
                                key: "onAmountChanged",
                                value: function(e) {
                                    var t = e.amount;
                                    this.setState({amount: t});
                                }
                            },
                            {
                                key: "onToAccountChanged",
                                value: function(e) {
                                    var t = e
                                        ? {
                                              to: e.get("name"),
                                              to_id: e.get("id")
                                          }
                                        : {to_id: null};
                                    this.setState(t);
                                }
                            },
                            {
                                key: "onToChanged",
                                value: function(e) {
                                    this.setState({to: e, to_id: null});
                                }
                            },
                            {
                                key: "onSubmit",
                                value: function() {
                                    var t = this.props.asset_to_issue,
                                        a = l.a.get_asset_precision(
                                            t.get("precision")
                                        ),
                                        n = this.state.amount
                                            .toString()
                                            .replace(/,/g, "");
                                    (n *= a),
                                        m.a.issueAsset(
                                            this.state.to_id,
                                            t.get("issuer"),
                                            t.get("id"),
                                            n,
                                            this.state.memo
                                                ? new e(
                                                      this.state.memo,
                                                      "utf-8"
                                                  )
                                                : this.state.memo
                                        ),
                                        this.setState({
                                            amount: 0,
                                            to: "",
                                            to_id: null,
                                            memo: ""
                                        });
                                }
                            },
                            {
                                key: "onMemoChanged",
                                value: function(e) {
                                    this.setState({memo: e.target.value});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.asset_to_issue.get("id"),
                                        t = 1;
                                    return s.a.createElement(
                                        "form",
                                        {
                                            className:
                                                "grid-block vertical full-width-content"
                                        },
                                        s.a.createElement(
                                            "div",
                                            {
                                                className: "grid-container ",
                                                style: {paddingTop: "2rem"}
                                            },
                                            s.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                s.a.createElement(h.a, {
                                                    label: "modal.issue.to",
                                                    accountName: this.state.to,
                                                    onAccountChanged: this.onToAccountChanged.bind(
                                                        this
                                                    ),
                                                    onChange: this.onToChanged.bind(
                                                        this
                                                    ),
                                                    account: this.state.to,
                                                    tabIndex: t++
                                                })
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                s.a.createElement(d.a, {
                                                    label: "modal.issue.amount",
                                                    amount: this.state.amount,
                                                    onChange: this.onAmountChanged.bind(
                                                        this
                                                    ),
                                                    asset: e,
                                                    assets: [e],
                                                    tabIndex: t++
                                                })
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                s.a.createElement(
                                                    "label",
                                                    null,
                                                    s.a.createElement(i.a, {
                                                        component: "span",
                                                        content: "transfer.memo"
                                                    }),
                                                    " ",
                                                    "(",
                                                    s.a.createElement(i.a, {
                                                        content:
                                                            "transfer.optional"
                                                    }),
                                                    ")"
                                                ),
                                                s.a.createElement("textarea", {
                                                    rows: "3",
                                                    value: this.state.memo,
                                                    tabIndex: t++,
                                                    onChange: this.onMemoChanged.bind(
                                                        this
                                                    )
                                                })
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block button-group"
                                                },
                                                s.a.createElement(
                                                    "button",
                                                    {
                                                        type: "submit",
                                                        className:
                                                            "button primary",
                                                        onClick: this.onSubmit.bind(
                                                            this,
                                                            this.state.to,
                                                            this.state.amount
                                                        ),
                                                        disabled:
                                                            !this.state.to_id ||
                                                            !this.state.amount,
                                                        tabIndex: t++
                                                    },
                                                    p.a.translate(
                                                        "modal.issue.submit"
                                                    )
                                                ),
                                                s.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "button primary hollow",
                                                        onClick: this.props
                                                            .onClose,
                                                        tabIndex: t++
                                                    },
                                                    p.a.translate("cancel")
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        a
                    );
                })();
                (f.propTypes = {asset_to_issue: r.a.ChainAsset.isRequired}),
                    (t.a = Object(c.a)(f));
            }.call(this, a(29).Buffer));
        },
        72: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return y;
            }),
                a.d(t, "a", function() {
                    return g;
                });
            var n = a(0),
                s = a.n(n),
                o = a(2),
                i = a.n(o),
                r = (a(1), a(9)),
                c = a.n(r),
                l = a(15),
                u = a(10),
                p = a(8),
                m = a(3),
                h = a.n(m),
                d = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function b(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function v(e, t) {
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
            var g = (function(e) {
                function t() {
                    return (
                        b(this, t),
                        f(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    v(t, s.a.Component),
                    d(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    a = e.index,
                                    n = e.changeTab,
                                    o = e.title,
                                    i = e.className,
                                    r = e.updatedTab,
                                    l = e.disabled,
                                    u = e.subText,
                                    p = c()({"is-active": t}, i);
                                return (
                                    "string" == typeof o &&
                                        o.indexOf(".") > 0 &&
                                        (o = h.a.translate(o)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          s.a.createElement(
                                              "option",
                                              {
                                                  value: a,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              s.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  o,
                                                  r ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : s.a.createElement(
                                              "li",
                                              {
                                                  className: p,
                                                  onClick: l
                                                      ? null
                                                      : n.bind(
                                                            this,
                                                            a,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              s.a.createElement(
                                                  "a",
                                                  null,
                                                  s.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      o,
                                                      r ? "*" : ""
                                                  ),
                                                  u &&
                                                      s.a.createElement(
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
            (g.propTypes = {
                changeTab: i.a.func,
                isActive: i.a.bool.isRequired,
                index: i.a.number.isRequired,
                className: i.a.string,
                isLinkTo: i.a.string,
                subText: i.a.oneOfType([i.a.object, i.a.string])
            }),
                (g.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var y = (function(e) {
                function t(e) {
                    b(this, t);
                    var a = f(
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
                    v(t, s.a.Component),
                    d(t, [
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
                                    n = t.contentClass,
                                    o = t.tabsClass,
                                    i = t.style,
                                    r = t.segmented,
                                    l =
                                        this.state.width < 900 &&
                                        s.a.Children.count(a) > 2,
                                    u = null,
                                    p = s.a.Children.map(a, function(t, a) {
                                        if (!t) return null;
                                        if (l && t.props.disabled) return null;
                                        var n = a === e.state.activeTab;
                                        return (
                                            n && (u = t.props.children),
                                            s.a.cloneElement(t, {
                                                collapsed: l,
                                                isActive: n,
                                                changeTab: e._changeTab.bind(e),
                                                index: a
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = p[0].props.children),
                                    s.a.createElement(
                                        "div",
                                        {
                                            className: c()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        s.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            s.a.createElement(
                                                "ul",
                                                {
                                                    style: i,
                                                    className: c()(
                                                        "button-group no-margin",
                                                        o,
                                                        {segmented: r}
                                                    )
                                                },
                                                l
                                                    ? s.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          s.a.createElement(
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
                                                    ? s.a.createElement(
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
                                        s.a.createElement(
                                            "div",
                                            {className: c()("tab-content", n)},
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
                (y = Object(l.connect)(y, {
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
