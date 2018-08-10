import React from "react";

import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
    hashHistory,
    Redirect
} from "react-router/es";
import willTransitionTo from "./routerTransition";
import App from "./App";

// Components imported here for react hot loader (does not work with async route loading)
import DashboardPage from "./components-brand-new/Dashboard/DashboardPage";
import DashboardAccountsOnly from "./components/Dashboard/DashboardAccountsOnly";
import Witnesses from "./components-brand-new/Explorer/Witnesses";
import CommitteeMembers from "./components-brand-new/Explorer/CommitteeMembers";
import FeesContainer from "./components-brand-new/Explorer/FeesContainer";
import BlocksContainer from "./components-brand-new/Explorer/BlocksContainer";
import AssetsContainer from "./components-brand-new/Explorer/AssetsContainer";
import AccountsContainer from "./components-brand-new/Explorer/AccountsContainer";
import Explorer from "./components-brand-new/Explorer/Explorer";
import AccountPage from "./components-brand-new/Account/AccountPage";
import AccountOverview from "./components-brand-new/Account/AccountOverview";
import AccountAssets from "./components-brand-new/Account/AccountAssets";
import {AccountAssetCreate} from "./components/Account/AccountAssetCreate";
import AccountAssetUpdate from "./components/Account/AccountAssetUpdate";
import AccountMembership from "./components-brand-new/Account/AccountMembership";
import AccountVesting from "./components-brand-new/Account/AccountVesting";
import AccountDepositWithdraw from "./components/Account/AccountDepositWithdraw";
import AccountPermissions from "./components-brand-new/Account/AccountPermissions";
import AccountWhitelist from "./components-brand-new/Account/AccountWhitelist";
import AccountVoting from "./components-brand-new/Account/AccountVoting";
import Page404 from "./components/Page404/Page404";
// import AccountOrders from "./components/Account/AccountOrders";
import AccountSignedMessages from "./components-brand-new/Account/AccountSignedMessages";
import ExchangeContainer from "./components/Exchange/ExchangeContainer";
import MarketsContainer from "./components-brand-new/Explorer/MarketsContainer";
import Transfer from "./components/Transfer/Transfer";
import SettingsContainer from "./components-brand-new/Settings/SettingsContainer";
import BlockContainer from "./components/Blockchain/BlockContainer";
import Asset from "./components/Blockchain/Asset";
import CreateAccount from "./components/Account/CreateAccount";
import CreateAccountPassword from "./components/Account/CreateAccountPassword";
import {
    ExistingAccount,
    ExistingAccountOptions
} from "./components/Wallet/ExistingAccount";
import {
    WalletCreate,
    CreateWalletFromBrainkey
} from "./components/Wallet/WalletCreate";
import ImportKeys from "./components/Wallet/ImportKeys";
import Invoice from "./components/Transfer/Invoice";
import {BackupCreate, BackupRestore} from "./components/Wallet/Backup";
import WalletChangePassword from "./components/Wallet/WalletChangePassword";
import {
    WalletManager,
    WalletOptions,
    ChangeActiveWallet,
    WalletDelete
} from "./components/Wallet/WalletManager";
import BalanceClaimActive from "./components/Wallet/BalanceClaimActive";
import BackupBrainkey from "./components/Wallet/BackupBrainkey";
import Brainkey from "./components/Wallet/Brainkey";
import News from "./components/News";
import HelpContent from "./components-brand-new/Help/Content";
import HelpSidebar from "./components-brand-new/Help/Sidebar";
import InitError from "./components/InitError";
import LoginSelector from "./components/LoginSelector";
import CreateWorker from "./components/Account/CreateWorker";
import Header from "./components-brand-new/Layout/Header";
import Footer from "./components-brand-new/Layout/Footer";
import Sidebar from "./components-brand-new/Layout/Sidebar";

const history = __HASH_HISTORY__ ? hashHistory : browserHistory;

class Auth extends React.Component {
    render() {
        return null;
    }
}

