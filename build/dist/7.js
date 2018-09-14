(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        190: function(e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "BackupCreate", function() {
                    return x;
                }),
                n.d(t, "BackupRestore", function() {
                    return B;
                }),
                n.d(t, "Restore", function() {
                    return T;
                }),
                n.d(t, "NewWalletName", function() {
                    return A;
                }),
                n.d(t, "Download", function() {
                    return D;
                }),
                n.d(t, "Create", function() {
                    return F;
                }),
                n.d(t, "Upload", function() {
                    return z;
                }),
                n.d(t, "NameSizeModified", function() {
                    return M;
                }),
                n.d(t, "DecryptBackup", function() {
                    return U;
                }),
                n.d(t, "Sha1", function() {
                    return I;
                });
            var a = n(0),
                r = n.n(a),
                l = n(2),
                o = n.n(l),
                c = n(11),
                i = n(79),
                s = n(15),
                u = n(44),
                p = n(46),
                h = n(164),
                m = n(16),
                f = n(67),
                d = n(28),
                b = n(119),
                w = n(9),
                _ = n.n(w),
                v = n(1),
                k = n.n(v),
                y = n(4),
                E = n(10),
                g = n(283),
                O = n(3),
                C = n.n(O),
                j = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function S(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function N(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function W(e, t) {
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
            var P = {
                    listenTo: function() {
                        return [p.a, h.a];
                    },
                    getProps: function() {
                        return {wallet: p.a.getState(), backup: h.a.getState()};
                    }
                },
                x = (function(e) {
                    function t() {
                        return (
                            S(this, t),
                            N(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        W(t, a["Component"]),
                        j(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        {style: {maxWidth: "40rem"}},
                                        r.a.createElement(
                                            F,
                                            {
                                                noText: this.props.noText,
                                                newAccount: this.props.location
                                                    ? this.props.location.query
                                                          .newAccount
                                                    : null
                                            },
                                            r.a.createElement(M, null),
                                            this.props.noText
                                                ? null
                                                : r.a.createElement(I, null),
                                            r.a.createElement(D, {
                                                downloadCb: this.props
                                                    .downloadCb
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            x = Object(s.connect)(x, P);
            var B = (function(e) {
                function t() {
                    S(this, t);
                    var e = N(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {newWalletName: null}), e;
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                f.c.reset();
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.wallet.new_wallet;
                                this.props.wallet.wallet_names.has(e);
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(k.a, {
                                        style: {
                                            textAlign: "left",
                                            maxWidth: "30rem"
                                        },
                                        component: "p",
                                        content: "wallet.import_backup_choose"
                                    }),
                                    new FileReader().readAsBinaryString
                                        ? null
                                        : r.a.createElement(
                                              "p",
                                              {className: "error"},
                                              "Warning! You browser doesn't support some some file operations required to restore backup, we recommend you to use Chrome or Firefox browsers to restore your backup."
                                          ),
                                    r.a.createElement(
                                        z,
                                        null,
                                        r.a.createElement(M, null),
                                        r.a.createElement(
                                            U,
                                            {saveWalletObject: !0},
                                            r.a.createElement(
                                                A,
                                                null,
                                                r.a.createElement(T, null)
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        c.b,
                                        {to: "/"},
                                        r.a.createElement(
                                            "button",
                                            {className: "btn large inverted"},
                                            C.a.translate("wallet.back")
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            B = Object(s.connect)(B, P);
            var T = (function(e) {
                function t() {
                    S(this, t);
                    var e = N(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {}), e;
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "isRestored",
                            value: function() {
                                var e = this.props.wallet.new_wallet;
                                return this.props.wallet.wallet_names.has(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.wallet.new_wallet;
                                return this.isRestored()
                                    ? r.a.createElement(
                                          "span",
                                          null,
                                          r.a.createElement(
                                              "h5",
                                              null,
                                              r.a.createElement(k.a, {
                                                  content:
                                                      "wallet.restore_success",
                                                  name: e.toUpperCase()
                                              })
                                          ),
                                          r.a.createElement(
                                              c.b,
                                              {to: "/"},
                                              r.a.createElement(
                                                  "div",
                                                  {className: "button outline"},
                                                  r.a.createElement(k.a, {
                                                      component: "span",
                                                      content:
                                                          "header.dashboard"
                                                  })
                                              )
                                          ),
                                          r.a.createElement(
                                              "div",
                                              null,
                                              this.props.children
                                          )
                                      )
                                    : r.a.createElement(
                                          "span",
                                          null,
                                          r.a.createElement(
                                              "h3",
                                              null,
                                              r.a.createElement(k.a, {
                                                  content:
                                                      "wallet.ready_to_restore"
                                              })
                                          ),
                                          r.a.createElement(
                                              "button",
                                              {
                                                  className:
                                                      "btn large outline",
                                                  onClick: this.onRestore.bind(
                                                      this
                                                  )
                                              },
                                              couterpart.translate(
                                                  "wallet.restore_wallet_of",
                                                  {name: e}
                                              )
                                          )
                                      );
                            }
                        },
                        {
                            key: "onRestore",
                            value: function() {
                                u.a.restore(
                                    this.props.wallet.new_wallet,
                                    this.props.backup.wallet_object
                                ),
                                    E.a.changeSetting({
                                        setting: "passwordLogin",
                                        value: !1
                                    });
                            }
                        }
                    ]),
                    t
                );
            })();
            T = Object(s.connect)(T, P);
            var A = (function(e) {
                function t() {
                    S(this, t);
                    var e = N(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {new_wallet: null, accept: !1}), e;
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                var e = !!this.props.wallet.current_wallet;
                                if (!e) {
                                    var t = "default";
                                    this.props.backup.name &&
                                        (t = this.props.backup.name.match(
                                            /[a-z0-9_-]*/
                                        )[0]),
                                        p.a.setNewWallet(t),
                                        this.setState({accept: !0});
                                }
                                if (
                                    e &&
                                    this.props.backup.name &&
                                    !this.state.new_wallet
                                ) {
                                    var n = this.props.backup.name
                                        .toLowerCase()
                                        .match(/[a-z0-9_-]*/)[0];
                                    n && this.setState({new_wallet: n});
                                }
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                if (this.state.accept)
                                    return r.a.createElement(
                                        "span",
                                        null,
                                        this.props.children
                                    );
                                var e = !!this.state.new_wallet,
                                    t =
                                        !!e &&
                                        this.props.wallet.wallet_names.has(
                                            this.state.new_wallet
                                        ),
                                    n = !t && e;
                                return r.a.createElement(
                                    "form",
                                    {onSubmit: this.onAccept.bind(this)},
                                    r.a.createElement(
                                        "h5",
                                        null,
                                        r.a.createElement(k.a, {
                                            content: "wallet.new_wallet_name"
                                        })
                                    ),
                                    r.a.createElement("input", {
                                        type: "text",
                                        id: "new_wallet",
                                        onChange: this.formChange.bind(this),
                                        value: this.state.new_wallet
                                    }),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        t
                                            ? r.a.createElement(k.a, {
                                                  content: "wallet.wallet_exist"
                                              })
                                            : null
                                    ),
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "btn large outline",
                                            disabled: !n,
                                            onClick: this.onAccept.bind(this)
                                        },
                                        C.a.translate("wallet.accept")
                                    )
                                );
                            }
                        },
                        {
                            key: "onAccept",
                            value: function(e) {
                                e && e.preventDefault(),
                                    this.setState({accept: !0}),
                                    p.a.setNewWallet(this.state.new_wallet);
                            }
                        },
                        {
                            key: "formChange",
                            value: function(e) {
                                var t = e.target.id,
                                    n = e.target.value;
                                if (
                                    "new_wallet" !== t ||
                                    ((n = n.toLowerCase()),
                                    !/[^a-z0-9_-]/.test(n))
                                ) {
                                    var a = {};
                                    (a[t] = n), this.setState(a);
                                }
                            }
                        }
                    ]),
                    t
                );
            })();
            A = Object(s.connect)(A, P);
            var D = (function(e) {
                function t() {
                    return (
                        S(this, t),
                        N(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                try {
                                    this.isFileSaverSupported = !!new Blob();
                                } catch (e) {}
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.isFileSaverSupported ||
                                    d.a.error("File saving is not supported");
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.onDownload.bind(this)
                                    },
                                    r.a.createElement(k.a, {
                                        content: "wallet.download"
                                    })
                                );
                            }
                        },
                        {
                            key: "onDownload",
                            value: function() {
                                var e = new Blob([this.props.backup.contents], {
                                    type:
                                        "application/octet-stream; charset=us-ascii"
                                });
                                if (e.size !== this.props.backup.size)
                                    throw new Error(
                                        "Invalid backup to download conversion"
                                    );
                                Object(b.saveAs)(e, this.props.backup.name),
                                    u.a.setBackupDate(),
                                    this.props.downloadCb &&
                                        this.props.downloadCb();
                            }
                        }
                    ]),
                    t
                );
            })();
            D = Object(s.connect)(D, P);
            var F = (function(e) {
                function t() {
                    return (
                        S(this, t),
                        N(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "getBackupName",
                            value: function() {
                                return Object(g.a)(
                                    this.props.wallet.current_wallet
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                if (!!this.props.backup.contents)
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        this.props.children
                                    );
                                var e = null != m.a.getWallet();
                                return r.a.createElement(
                                    "div",
                                    null,
                                    this.props.noText
                                        ? null
                                        : r.a.createElement(
                                              "div",
                                              {style: {textAlign: "left"}},
                                              this.props.newAccount
                                                  ? r.a.createElement(k.a, {
                                                        component: "p",
                                                        content:
                                                            "wallet.backup_new_account"
                                                    })
                                                  : null,
                                              r.a.createElement(k.a, {
                                                  component: "p",
                                                  content:
                                                      "wallet.backup_explain"
                                              })
                                          ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            onClick: this.onCreateBackup.bind(
                                                this
                                            ),
                                            className: _()(
                                                "button btn large inverted",
                                                {disabled: !e}
                                            ),
                                            style: {marginBottom: 10}
                                        },
                                        r.a.createElement(k.a, {
                                            content: "wallet.create_backup_of",
                                            name: this.props.wallet
                                                .current_wallet
                                        })
                                    ),
                                    r.a.createElement(R, null)
                                );
                            }
                        },
                        {
                            key: "onCreateBackup",
                            value: function() {
                                var e = this,
                                    t = m.a.getWallet().password_pubkey;
                                Object(f.a)(t).then(function(t) {
                                    var n = e.getBackupName();
                                    f.c.incommingBuffer({name: n, contents: t});
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            F = Object(s.connect)(F, P);
            var R = (function(e) {
                    function t() {
                        return (
                            S(this, t),
                            N(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        W(t, a["Component"]),
                        j(t, [
                            {
                                key: "render",
                                value: function() {
                                    if (!m.a.getWallet()) return null;
                                    var e = m.a.getWallet().backup_date,
                                        t = m.a.getWallet().last_modified,
                                        n = e
                                            ? r.a.createElement(
                                                  "h4",
                                                  null,
                                                  r.a.createElement(k.a, {
                                                      content:
                                                          "wallet.last_backup"
                                                  }),
                                                  " ",
                                                  r.a.createElement(i.a, {
                                                      value: e
                                                  })
                                              )
                                            : r.a.createElement(k.a, {
                                                  style: {paddingTop: 20},
                                                  className: "facolor-error",
                                                  component: "p",
                                                  content:
                                                      "wallet.never_backed_up"
                                              }),
                                        a = null;
                                    return (
                                        e &&
                                            (a =
                                                t.getTime() > e.getTime()
                                                    ? r.a.createElement(
                                                          "h4",
                                                          {
                                                              className:
                                                                  "facolor-error"
                                                          },
                                                          r.a.createElement(
                                                              k.a,
                                                              {
                                                                  content:
                                                                      "wallet.need_backup"
                                                              }
                                                          )
                                                      )
                                                    : r.a.createElement(
                                                          "h4",
                                                          {
                                                              className:
                                                                  "success"
                                                          },
                                                          r.a.createElement(
                                                              k.a,
                                                              {
                                                                  content:
                                                                      "wallet.noneed_backup"
                                                              }
                                                          )
                                                      )),
                                        r.a.createElement("span", null, n, a)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                z = (function(e) {
                    function t() {
                        return (
                            S(this, t),
                            N(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        W(t, a["Component"]),
                        j(t, [
                            {
                                key: "reset",
                                value: function() {
                                    f.c.reset();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = r.a.createElement(
                                        "div",
                                        {style: {paddingTop: 20}},
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: "btn large outline",
                                                disabled: !this.props.backup
                                                    .contents,
                                                onClick: this.reset.bind(this)
                                            },
                                            C.a.translate("wallet.reset")
                                        )
                                    );
                                    if (
                                        this.props.backup.contents &&
                                        this.props.backup.public_key
                                    )
                                        return r.a.createElement(
                                            "span",
                                            null,
                                            this.props.children,
                                            e
                                        );
                                    var t =
                                        this.props.backup.contents &&
                                        !this.props.backup.public_key;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("input", {
                                            ref: "file_input",
                                            accept: ".bin",
                                            type: "file",
                                            id: "backup_input_file",
                                            onChange: this.onFileUpload.bind(
                                                this
                                            )
                                        }),
                                        t
                                            ? r.a.createElement(
                                                  "h5",
                                                  null,
                                                  r.a.createElement(k.a, {
                                                      content:
                                                          "wallet.invalid_format"
                                                  })
                                              )
                                            : null,
                                        e
                                    );
                                }
                            },
                            {
                                key: "onFileUpload",
                                value: function(e) {
                                    var t = e.target.files[0];
                                    f.c.incommingWebFile(t), this.forceUpdate();
                                }
                            }
                        ]),
                        t
                    );
                })();
            z = Object(s.connect)(z, P);
            var M = (function(e) {
                function t() {
                    return (
                        S(this, t),
                        N(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "span",
                                    null,
                                    r.a.createElement(
                                        "h5",
                                        null,
                                        r.a.createElement(
                                            "b",
                                            null,
                                            this.props.backup.name
                                        ),
                                        " (",
                                        this.props.backup.size,
                                        " ",
                                        "bytes)"
                                    ),
                                    this.props.backup.last_modified
                                        ? r.a.createElement(
                                              "div",
                                              null,
                                              this.props.backup.last_modified
                                          )
                                        : null,
                                    r.a.createElement("br", null)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            M = Object(s.connect)(M, P);
            var U = (function(e) {
                function t() {
                    S(this, t);
                    var e = N(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = e._getInitialState()), e;
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "_getInitialState",
                            value: function() {
                                return {backup_password: "", verified: !1};
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.state.verified
                                    ? r.a.createElement(
                                          "span",
                                          null,
                                          this.props.children
                                      )
                                    : r.a.createElement(
                                          "form",
                                          {
                                              onSubmit: this.onPassword.bind(
                                                  this
                                              )
                                          },
                                          r.a.createElement(
                                              "label",
                                              null,
                                              r.a.createElement(k.a, {
                                                  content:
                                                      "wallet.enter_password"
                                              })
                                          ),
                                          r.a.createElement("input", {
                                              type: "password",
                                              id: "backup_password",
                                              onChange: this.formChange.bind(
                                                  this
                                              ),
                                              value: this.state.backup_password
                                          }),
                                          r.a.createElement(I, null),
                                          r.a.createElement(
                                              "div",
                                              {
                                                  type: "submit",
                                                  className: "button outline",
                                                  onClick: this.onPassword.bind(
                                                      this
                                                  )
                                              },
                                              r.a.createElement(k.a, {
                                                  content: "wallet.submit"
                                              })
                                          )
                                      );
                            }
                        },
                        {
                            key: "onPassword",
                            value: function(e) {
                                var t = this;
                                e && e.preventDefault();
                                var n = y.h.fromSeed(
                                        this.state.backup_password || ""
                                    ),
                                    a = this.props.backup.contents;
                                Object(f.b)(n.toWif(), a)
                                    .then(function(e) {
                                        t.setState({verified: !0}),
                                            t.props.saveWalletObject &&
                                                h.a.setWalletObjct(e);
                                    })
                                    .catch(function(e) {
                                        console.error(
                                            "Error verifying wallet " +
                                                t.props.backup.name,
                                            e,
                                            e.stack
                                        ),
                                            "invalid_decryption_key" === e
                                                ? d.a.error("Invalid Password")
                                                : d.a.error("" + e);
                                    });
                            }
                        },
                        {
                            key: "formChange",
                            value: function(e) {
                                var t = {};
                                (t[e.target.id] = e.target.value),
                                    this.setState(t);
                            }
                        }
                    ]),
                    t
                );
            })();
            (U.propTypes = {saveWalletObject: o.a.bool}),
                (U = Object(s.connect)(U, P));
            var I = (function(e) {
                function t() {
                    return (
                        S(this, t),
                        N(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    W(t, a["Component"]),
                    j(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "pre",
                                        {className: "no-overflow"},
                                        this.props.backup.sha1,
                                        " * SHA1"
                                    ),
                                    r.a.createElement("br", null)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            I = Object(s.connect)(I, P);
        }
    }
]);