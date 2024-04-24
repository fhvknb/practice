import React, { PureComponent } from 'react';

class Alert extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount () {}
    render() {
        let  { buttonNumber=1 } = this.props;
        return <div className="app-alert-wrap"  flex="main:center cross:center ">
            <div　className="app-alert-box">
                <div className="app-alert-content">{this.props.content}</div>
                {buttonNumber === 1 && <div className="app-alert-button" onClick={ this.props.comfirm}　style={{textAlign: 'center'}}>确认</div>}
                {
                    buttonNumber === 2 && 
                    <div flex="main:center cross:center box:mean " >
                        <div className="app-alert-button" style={{textAlign: 'center', color:'#858585',borderRight: '1px solid #EBEBEB' }} onClick={!!this.props.cancel && this.props.cancel}>取消</div>
                        <div className="app-alert-button" style={{textAlign: 'center'}} onClick={this.props.comfirm}>确认</div>
                    </div>
                }
            </div>
        </div>
    }
}

export default Alert;