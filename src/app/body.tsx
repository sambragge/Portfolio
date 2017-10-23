import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IProject } from './interfaces'; 

import ProjectList from './project_list';
import ProjectDetail from './project_detail';


class Body extends React.Component<{}, {}>{

    public projects:IProject[] = [
        {
            name:'Git Battle',
            img:'https://i.imgur.com/k96CXtZ.png',
            description:'Who is the stronger developer, have a git battle to find out!',
            gitUrl:'https://github.com/sambragge/Github-Battle',
            prodUrl:'https://github-battles-6aa71.firebaseapp.com/',
        },
        {
            name:'Forum',
            img:'https://i.imgur.com/mZFi7BO.png',
            description:'A place to participate in forum discussion and connect with other users.',
            gitUrl:'https://github.com/sambragge/forum',
            prodUrl:'http://52.10.230.216/',
        }
    ]



    public getProject(name:string):IProject{
        for(let i in this.projects){
            if (this.projects[i].name === name) {
                return this.projects[i];
            }
        }
    }

    public render():JSX.Element{

        const listProps = {
            projects:this.projects
        }
        const detailProps = {
            getProject:this.getProject.bind(this),
        }

        return(
            <Switch>
                <Route exact path="/" component={(props)=><ProjectList {...props} {...listProps}/>} />
                <Route path="/project/:name" component={(props)=><ProjectDetail {...props} {...detailProps}/>} />
            </Switch>
        );
    }
}

export default Body;