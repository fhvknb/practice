import React, { PureComponent } from 'react';
import DatePicker from 'antd-mobile/lib/date-picker';
import 'antd-mobile/lib/date-picker/style/css';

const CustomChildren = ({
    extra,
    onClick,
    children,
    underline,
    required,
    errMsg,
}) => (
    <div className="app-bg" onClick={onClick}>
        <div flex="main:left cross:center box:first" className="app-radio-wrap">
            <div>
                <div className="app-radio-label">
                    {children}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </div>
            </div>
            <div>
                <div
                    flex="main:left cross:center"
                    style={{ color: '#757575', fontSize: '15px' }}
                >
                    {extra}
                </div>
            </div>
        </div>
        {!!errMsg && <p className="app-input-err">{errMsg}</p>}
        {underline && <div className="app-underline"></div>}
    </div>
);

class MyDatePicker extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}
    render() {
        let {
            label,
            extra,
            value,
            onChange,
            required,
            underline,
            errMsg,
        } = this.props;
        return (
            <DatePicker
                mode="date"
                extra={extra}
                value={value}
                onChange={onChange}
                format="YYYY-MM-DD"
            >
                <CustomChildren
                    required={required}
                    underline={underline}
                    errMsg={errMsg}
                >
                    {label}
                </CustomChildren>
            </DatePicker>
        );
    }
}

export default MyDatePicker;
