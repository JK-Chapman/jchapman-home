import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ProjectInfo = {
    name: string;
    icon: IconDefinition;
    description: string;
    imageUrl?: string; // Optional image URL for the project
}

export function ProjectCard(projectInfo: ProjectInfo) {
    return (
        <div className="block p-6 my-2 max-h-md bg-slate-900 border border-slate-400 rounded-lg shadow-sm hover:bg-slate-800 transition-colors duration-300">
            <h1 className="flex flex-row text-2xl mb-2">
                {projectInfo.name} <FontAwesomeIcon className="fa-md ml-2" icon={projectInfo.icon}/>
            </h1>
            <div className="flex flex-row">
                <img className="flex-col w-20 h-20 object-cover border-4 border-white-700" alt="ProjectDescription" src={projectInfo.imageUrl} />
                <p className="flex-col ml-2">{projectInfo.description}</p>
            </div>
        </div>
    )
}