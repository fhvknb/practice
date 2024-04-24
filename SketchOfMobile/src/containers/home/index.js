import React, { Component, Fragment } from 'react';
// import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}
    render() {
        return (
            <div flex="main:top cross:center dir:top" style={styles.wrap}>
                <div style={styles.card}>1</div>
                <div style={styles.card}>2</div>
            </div>
        );
    }
}

const styles = {
    wrap: {
        background: 'rgba(255,255,255,1)',
    },
    card: {
        width: '3.35rem',
        height: '1.43rem',
        fontSize: '0.15rem',
        marginTop: '0.2rem',
        boxShadow: '0px 0px 8px 0px rgba(0,78,204,0.1)',
        borderRadius: '0.04rem',
    },
};

export default Home;
