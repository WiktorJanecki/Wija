import React from 'react'
import Panel from '../components/Panel';

class panel extends React.Component{
    render(){
        return(
            <>
                <Panel history={this.props.history} userObject={{success: false}}/>
            </>
        );
    }
}
export default panel;