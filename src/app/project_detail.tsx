import * as React from 'react';
import { IProject, IProjectDetailProps } from './interfaces';

class ProjectDetail extends React.Component<IProjectDetailProps, any> {

    private data:IProject;
    
    componentWillMount(){
        this.data = this.props.getProject(this.props.match.params.name);
    }

    public render(){
        return(
            <div className="projectDetail">
                <button className="backBtn" onClick={this.props.history.goBack} >Back</button>
                <div className="row">
                    <img src={this.data.img} alt={'not working'} className="six columns"/>
                    <ul className="six columns">
                        <li><a href={this.data.gitUrl}>Check out the code!</a></li>
                        <li><a href={this.data.prodUrl}>Check out the project!</a></li>
                    </ul>
                </div>
                <p className="twelve columns">{this.data.description}</p>
            </div>
        );
    }
}

export default ProjectDetail;