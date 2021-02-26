import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReadyShow: false,
        };
    }

    _onChange = e => {
        let { onChange } = this.props;
        onChange && onChange(e.target.value);
    };
    _onBlur = () => {
        setTimeout(() => {
            this.setState({
                isReadyShow: false,
            });
        }, 100);
    };
    _onFocus = () => {
        this.setState({
            isReadyShow: true,
        });
    };
    _handleSelectValue = val => {
        let { onChange } = this.props;
        onChange && onChange(val);
    };
    componentDidMount() {}
    render() {
        let {
            errMsg,
            type,
            underline = true,
            index,
            filterArr,
            required = true,
        } = this.props;

        if (type && type === 'textarea') {
            return (
                <div className="app-bg">
                    <div
                        flex="main:left cross:top box:first"
                        className="app-textarea-wrap"
                    >
                        <div>
                            <div className="app-textarea－label">
                                {this.props.label}
                                {required && (
                                    <span style={{ color: 'red' }}> *</span>
                                )}
                            </div>
                        </div>
                        <textarea
                            placeholder={this.props.placeholder}
                            value={this.props.value}
                            onChange={this._onChange}
                        ></textarea>
                    </div>
                    {!!errMsg && !this.state.isReadyShow && (
                        <p className="app-input-err">{this.props.errMsg}</p>
                    )}
                    {underline && <div className="app-underline"></div>}
                </div>
            );
        } else {
            return (
                <div className="app-bg">
                    <div
                        flex="main:left cross:center box:first"
                        className="app-input-wrap"
                    >
                        <div>
                            <div className="app-input-label">
                                {this.props.label}
                                {required && (
                                    <span style={{ color: 'red' }}> *</span>
                                )}
                            </div>
                        </div>
                        <input
                            maxLength={this.props.maxlength}
                            type={this.props.type || 'text'}
                            placeholder={this.props.placeholder}
                            value={this.props.value}
                            onChange={this._onChange}
                            onBlur={this._onBlur}
                            onFocus={this._onFocus}
                        />
                    </div>
                    {this.state.isReadyShow &&
                        filterArr &&
                        filterArr.length > 0 && (
                            <ul
                                className="app-input-filter"
                                style={{ top: index * 55 + 'px' }}
                            >
                                {filterArr.map((item, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            onClick={() =>
                                                this._handleSelectValue(
                                                    item.name
                                                )
                                            }
                                        >
                                            {item.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                    {!!errMsg && !this.state.isReadyShow && (
                        <p className="app-input-err">{this.props.errMsg}</p>
                    )}
                    {underline && <div className="app-underline"></div>}
                </div>
            );
        }
    }
}

export default Input;
