import React from "react";
import Translate from "react-translate-component";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import WithdrawModal from "./WithdrawModal";

class Instructions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            modalActive: false
        };

        this.activateModal = this.activateModal.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            type: props.type
        });
    }

    activateModal() {
        this.setState({
            modalActive: true
        });
    }

    render() {
        return (
            <div className="small-12 medium-7">
                <h4>
                    {this.state.type == LLCGateway.WITHDRAW
                        ? counterpart.translate("gateway.withdraw_inst")
                        : counterpart.translate("gateway.deposit_inst")}
                </h4>
                <div style={{padding: "10px 0px", fontSize: "1.1rem"}}>
                    {this.state.type == LLCGateway.WITHDRAW ? (
                        <div>
                            <label className="left-label">
                                <span>
                                    <Translate
                                        content="gateway.withdraw_to"
                                        asset={"LLC"}
                                    />
                                </span>:
                            </label>
                            <div
                                className="button-group"
                                style={{paddingTop: 20}}
                            >
                                <button
                                    onClick={this.activateModal}
                                    className="button success"
                                    style={{fontSize: "1.3rem"}}
                                >
                                    <span>
                                        {counterpart.translate(
                                            "gateway.withdraw_now"
                                        )}
                                    </span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <label className="left-label">
                                <Translate
                                    content="gateway.deposit_to"
                                    asset={"LLC"}
                                />:
                            </label>
                            <label className="left-label">
                                <b>
                                    <span>
                                        <Translate
                                            content="gateway.rudex.min_amount"
                                            minAmount={1}
                                            symbol={"LLC"}
                                        />
                                    </span>
                                </b>
                            </label>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            {counterpart
                                                .translate("gateway.address")
                                                .toUpperCase()}:&nbsp;
                                            <b>
                                                <span>rudex</span>
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {counterpart
                                                .translate("gateway.memo")
                                                .toUpperCase()}:&nbsp;
                                            <b>
                                                <span>dex:ninetor-dot</span>
                                            </b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div
                                className="button-group"
                                style={{paddingTop: 10}}
                            >
                                <div className="button">
                                    {counterpart.translate(
                                        "gateway.copy_address"
                                    )}
                                </div>
                                <div className="button">
                                    {counterpart.translate("gateway.copy_memo")}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <WithdrawModal active={this.state.modalActive} />
            </div>
        );
    }
}

export default Instructions;
