export interface IProject {
    name:string,
    img:string,
    description:string,
    gitUrl:string,
    prodUrl:string,
}
export interface IProjectProps {
    data:IProject,
    history?:any,
}

export interface IProjectListProps {
    projects:IProject[],
}

export interface IProjectDetailProps {
    getProject:Function,
    match?:any,
    history?:any,
}
