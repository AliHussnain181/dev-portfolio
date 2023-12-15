import React from 'react';

const ProjectCard = ({ project }) => {

    return (
        <div id='projects' className="w-[80%] mx-auto sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 lg:mx-0 font-Roboto">
            <div className=" text-white  rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 border-[#22d3ee] border-[1px] cursor-pointer ">
                <img
                    width={300}
                    height={300}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-center transition-all duration-300 ease-in-out"
                />
                <div className="p-4 bg-[#0c0c0c]">
                    <h3 className="text-lg font-semibold font-Space bg-[#0c0c0c]">{project.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2 bg-[#0c0c0c]">{project.description}</p>
                    <div className="mt-4 bg-[#0c0c0c]">

                        <a
                            href={project.demo}  target='_blank'  rel="noreferrer"
                            className="text-[#22d3ee] hover:text-[#14b8a6] bg-[#0c0c0c] text-sm font-open font-semibold transition-all duration-300 ease-in-out"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};



const Project = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Glocery Store',
            image: 'https://res.cloudinary.com/dsntudbsp/image/upload/v1693214420/mn_g5hvcj.png',
            demo: 'https://mn-store.vercel.app/',
        },
        {
            title: 'Project 2',
            description: 'Sanity Blog web app',
            image: 'https://res.cloudinary.com/dsntudbsp/image/upload/v1693214705/blog_ek0ghp.png',
            demo: 'https://sanity-blog-ten-teal.vercel.app/',
        },
        {
            title: 'Project 3',
            description: 'Ecommerce Store',
            image: 'https://res.cloudinary.com/dsntudbsp/image/upload/v1693215065/2023-08-28_3_nl2xmj.png',
            demo: 'https://smart-next-p.vercel.app/',
        },
        {
            title: 'Project 4',
            description: 'Design',
            image: 'https://res.cloudinary.com/dsntudbsp/image/upload/v1693215431/mlm_tjkr0r.png',
            demo: 'https://mlm-design-psi.vercel.app/',
        },
    ];

    return (
        <>
            <h1 className='text-3xl md:text-5xl font-bold font-Space overflow-hidden text-white  text-center'>Projects</h1>
            <div className="container mx-auto py-7">
                <div className="flex flex-wrap -mx-4 ">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
