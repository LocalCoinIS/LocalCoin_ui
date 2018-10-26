(window.webpackJsonp = window.webpackJsonp || []).push([
    [27],
    {
        356: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(2),
                l = a.n(o),
                c = a(9),
                s = a.n(c),
                i = a(24),
                u = a(14),
                m = a(4),
                d = (a(1), a(3)),
                h = a.n(d),
                p = a(51),
                f = a.n(p),
                _ =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                g = (function() {
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
            function v(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function E(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function b(e, t) {
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
            var w = (function(e) {
                function t() {
                    v(this, t);
                    var e = E(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e.state = {
                            value: null,
                            error: null,
                            existing_account: !1
                        }),
                        (e.handleChange = e.handleChange.bind(e)),
                        (e.onKeyDown = e.onKeyDown.bind(e)),
                        e
                    );
                }
                return (
                    b(t, r.a.Component),
                    g(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    t.value !== this.state.value ||
                                    t.error !== this.state.error ||
                                    t.account_name !==
                                        this.state.account_name ||
                                    t.existing_account !==
                                        this.state.existing_account ||
                                    e.searchAccounts !==
                                        this.props.searchAccounts
                                );
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                this.props.onChange &&
                                    this.props.onChange({
                                        valid: !this.getError()
                                    });
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                return this.state.value;
                            }
                        },
                        {
                            key: "setValue",
                            value: function(e) {
                                this.setState({value: e});
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.setState({
                                    account_name: null,
                                    error: null,
                                    warning: null
                                });
                            }
                        },
                        {
                            key: "focus",
                            value: function() {
                                this.refs.input.focus();
                            }
                        },
                        {
                            key: "valid",
                            value: function() {
                                return !this.getError();
                            }
                        },
                        {
                            key: "getError",
                            value: function() {
                                var e = this;
                                if (null === this.state.value) return null;
                                var t = null;
                                if (this.state.error) t = this.state.error;
                                else if (
                                    this.props.accountShouldExist ||
                                    this.props.accountShouldNotExist
                                ) {
                                    var a = this.props.searchAccounts.find(
                                        function(t) {
                                            return t === e.state.value;
                                        }
                                    );
                                    this.props.accountShouldNotExist &&
                                        a &&
                                        (t = h.a.translate(
                                            "account.name_input.name_is_taken"
                                        )),
                                        this.props.accountShouldExist &&
                                            !a &&
                                            (t = h.a.translate(
                                                "account.name_input.not_found"
                                            ));
                                }
                                return t;
                            }
                        },
                        {
                            key: "validateAccountName",
                            value: function(e) {
                                (this.state.error =
                                    "" === e
                                        ? "Please enter valid account name"
                                        : m.d.is_account_name_error(e)),
                                    (this.state.warning = null),
                                    this.props.cheapNameOnly
                                        ? this.state.error ||
                                          m.d.is_cheap_name(e) ||
                                          (this.state.error = h.a.translate(
                                              "account.name_input.premium_name_faucet"
                                          ))
                                        : this.state.error ||
                                          m.d.is_cheap_name(e) ||
                                          (this.state.warning = h.a.translate(
                                              "account.name_input.premium_name_warning"
                                          )),
                                    this.setState({
                                        value: e,
                                        error: this.state.error,
                                        warning: this.state.warning
                                    }),
                                    this.props.onChange &&
                                        this.props.onChange({
                                            value: e,
                                            valid: !this.getError()
                                        }),
                                    (this.props.accountShouldExist ||
                                        this.props.accountShouldNotExist) &&
                                        i.a.accountSearch(e);
                            }
                        },
                        {
                            key: "handleChange",
                            value: function(e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = e.target.value.toLowerCase();
                                (t = (t = t.match(/[a-z0-9\.-]+/))
                                    ? t[0]
                                    : null),
                                    this.setState({account_name: t}),
                                    this.validateAccountName(t);
                            }
                        },
                        {
                            key: "onKeyDown",
                            value: function(e) {
                                this.props.onEnter &&
                                    13 === event.keyCode &&
                                    this.props.onEnter(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.getError() || "",
                                    t = s()("form-group", "account-name", {
                                        "has-error": !1
                                    }),
                                    a = this.state.warning;
                                return r.a.createElement(
                                    "div",
                                    {className: t},
                                    r.a.createElement(
                                        "section",
                                        null,
                                        r.a.createElement(
                                            "label",
                                            {className: "left-label"},
                                            this.props.placeholder
                                        ),
                                        r.a.createElement("input", {
                                            name: "username",
                                            id: "username",
                                            type: "text",
                                            ref: "input",
                                            autoComplete: "off",
                                            placeholder: null,
                                            onChange: this.handleChange,
                                            onKeyDown: this.onKeyDown,
                                            value:
                                                this.state.account_name ||
                                                this.props.initial_value
                                        })
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {textAlign: "left"},
                                            className: "facolor-error"
                                        },
                                        e
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {textAlign: "left"},
                                            className: "facolor-warning"
                                        },
                                        e ? null : a
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (w.propTypes = {
                id: l.a.string,
                placeholder: l.a.string,
                initial_value: l.a.string,
                onChange: l.a.func,
                onEnter: l.a.func,
                accountShouldExist: l.a.bool,
                accountShouldNotExist: l.a.bool,
                cheapNameOnly: l.a.bool,
                noLabel: l.a.bool
            }),
                (w.defaultProps = {noLabel: !1});
            var y = (function(e) {
                function t() {
                    return (
                        v(this, t),
                        E(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    b(t, r.a.Component),
                    g(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    f.a,
                                    {
                                        stores: [u.a],
                                        inject: {
                                            searchAccounts: function() {
                                                return u.a.getState()
                                                    .searchAccounts;
                                            }
                                        }
                                    },
                                    r.a.createElement(
                                        w,
                                        _({ref: "nameInput"}, this.props)
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = y;
        },
        4968: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(15),
                l = a(9),
                c = a.n(l),
                s = a(24),
                i = a(14),
                u = a(356),
                m = a(16),
                d = a(28),
                h = a(11),
                p = a(117),
                f = a(39),
                _ = a(37),
                g = a(1),
                v = a.n(g),
                E = a(3),
                b = a.n(E),
                w = a(4),
                y = a(44),
                k = a.n(y),
                N = a(5),
                x = a(10),
                A = a(46),
                C = a(12),
                S = a(164),
                P = a(2),
                O = a.n(P),
                j = (function() {
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
            function F(e, t, a) {
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
            var R = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
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
                        (e.state = {
                            validAccountName: !1,
                            accountName: "",
                            validPassword: !1,
                            registrar_account: null,
                            loading: !1,
                            hide_refcode: !0,
                            show_identicon: !1,
                            step: 1,
                            showPass: !1,
                            generatedPassword: (
                                "P" + w.o.get_random_key().toWif()
                            ).substr(0, 45),
                            confirm_password: "",
                            understand_1: !1,
                            understand_2: !1,
                            understand_3: !1
                        }),
                        (e.onFinishConfirm = e.onFinishConfirm.bind(e)),
                        (e.accountNameInput = null),
                        e
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
                    })(t, r.a.Component),
                    j(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                m.a.getWallet() ||
                                    x.a.changeSetting({
                                        setting: "passwordLogin",
                                        value: !0
                                    });
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                k.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return !N.a.are_equal_shallow(t, this.state);
                            }
                        },
                        {
                            key: "isValid",
                            value: function() {
                                var e = 0 === i.a.getMyAccounts().length,
                                    t = this.state.validAccountName;
                                return (
                                    m.a.getWallet() ||
                                        (t = t && this.state.validPassword),
                                    e ||
                                        (t = t && this.state.registrar_account),
                                    t &&
                                        this.state.understand_1 &&
                                        this.state.understand_2
                                );
                            }
                        },
                        {
                            key: "onAccountNameChange",
                            value: function(e) {
                                var t = {};
                                void 0 !== e.valid &&
                                    (t.validAccountName = e.valid),
                                    void 0 !== e.value &&
                                        (t.accountName = e.value),
                                    this.state.show_identicon ||
                                        (t.show_identicon = !0),
                                    this.setState(t);
                            }
                        },
                        {
                            key: "onFinishConfirm",
                            value: function(e) {
                                var t = this;
                                e.included &&
                                    e.broadcasted_transaction &&
                                    (f.a.unlisten(this.onFinishConfirm),
                                    f.a.reset(),
                                    Object(w.f)(
                                        "getAccount",
                                        this.state.accountName,
                                        void 0,
                                        F({}, this.state.accountName, !0)
                                    ).then(function() {
                                        t.props.router.push(
                                            "/wallet/backup/create?newAccount=true"
                                        );
                                    }));
                            }
                        },
                        {
                            key: "_unlockAccount",
                            value: function(e, t) {
                                x.a.changeSetting({
                                    setting: "passwordLogin",
                                    value: !0
                                }),
                                    m.a.validatePassword(t, !0, e),
                                    A.a.checkLock.defer();
                            }
                        },
                        {
                            key: "createAccount",
                            value: function(e, t) {
                                var a = this,
                                    n = this.refs.refcode
                                        ? this.refs.refcode.value()
                                        : null,
                                    r = i.a.getState().referralAccount;
                                this.setState({loading: !0}),
                                    s.a
                                        .createAccountWithPassword(
                                            e,
                                            t,
                                            this.state.registrar_account,
                                            r || this.state.registrar_account,
                                            0,
                                            n
                                        )
                                        .then(function() {
                                            s.a.setPasswordAccount(e),
                                                a.state.registrar_account
                                                    ? (Object(w.f)(
                                                          "getAccount",
                                                          e,
                                                          void 0,
                                                          F({}, e, !0)
                                                      ).then(function() {
                                                          a.setState({
                                                              step: 2,
                                                              loading: !1
                                                          }),
                                                              a._unlockAccount(
                                                                  e,
                                                                  t
                                                              );
                                                      }),
                                                      f.a.listen(
                                                          a.onFinishConfirm
                                                      ))
                                                    : Object(w.f)(
                                                          "getAccount",
                                                          e,
                                                          void 0,
                                                          F({}, e, !0)
                                                      ).then(function() {
                                                          a.setState({step: 2}),
                                                              a._unlockAccount(
                                                                  e,
                                                                  t
                                                              );
                                                      });
                                        })
                                        .catch(function(t) {
                                            console.log(
                                                "ERROR AccountActions.createAccount",
                                                t
                                            );
                                            var n =
                                                t.base &&
                                                t.base.length &&
                                                t.base.length > 0
                                                    ? t.base[0]
                                                    : "unknown error";
                                            t.remote_ip && (n = t.remote_ip[0]),
                                                d.a.addNotification({
                                                    message:
                                                        "Failed to create account: " +
                                                        e +
                                                        " - " +
                                                        n,
                                                    level: "error",
                                                    autoDismiss: 10
                                                }),
                                                a.setState({loading: !1});
                                        });
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function(e) {
                                if ((e.preventDefault(), this.isValid())) {
                                    var t = this.accountNameInput.getValue(),
                                        a = this.state.generatedPassword;
                                    this.createAccount(t, a);
                                }
                            }
                        },
                        {
                            key: "onRegistrarAccountChange",
                            value: function(e) {
                                this.setState({registrar_account: e});
                            }
                        },
                        {
                            key: "_onInput",
                            value: function(e, t) {
                                var a;
                                this.setState(
                                    (F(
                                        (a = {}),
                                        e,
                                        "confirm_password" === e
                                            ? t.target.value
                                            : !this.state[e]
                                    ),
                                    F(
                                        a,
                                        "validPassword",
                                        "confirm_password" === e
                                            ? t.target.value ===
                                              this.state.generatedPassword
                                            : this.state.validPassword
                                    ),
                                    a)
                                );
                            }
                        },
                        {
                            key: "_renderCheckbox",
                            value: function(e, t, a, n) {
                                return r.a.createElement(
                                    "label",
                                    {className: "checkbox", htmlFor: t},
                                    r.a.createElement("input", {
                                        type: "checkbox",
                                        id: t,
                                        onChange: n,
                                        checked: a,
                                        className: "checkbox__input"
                                    }),
                                    r.a.createElement("span", {
                                        className: "checkbox__styled"
                                    }),
                                    r.a.createElement(
                                        "span",
                                        {className: "checkbox__label"},
                                        e
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderAccountCreateForm",
                            value: function() {
                                var e = this,
                                    t = this.state.registrar_account,
                                    a = i.a.getMyAccounts(),
                                    n = 0 === a.length,
                                    o = this.isValid(),
                                    l = !1,
                                    s = t ? w.b.getAccount(t) : null;
                                s &&
                                    s.get("lifetime_referrer") == s.get("id") &&
                                    (l = !0);
                                var m = c()("btn inverted large", {
                                    disabled: !o || (t && !l)
                                });
                                return r.a.createElement(
                                    "div",
                                    {style: {textAlign: "left"}},
                                    r.a.createElement(
                                        "form",
                                        {
                                            style: {maxWidth: "60rem"},
                                            onSubmit: this.onSubmit.bind(this),
                                            noValidate: !0
                                        },
                                        r.a.createElement(u.a, {
                                            ref: function(t) {
                                                t &&
                                                    (e.accountNameInput =
                                                        t.refs.nameInput);
                                            },
                                            cheapNameOnly: !!n,
                                            onChange: this.onAccountNameChange.bind(
                                                this
                                            ),
                                            accountShouldNotExist: !0,
                                            placeholder: b.a.translate(
                                                "wallet.account_public"
                                            ),
                                            noLabel: !0
                                        }),
                                        r.a.createElement(
                                            "section",
                                            {className: "form-group"},
                                            r.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                r.a.createElement(v.a, {
                                                    content: "wallet.generated"
                                                }),
                                                "  ",
                                                r.a.createElement(
                                                    "span",
                                                    {
                                                        className: "tooltip",
                                                        "data-html": !0,
                                                        "data-tip": b.a.translate(
                                                            "tooltip.generate"
                                                        )
                                                    },
                                                    r.a.createElement(C.a, {
                                                        name: "question-circle",
                                                        title:
                                                            "icons.question_circle"
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        paddingBottom: "0.5rem"
                                                    }
                                                },
                                                r.a.createElement(
                                                    "span",
                                                    {className: "inline-label"},
                                                    r.a.createElement("input", {
                                                        style: {
                                                            maxWidth:
                                                                "calc(30rem - 48px)",
                                                            fontSize: "80%"
                                                        },
                                                        disabled: !0,
                                                        value: this.state
                                                            .generatedPassword,
                                                        type: "text",
                                                        className:
                                                            "input-button"
                                                    }),
                                                    r.a.createElement(S.a, {
                                                        text: this.state
                                                            .generatedPassword,
                                                        tip:
                                                            "tooltip.copy_password",
                                                        dataPlace: "top"
                                                    })
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "section",
                                            null,
                                            r.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                r.a.createElement(v.a, {
                                                    content:
                                                        "wallet.confirm_password"
                                                })
                                            ),
                                            r.a.createElement("input", {
                                                type: "password",
                                                name: "password",
                                                id: "password",
                                                value: this.state
                                                    .confirm_password,
                                                onChange: this._onInput.bind(
                                                    this,
                                                    "confirm_password"
                                                )
                                            }),
                                            this.state.confirm_password &&
                                            this.state.confirm_password !==
                                                this.state.generatedPassword
                                                ? r.a.createElement(
                                                      "div",
                                                      {className: "has-error"},
                                                      r.a.createElement(v.a, {
                                                          content:
                                                              "wallet.confirm_error"
                                                      })
                                                  )
                                                : null
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "div",
                                            {className: "confirm-checks"},
                                            this._renderCheckbox(
                                                b.a.translate(
                                                    "wallet.understand_3"
                                                ),
                                                "checkbox-1",
                                                this.state.understand_3,
                                                this._onInput.bind(
                                                    this,
                                                    "understand_3"
                                                )
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "div",
                                            {className: "confirm-checks"},
                                            this._renderCheckbox(
                                                b.a.translate(
                                                    "wallet.understand_1"
                                                ),
                                                "checkbox-2",
                                                this.state.understand_1,
                                                this._onInput.bind(
                                                    this,
                                                    "understand_1"
                                                )
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "confirm-checks",
                                                style: {paddingBottom: "1.5rem"}
                                            },
                                            this._renderCheckbox(
                                                b.a.translate(
                                                    "wallet.understand_2"
                                                ),
                                                "checkbox-3",
                                                this.state.understand_2,
                                                this._onInput.bind(
                                                    this,
                                                    "understand_2"
                                                )
                                            )
                                        ),
                                        n
                                            ? null
                                            : r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "full-width-content form-group",
                                                      style: {paddingTop: 30}
                                                  },
                                                  r.a.createElement(
                                                      "label",
                                                      null,
                                                      r.a.createElement(v.a, {
                                                          content:
                                                              "account.pay_from"
                                                      })
                                                  ),
                                                  r.a.createElement(p.a, {
                                                      account_names: a,
                                                      onChange: this.onRegistrarAccountChange.bind(
                                                          this
                                                      )
                                                  }),
                                                  t && !l
                                                      ? r.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "left"
                                                                },
                                                                className:
                                                                    "facolor-error"
                                                            },
                                                            r.a.createElement(
                                                                v.a,
                                                                {
                                                                    content:
                                                                        "wallet.must_be_ltm"
                                                                }
                                                            )
                                                        )
                                                      : null
                                              ),
                                        this.state.loading
                                            ? r.a.createElement(_.a, {
                                                  type: "three-bounce"
                                              })
                                            : r.a.createElement(
                                                  "button",
                                                  {
                                                      className: m,
                                                      style: {
                                                          width: "100%",
                                                          backgroundColor:
                                                              "#00195b"
                                                      },
                                                      disabled: !o || (t && !l)
                                                  },
                                                  r.a.createElement(v.a, {
                                                      style: {color: "#fff"},
                                                      content:
                                                          "account.create_account"
                                                  })
                                              )
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderAccountCreateText",
                            value: function() {
                                var e = 0 === i.a.getMyAccounts().length;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "h4",
                                        {
                                            style: {
                                                fontWeight: "normal",
                                                fontFamily:
                                                    "Roboto-Medium, arial, sans-serif",
                                                fontStyle: "normal",
                                                paddingBottom: 15
                                            }
                                        },
                                        r.a.createElement(v.a, {
                                            content: "wallet.wallet_password"
                                        })
                                    ),
                                    r.a.createElement(v.a, {
                                        style: {textAlign: "left"},
                                        unsafe: !0,
                                        component: "p",
                                        content:
                                            "wallet.create_account_password_text"
                                    }),
                                    r.a.createElement(v.a, {
                                        style: {textAlign: "left"},
                                        component: "p",
                                        content: "wallet.create_account_text"
                                    }),
                                    e
                                        ? null
                                        : r.a.createElement(v.a, {
                                              style: {textAlign: "left"},
                                              component: "p",
                                              content:
                                                  "wallet.not_first_account"
                                          })
                                );
                            }
                        },
                        {
                            key: "_renderBackup",
                            value: function() {
                                var e = this;
                                return r.a.createElement(
                                    "div",
                                    {className: "backup-submit"},
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(v.a, {
                                            unsafe: !0,
                                            content: "wallet.password_crucial"
                                        })
                                    ),
                                    r.a.createElement(
                                        "div",
                                        null,
                                        this.state.showPass
                                            ? r.a.createElement(
                                                  "div",
                                                  null,
                                                  r.a.createElement(
                                                      "h5",
                                                      null,
                                                      r.a.createElement(v.a, {
                                                          content:
                                                              "settings.password"
                                                      }),
                                                      ":"
                                                  ),
                                                  r.a.createElement(
                                                      "p",
                                                      {
                                                          style: {
                                                              fontWeight:
                                                                  "normal",
                                                              fontFamily:
                                                                  "Roboto-Medium, arial, sans-serif",
                                                              fontStyle:
                                                                  "normal",
                                                              textAlign:
                                                                  "center"
                                                          }
                                                      },
                                                      this.state
                                                          .generatedPassword
                                                  )
                                              )
                                            : r.a.createElement(
                                                  "button",
                                                  {
                                                      className:
                                                          "btn large outline",
                                                      onClick: function() {
                                                          e.setState({
                                                              showPass: !0
                                                          });
                                                      }
                                                  },
                                                  b.a.translate(
                                                      "wallet.password_show"
                                                  )
                                              )
                                    ),
                                    r.a.createElement("div", {
                                        className: "divider"
                                    }),
                                    r.a.createElement(
                                        "p",
                                        {className: "txtlabel warning"},
                                        r.a.createElement(v.a, {
                                            unsafe: !0,
                                            content:
                                                "wallet.password_lose_warning"
                                        })
                                    ),
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "btn large inverted",
                                            style: {width: "100%"},
                                            onClick: function() {
                                                e.context.router.push("/");
                                            }
                                        },
                                        b.a.translate("wallet.ok_done")
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderGetStarted",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "table",
                                        {className: "table"},
                                        r.a.createElement(
                                            "tbody",
                                            null,
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(v.a, {
                                                        content:
                                                            "wallet.tips_dashboard"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        h.b,
                                                        {to: "/"},
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "header.dashboard"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(v.a, {
                                                        content:
                                                            "wallet.tips_account"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        h.b,
                                                        {
                                                            to:
                                                                "/account/" +
                                                                this.state
                                                                    .accountName +
                                                                "/overview"
                                                        },
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "wallet.link_account"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(v.a, {
                                                        content:
                                                            "wallet.tips_deposit"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        h.b,
                                                        {
                                                            to:
                                                                "/deposit-withdraw"
                                                        },
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "wallet.link_deposit"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(v.a, {
                                                        content:
                                                            "wallet.tips_transfer"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        h.b,
                                                        {to: "/transfer"},
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "wallet.link_transfer"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(v.a, {
                                                        content:
                                                            "wallet.tips_settings"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        h.b,
                                                        {to: "/settings"},
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "header.settings"
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderGetStartedText",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "p",
                                        {
                                            style: {
                                                fontWeight: "normal",
                                                fontFamily:
                                                    "Roboto-Medium, arial, sans-serif",
                                                fontStyle: "normal"
                                            }
                                        },
                                        r.a.createElement(v.a, {
                                            content: "wallet.congrat"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(v.a, {
                                            content: "wallet.tips_explore_pass"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(v.a, {
                                            content: "wallet.tips_header"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        {className: "txtlabel warning"},
                                        r.a.createElement(v.a, {
                                            content: "wallet.tips_login"
                                        })
                                    )
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.state.step;
                                return r.a.createElement(
                                    "div",
                                    {className: "sub-content"},
                                    r.a.createElement(
                                        "div",
                                        null,
                                        2 === e
                                            ? r.a.createElement(
                                                  "p",
                                                  {
                                                      style: {
                                                          fontWeight: "normal",
                                                          fontFamily:
                                                              "Roboto-Medium, arial, sans-serif",
                                                          fontStyle: "normal"
                                                      }
                                                  },
                                                  r.a.createElement(v.a, {
                                                      content:
                                                          "wallet.step_" + e
                                                  })
                                              )
                                            : null,
                                        3 === e
                                            ? this._renderGetStartedText()
                                            : null,
                                        1 === e
                                            ? r.a.createElement(
                                                  "div",
                                                  null,
                                                  this._renderAccountCreateForm()
                                              )
                                            : 2 === e
                                                ? this._renderBackup()
                                                : this._renderGetStarted()
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (R.contextTypes = {router: O.a.object.isRequired}),
                (t.default = Object(o.connect)(R, {
                    listenTo: function() {
                        return [i.a];
                    },
                    getProps: function() {
                        return {};
                    }
                }));
        }
    }
]);
