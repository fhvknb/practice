import React, { PureComponent } from 'react';
import { getCurrentTime, getDateList } from '../utils'


class TimeFilter extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
            current: ''
        }
        this.filterDate = getDateList();

        // console.log(this.filterDate)
    }
    _showFilter = () => {
        let { isShow } = this.state;
        this.setState({
            isShow: !isShow
        })
    }
    _handleSelect = (date) => {
        let { onChange } = this.props;
        this.setState({
            isShow: false,
            current: date.wordTime
        });
        onChange && onChange(date.numTime);
    }
    componentDidMount () {
        let current = getCurrentTime().wordTime;
        this.setState({
            current
        })

    }
    render() {
        return <div >
                <div className="app-time-filter" flex="main:center cross:center"  onClick={this._showFilter}>
                    <span>{this.state.current}</span>
                    <div className="app-icon-pull">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {
                    this.state.isShow &&  <div style={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        zIndex: 9
                    }}>
                        <ul style={styles.filterWrap}>
                            {
                                this.filterDate.map( (item, idx) => {
                                    return <li style={styles.item} key={idx} onClick={() => this._handleSelect(item)}>
                                            <div style={{ borderBottom: '1px solid #EBEBEB'}}>{item.wordTime}<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
                                        </li>
                                })
                            }
                            
                        </ul>
                    </div>
                }
            </div>
    }
}

const styles = {
    filterWrap: {
        margin: 0,
        padding: 0,
        position: 'absolute',
        top: '45px',
        width: '100%'

    },
    item: {
        margin: 0,
        padding: '0 20px',
        backgroundColor: '#fff',
        height: '45px',
        lineHeight: '45px',
        textAlign: 'center',
        borderBottom: '1px solid #EBEBEB'
    },

}

export default TimeFilter;