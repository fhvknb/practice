import React, { PureComponent } from 'react';

class Radio extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    _handleSelect = val => {
        let { onChange } = this.props;

        onChange && onChange(val === '0' ? true : false);
    };
    componentDidMount() {}

    render() {
        let {
            valueOne = '是',
            valueTwo = '否',
            value,
            underline = true,
            required = true,
        } = this.props;
        let checked = value ? '0' : '1';

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
                        <div
                            flex="main:left cross:center"
                            style={{ marginBottom: '10px' }}
                        >
                            <div>
                                <div
                                    className={
                                        checked === '0'
                                            ? 'app-radio app-radio-active'
                                            : 'app-radio'
                                    }
                                    flex="main:center cross:center"
                                    onClick={() => this._handleSelect('0')}
                                >
                                    <span className="app-radio-inner"></span>
                                </div>
                            </div>
                            <span
                                className="app-radio-option"
                                style={{ marginRight: '10px' }}
                                onClick={() => this._handleSelect('0')}
                            >
                                {valueOne}
                            </span>
                        </div>
                        <div flex="main:left cross:center">
                            <div>
                                <div
                                    className={
                                        checked === '1'
                                            ? 'app-radio app-radio-active'
                                            : 'app-radio'
                                    }
                                    flex="main:center cross:center"
                                    onClick={() => this._handleSelect('1')}
                                >
                                    <span className="app-radio-inner"></span>
                                </div>
                            </div>
                            <span
                                className="app-radio-option"
                                onClick={() => this._handleSelect('1')}
                            >
                                {valueTwo}
                            </span>
                        </div>
                    </div>
                </div>
                {underline && <div className="app-underline"></div>}
            </div>
        );
    }
}

export default Radio;
