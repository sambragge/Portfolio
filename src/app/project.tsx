import * as React from 'react';
import { IProjectProps } from './interfaces';
import { withRouter } from 'react-router-dom';

class Project extends React.Component<IProjectProps, {}>{

    private handleClick(e:Event):void{
        this.props.history.push("/project/"+this.props.data.name);
    }

    public render(){
        return(
            <div className="project" onClick={this.handleClick.bind(this)}>
                <h5>{this.props.data.name}</h5>
                <p>{this.props.data.description}</p>
            </div>
        );
    }
}

export default withRouter(Project);