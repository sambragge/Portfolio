import * as React from 'react';
import { IProject, IProjectListProps } from './interfaces';
import Project from './project';

const ProjectList:React.SFC<IProjectListProps> = (props) => {

    const list = props.projects.map((proj, i)=>(
        <Project key={'project '+i} data={proj} />
    ));

    return(
        <div className="projectList">
            {list}
        </div>
    );
}

export default ProjectList;