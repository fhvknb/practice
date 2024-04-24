import React, { PureComponent } from 'react';

class Radio extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    _handleSelect = idx => {
        let { onChange } = this.props;

        onChange && onChange(idx);
    };
    componentDidMount() {}

    render() {
        let { children, value, underline = true, required = true } = this.props;

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
                        {children.length > 0 &&
                            children.map((item, idx) => {
                                return (
                                    <div
                                        flex="main:left cross:center　box:last"
                                        style={{ marginBottom: '10px' }}
                                        key={idx}
                                    >
                                        <div flex="main:center cross:center">
                                            <div
                                                className={
                                                    value === idx
                                                        ? 'app-radio app-radio-active'
                                                        : 'app-radio'
                                                }
                                                flex="main:center cross:center"
                                                onClick={() =>
                                                    this._handleSelect(idx)
                                                }
                                            >
                                                <span className="app-radio-inner"></span>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="app-radio-option"
                                                style={{ marginRight: '10px' }}
                                                onClick={() =>
                                                    this._handleSelect(idx)
                                                }
                                            >
                                                {item}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                {!!this.props.errMsg && (
                    <p className="app-input-err">{this.props.errMsg}</p>
                )}
                {underline && <div className="app-underline"></div>}
            </div>
        );
    }
}

export default Radio;
