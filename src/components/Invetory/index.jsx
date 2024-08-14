import "./index.css";
import {projects,techs} from "./proyects";



function Portfolio() {
    

    const renderTechs = (title) => (
        <div
            key={title}
            className="transition-colors p-1 rounded-sm bg-slate-500 text-gray-50 hover:bg-slate-700 hover:text-white"
        >
            {title}
        </div>
    );

    const renderButtons = (title,url,index) =>{
        return(
        <a key={index + title} href={url} target="_blank" rel="noopener noreferrer" className="btn-go transition-colors">
            {title}
        </a>
        )
       
    }
    

    return (
        <section id="Portfolio" className="container mx-auto flex gap-3 flex-col flex-wrap mt-2 font-poppins">
            <h4 className="font-semibold text-teal-100 text-4xl text-start max-md:text-center">Proyects</h4>
            <section id="projects" className="p-4 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map((project,index) => (
                    <article key={index} className="transition-transform border hover:-translate-y-1 p-4 rounded-lg shadow-md" >
                        <figure className="max-h-80:">
                            <img className="h-full w-full ease-in-out duration-500 transition-transform hover:scale-125 hover:rounded-sm" src={project.img} alt={project.name} />
                        </figure>
                        <div className="flex gap-2 flex-col">
                            <h4 className="text-md text-white font-bold uppercase">{project.name}</h4>
                            <div className="flex gap-2">
                            {renderButtons("Ver código",project.code,index)}
                            {renderButtons("Ver página",project.page,index)}
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            <div className="flex gap-2 justify-center xl:justify-start  flex-wrap">
                {techs.map((tech) => renderTechs(tech))}
            </div>
        </section>
    );
}

export default Portfolio;
