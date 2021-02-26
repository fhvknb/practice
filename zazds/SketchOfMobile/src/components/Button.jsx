import React, { PureComponent } from 'react';

class Button extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount () {}
    render() {
        let { disabled } = this.props;
        return <div onClick={disabled ? null : this.props.onPress} className={disabled ? 'app-button app-button-disabled' : 'app-button'}  >
            {this.props.title}
        </div>
    }
}

export default Button;