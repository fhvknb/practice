import React, { PureComponent } from 'react';

const selected_icon = require('../assets/images/selected.png');
const unselect_icon = require('../assets/images/unselect.png');

class Radio extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            val1: false,
            val2: false,
            val3: false,
        };
    }

    _handleSelect = idx => {
        let { onChange } = this.props;
        let { val1, val2, val3 } = this.state;
        if (idx === 1) {
            if (val3) return;
            this.setState(
                {
                    val1: !val1,
                    val3: false,
                },
                () => {
                    let { val1, val2, val3 } = this.state;
                    onChange && onChange([val1, val2, val3]);
                }
            );
        } else if (idx === 2) {
            if (val3) return;

            this.setState(
                {
                    val2: !val2,
                    val3: false,
                },
                () => {
                    let { val1, val2, val3 } = this.state;
                    onChange && onChange([val1, val2, val3]);
                }
            );
        } else if (idx === 3) {
            if (val1 || val2) return;
            this.setState(
                {
                    val3: !val3,
                    val1: false,
                    val2: false,
                },
                () => {
                    let { val1, val2, val3 } = this.state;
                    onChange && onChange([val1, val2, val3]);
                }
            );
        }
    };
    componentDidUpdate() {
        let { value } = this.props;
        this.setState({
            val1: value[0],
            val2: value[1],
            val3: value[2],
        });
    }
    componentDidMount() {}

    render() {
        let {
            valueOne = '是',
            valueTwo = '否',
            valueThree,
            underline = true,
            required = true,
        } = this.props;

        return (
            <div className="app-bg">
                <div
                    flex="main:left cross:center box:first"
                    className="app-radio2-wrap"
                >
                    <div>
                        <div className="app-radio-label">
                            {this.props.label}
                            {required && (
                                <span style={{ color: 'red' }}>*</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: '20px 0' }}>
                        <div flex="main:left cross:center">
                            <div
                                className="app-radio-option"
                                style={{
                                    paddingLeft: '30px',
                                    backgroundImage: `url(${
                                        this.state.val1
                                            ? selected_icon
                                            : unselect_icon
                                    })`,
                                    backgroundSize: '20px',
                                    backgroundPosition: 'left center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                onClick={() => this._handleSelect(1)}
                            >
                                {valueOne}
                            </div>
                        </div>
                        <div
                            flex="main:left cross:center"
                            style={{ marginTop: '10px' }}
                        >
                            <div
                                className="app-radio-option"
                                style={{
                                    paddingLeft: '30px',
                                    backgroundImage: `url(${
                                        this.state.val2
                                            ? selected_icon
                                            : unselect_icon
                                    })`,
                                    backgroundSize: '20px',
                                    backgroundPosition: 'left center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                onClick={() => this._handleSelect(2)}
                            >
                                {valueTwo}
                            </div>
                        </div>
                        {valueThree && (
                            <div
                                flex="main:left cross:center"
                                style={{ marginTop: '10px' }}
                            >
                                <div
                                    className="app-radio-option"
                                    style={{
                                        paddingLeft: '30px',
                                        backgroundImage: `url(${
                                            this.state.val3
                                                ? selected_icon
                                                : unselect_icon
                                        })`,
                                        backgroundSize: '20px',
                                        backgroundPosition: 'left center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    onClick={() => this._handleSelect(3)}
                                >
                                    {valueThree}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {!!this.props.errMsg && !this.state.isReadyShow && (
                    <p className="app-input-err">{this.props.errMsg}</p>
                )}
                {underline && <div className="app-underline"></div>}
            </div>
        );
    }
}

export default Radio;