const routes = (
    <Route path="/" component={App} onEnter={willTransitionTo}>
        <IndexRoute
            components={{
                headerBlock: Header,
                sidebarBlock: Sidebar,
                contentBlock: DashboardPage,
                footerBlock: Footer
            }}
        />
        <Route path="/auth/:data" component={Auth} />
        <Route
            path="explorer"
            components={{
                headerBlock: Header,
                sidebarBlock: null, // Sidebar
                contentBlock: Explorer,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/fees"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: FeesContainer,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/blocks"
            component={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: BlocksContainer,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/assets"
            component={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: AssetsContainer,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/accounts"
            component={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: AccountsContainer,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/witnesses"
            component={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: Witnesses,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/committee-members"
            component={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: CommitteeMembers,
                footerBlock: Footer
            }}
        />

        <Route path="wallet" component={WalletManager}>
            {/* wallet management console */}
            <IndexRoute component={WalletOptions} />
            <Route path="change" component={ChangeActiveWallet} />
            <Route path="change-password" component={WalletChangePassword} />
            <Route path="import-keys" component={ImportKeys} />
            <Route path="brainkey" component={ExistingAccountOptions} />
            <Route path="create" component={WalletCreate} />
            <Route path="delete" component={WalletDelete} />
            <Route path="backup/restore" component={BackupRestore} />
            <Route path="backup/create" component={BackupCreate} />
            <Route path="backup/brainkey" component={BackupBrainkey} />
            <Route path="balance-claims" component={BalanceClaimActive} />
        </Route>

        <Route path="create-wallet" component={WalletCreate} />
        <Route
            path="create-wallet-brainkey"
            component={CreateWalletFromBrainkey}
        />

        <Route path="transfer" component={Transfer} />

        <Route path="invoice/:data" component={Invoice} />
        <Route
            path="explorer/markets"
            component={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: MarketsContainer,
                footerBlock: Footer
            }}
        />
        <Route
            path="market/:marketID"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: ExchangeContainer,
                footerBlock: Footer
            }}
        />
        <Route
            path="settings"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: SettingsContainer,
                footerBlock: Footer
            }}
        />
        <Route
            path="settings/:tab"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: SettingsContainer,
                footerBlock: Footer
            }}
        />
        <Route path="block/:height" component={BlockContainer} />
        <Route path="asset/:symbol" component={Asset} />
        <Route path="create-account" component={LoginSelector}>
            <Route path="wallet" component={CreateAccount} />
            <Route path="password" component={CreateAccountPassword} />
        </Route>

        <Route path="existing-account" component={ExistingAccount}>
            <IndexRoute component={BackupRestore} />
            <Route path="import-backup" component={ExistingAccountOptions} />
            <Route path="import-keys" component={ImportKeys} />
            <Route path="brainkey" component={Brainkey} />
            <Route path="balance-claim" component={BalanceClaimActive} />
        </Route>

        <Route path="/accounts" component={DashboardAccountsOnly} />

        <Route
            path="/account/:account_name"
            components={{
                headerBlock: Header,
                sidebarBlock: Sidebar,
                contentBlock: AccountPage,
                footerBlock: Footer
            }}
        >
            <IndexRoute component={AccountOverview} />
            {/* <Route path="dashboard" component={AccountOverview} /> */}
            {/* <Route path="deposit-withdraw" component={AccountDepositWithdraw} /> */}
            {/* <Route path="orders" component={AccountOrders} /> */}

            <Route path="assets" component={AccountAssets} />
            <Route path="create-asset" component={AccountAssetCreate} />
            <Route path="update-asset/:asset" component={AccountAssetUpdate} />
            <Route path="member-stats" component={AccountMembership} />
            <Route path="vesting" component={AccountVesting} />
            <Route path="permissions" component={AccountPermissions} />
            <Route path="voting" component={AccountVoting} />
            <Route path="whitelist" component={AccountWhitelist} />
            <Route path="signedmessages" component={AccountSignedMessages} />
            <Redirect from="overview" to="/account/:account_name" />
            <Redirect from="dashboard" to="/account/:account_name" />
            <Redirect from="orders" to="/account/:account_name" />
        </Route>

        <Route path="deposit-withdraw" component={AccountDepositWithdraw} />
        <Route path="create-worker" component={CreateWorker} />
        <Route path="/init-error" component={InitError} />
        <Route path="/news" component={News} />
        <Route
            path="/help"
            components={{
                headerBlock: Header,
                sidebarBlock: HelpSidebar,
                contentBlock: HelpContent,
                footerBlock: Footer
            }}
        >
            <Route
                path=":path1"
                components={{
                    headerBlock: Header,
                    sidebarBlock: HelpSidebar,
                    contentBlock: HelpContent,
                    footerBlock: Footer
                }}
            >
                <Route
                    path=":path2"
                    components={{
                        headerBlock: Header,
                        sidebarBlock: HelpSidebar,
                        contentBlock: HelpContent,
                        footerBlock: Footer
                    }}
                >
                    <Route
                        path=":path3"
                        components={{
                            headerBlock: Header,
                            sidebarBlock: HelpSidebar,
                            contentBlock: HelpContent,
                            footerBlock: Footer
                        }}
                    />
                </Route>
            </Route>
        </Route>
        <Route path="*" component={Page404} />
    </Route>
);

export default class Routes extends React.Component {
    render() {
        return <Router history={history} routes={routes} />;
    }
}
