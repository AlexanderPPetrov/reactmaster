import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
    button: {
        marginLeft: 5,
    },
    linkColor:'#888'
};


class Header extends Component {

    render() {
        return (
            <Paper className="Header">
                <RaisedButton
                    label="Home"
                    key="Home"
                    style={styles.button}
                    containerElement={<Link className="HeaderLink" to="/">Home</Link>}
                    icon={<span className="glyphicon glyphicon-home" aria-hidden="true"></span>}
                />
                <RaisedButton
                    label="Categories"
                    key="Categories"
                    style={styles.button}
                    labelColor={styles.linkColor}
                    containerElement={<Link className="HeaderLink" to="/categories">Categories</Link>}
                    icon={<span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>}
                />
                <RaisedButton
                    label="Chart"
                    key="Chart"
                    style={styles.button}
                    labelColor={styles.linkColor}
                    containerElement={<Link className="HeaderLink" to="/chart">Chart</Link>}
                    icon={<span className="glyphicon glyphicon-stats" aria-hidden="true"></span>}
                />
            </Paper>
    );
    }
}

export default Header;
