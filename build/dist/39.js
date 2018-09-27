(window.webpackJsonp = window.webpackJsonp || []).push([
    [39],
    {
        5008: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n(0),
                c = n.n(a),
                o = n(105),
                i = n(137),
                l = n.n(i),
                r = n(165),
                s = n(7),
                u = n.n(s),
                d = n(1),
                m = n.n(d),
                h = n(6),
                p = n(13),
                _ = n(41),
                b = n(87),
                g = n(16),
                y = (function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var a = e[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(t, a.key, a);
                        }
                    }
                    return function(e, n, a) {
                        return n && t(e.prototype, n), a && t(e, a), e;
                    };
                })();
            function f(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function w(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
            }
            function v(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
            }
            var E = (function(t) {
                function e() {
                    return (
                        f(this, e),
                        w(
                            this,
                            (e.__proto__ || Object.getPrototypeOf(e)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    v(e, c.a.Component),
                    y(e, [
                        {
                            key: "render",
                            value: function() {
                                var t = this.props,
                                    e = t.account,
                                    n = t.onRemove;
                                return c.a.createElement(
                                    "tr",
                                    null,
                                    c.a.createElement(
                                        "td",
                                        null,
                                        this.props.index
                                    ),
                                    c.a.createElement("td", null, e.get("id")),
                                    c.a.createElement(
                                        "td",
                                        null,
                                        c.a.createElement(_.a, {
                                            account: e.get("id")
                                        })
                                    ),
                                    n
                                        ? c.a.createElement(
                                              "td",
                                              null,
                                              c.a.createElement(
                                                  "button",
                                                  {
                                                      onClick: n.bind(
                                                          this,
                                                          e.get("id")
                                                      ),
                                                      className: "btn outline"
                                                  },
                                                  "Remove"
                                              )
                                          )
                                        : null
                                );
                            }
                        }
                    ]),
                    e
                );
            })();
            (E.propTypes = {account: h.a.ChainAccount.isRequired}),
                (E.defaultProps = {tempComponent: "tr"}),
                (E = Object(p.a)(E));
            var k = (function(t) {
                    function e() {
                        return (
                            f(this, e),
                            w(
                                this,
                                (e.__proto__ || Object.getPrototypeOf(e)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        v(e, c.a.Component),
                        y(e, [
                            {
                                key: "_onRemove",
                                value: function(t, e, n) {
                                    if (e) {
                                        var a = this.props.getCurrentState(e),
                                            c = b.a.new_transaction();
                                        c.add_type_operation(
                                            "account_whitelist",
                                            {
                                                fee: {
                                                    amount: 0,
                                                    asset_id: "1.3.0"
                                                },
                                                authorizing_account: this.props.account.get(
                                                    "id"
                                                ),
                                                account_to_list: e,
                                                new_listing:
                                                    a - l.a.account_listing[t]
                                            }
                                        ),
                                            g.a.process_transaction(
                                                c,
                                                null,
                                                !0
                                            );
                                    }
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var t = this,
                                        e = this.props,
                                        n = e.removeButton,
                                        a = e.white,
                                        o = e.list
                                            .map(function(e, o) {
                                                return c.a.createElement(E, {
                                                    key: e,
                                                    onRemove: n
                                                        ? t._onRemove.bind(
                                                              t,
                                                              a
                                                                  ? "white_listed"
                                                                  : "black_listed"
                                                          )
                                                        : null,
                                                    account: e,
                                                    index: o + 1
                                                });
                                            })
                                            .toArray(),
                                        i = !0;
                                    return (
                                        o.length ||
                                            ((i = !1),
                                            o.push(
                                                c.a.createElement(
                                                    "tr",
                                                    {key: "empty"},
                                                    c.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                padding:
                                                                    "1rem 15px"
                                                            },
                                                            colSpan: n ? 4 : 3
                                                        },
                                                        c.a.createElement(m.a, {
                                                            content: this.props
                                                                .emptyText,
                                                            account: this.props.account.get(
                                                                "name"
                                                            )
                                                        })
                                                    )
                                                )
                                            )),
                                        c.a.createElement(
                                            "table",
                                            null,
                                            i
                                                ? c.a.createElement(
                                                      "thead",
                                                      null,
                                                      c.a.createElement(
                                                          "tr",
                                                          null,
                                                          c.a.createElement(
                                                              "th",
                                                              null,
                                                              "#"
                                                          ),
                                                          c.a.createElement(
                                                              "th",
                                                              null,
                                                              c.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      content:
                                                                          "account.id"
                                                                  }
                                                              )
                                                          ),
                                                          c.a.createElement(
                                                              "th",
                                                              null,
                                                              c.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      content:
                                                                          "account.name"
                                                                  }
                                                              )
                                                          ),
                                                          n
                                                              ? c.a.createElement(
                                                                    "th",
                                                                    null
                                                                )
                                                              : null
                                                      )
                                                  )
                                                : null,
                                            c.a.createElement("tbody", null, o)
                                        )
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(),
                C = (function(t) {
                    function e() {
                        f(this, e);
                        var t = w(
                            this,
                            (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                        );
                        return (
                            (t.state = {accountName: "", accountToList: null}),
                            t
                        );
                    }
                    return (
                        v(e, c.a.Component),
                        y(e, [
                            {
                                key: "_getCurrentState",
                                value: function(t) {
                                    var e = this.props.account,
                                        n =
                                            e.get("whitelisted_accounts") ||
                                            u.a.List(),
                                        a =
                                            e.get("blacklisted_accounts") ||
                                            u.a.List(),
                                        c = l.a.account_listing.no_listing;
                                    return (
                                        n.includes(t) &&
                                            (c +=
                                                l.a.account_listing
                                                    .white_listed),
                                        a.includes(t) &&
                                            (c +=
                                                l.a.account_listing
                                                    .black_listed),
                                        c
                                    );
                                }
                            },
                            {
                                key: "_onAdd",
                                value: function(t, e) {
                                    var n = this.state.accountToList,
                                        a = this.props.account,
                                        c = this._getCurrentState(n);
                                    if (n) {
                                        var o = b.a.new_transaction();
                                        o.add_type_operation(
                                            "account_whitelist",
                                            {
                                                fee: {
                                                    amount: 0,
                                                    asset_id: "1.3.0"
                                                },
                                                authorizing_account: a.get(
                                                    "id"
                                                ),
                                                account_to_list: n,
                                                new_listing:
                                                    c + l.a.account_listing[t]
                                            }
                                        ),
                                            g.a.process_transaction(
                                                o,
                                                null,
                                                !0
                                            );
                                    }
                                }
                            },
                            {
                                key: "_onAccountFound",
                                value: function(t) {
                                    console.log("accountFound:", t),
                                        this.setState({
                                            accountName: t
                                                ? t.get("name")
                                                : null,
                                            accountToList: t
                                                ? t.get("id")
                                                : null
                                        });
                                }
                            },
                            {
                                key: "_onAccountChanged",
                                value: function(t) {
                                    console.log("account changed:", t),
                                        this.setState({
                                            accountName: t,
                                            accountToList: null
                                        });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var t = this.props.account,
                                        e = this.state.accountName,
                                        n = [
                                            {
                                                title:
                                                    "account.whitelist.title",
                                                content: c.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            paddingBottom:
                                                                "1rem"
                                                        },
                                                        className: "small-12"
                                                    },
                                                    c.a.createElement(
                                                        "div",
                                                        null,
                                                        c.a.createElement(k, {
                                                            emptyText:
                                                                "account.whitelist.empty",
                                                            account: t,
                                                            getCurrentState: this._getCurrentState.bind(
                                                                this
                                                            ),
                                                            list:
                                                                t.get(
                                                                    "whitelisted_accounts"
                                                                ) || u.a.List(),
                                                            removeButton: !0,
                                                            white: !0
                                                        })
                                                    ),
                                                    t.get(
                                                        "whitelisted_accounts"
                                                    )
                                                        ? null
                                                        : c.a.createElement(
                                                              "p",
                                                              {
                                                                  className:
                                                                      "has-error"
                                                              },
                                                              "Please note, whitelisting is not working yet due to unresolved backend issue."
                                                          ),
                                                    c.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                padding:
                                                                    "2rem 0"
                                                            }
                                                        },
                                                        c.a.createElement(r.a, {
                                                            label:
                                                                "account.whitelist.add",
                                                            accountName: e,
                                                            onAccountChanged: this._onAccountFound.bind(
                                                                this
                                                            ),
                                                            onChange: this._onAccountChanged.bind(
                                                                this
                                                            ),
                                                            account: e,
                                                            tabIndex: 2,
                                                            onAction: this._onAdd.bind(
                                                                this,
                                                                "white_listed"
                                                            ),
                                                            action_label:
                                                                "account.perm.confirm_add",
                                                            white: !1,
                                                            typeahead: !0
                                                        })
                                                    )
                                                )
                                            },
                                            {
                                                title:
                                                    "account.whitelist.black",
                                                content: c.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            paddingBottom:
                                                                "1rem"
                                                        },
                                                        className: "small-12"
                                                    },
                                                    c.a.createElement(
                                                        "div",
                                                        null,
                                                        c.a.createElement(k, {
                                                            emptyText:
                                                                "account.whitelist.empty_black",
                                                            account: t,
                                                            getCurrentState: this._getCurrentState.bind(
                                                                this
                                                            ),
                                                            list: t.get(
                                                                "blacklisted_accounts"
                                                            ),
                                                            removeButton: !0
                                                        })
                                                    ),
                                                    c.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                padding:
                                                                    "2rem 1rem"
                                                            }
                                                        },
                                                        c.a.createElement(r.a, {
                                                            label:
                                                                "account.whitelist.add_black",
                                                            accountName: e,
                                                            onAccountChanged: this._onAccountFound.bind(
                                                                this
                                                            ),
                                                            onChange: this._onAccountChanged.bind(
                                                                this
                                                            ),
                                                            account: e,
                                                            tabIndex: 2,
                                                            onAction: this._onAdd.bind(
                                                                this,
                                                                "black_listed"
                                                            ),
                                                            action_label:
                                                                "account.perm.confirm_add",
                                                            typeahead: !0
                                                        })
                                                    )
                                                )
                                            },
                                            {
                                                title:
                                                    "account.whitelist.white_by",
                                                content: c.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            paddingBottom:
                                                                "1rem"
                                                        },
                                                        className: "small-12"
                                                    },
                                                    c.a.createElement(
                                                        "div",
                                                        null,
                                                        c.a.createElement(k, {
                                                            emptyText:
                                                                "account.whitelist.empty_white_by",
                                                            account: t,
                                                            list: t.get(
                                                                "whitelisting_accounts"
                                                            )
                                                        })
                                                    )
                                                )
                                            },
                                            {
                                                title:
                                                    "account.whitelist.black_by",
                                                content: c.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            paddingBottom:
                                                                "1rem"
                                                        },
                                                        className: "small-12"
                                                    },
                                                    c.a.createElement(
                                                        "div",
                                                        null,
                                                        c.a.createElement(k, {
                                                            emptyText:
                                                                "account.whitelist.empty_black_by",
                                                            account: t,
                                                            list: t.get(
                                                                "blacklisting_accounts"
                                                            )
                                                        })
                                                    )
                                                )
                                            }
                                        ];
                                    return c.a.createElement(o.a, {
                                        items: n,
                                        dashboardTabsClass:
                                            "dashboard__tabs permissions small"
                                    });
                                }
                            }
                        ]),
                        e
                    );
                })();
            e.default = C;
        }
    }
]);
