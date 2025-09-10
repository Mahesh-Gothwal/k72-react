import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
          <div className='w-1/2 h-full  hover:rounded-4xl overflow-hidden transition-all relative group'>
          <img src={props.image1} className='h-full w-full object-cover'/>
          <div className='opacity-0 group-hover:opacity-100 absolute transition-all top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
            <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full pt-4 px-4'>Vior le projet</h2>
          </div>
          </div>
          <div className='w-1/2 h-full  hover:rounded-4xl overflow-hidden transition-all relative group'>
          <img src={props.image2} className='h-full w-full object-cover'/>
          <div className='opacity-0 group-hover:opacity-100 absolute transition-all top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
            <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full pt-4 px-4'>Vior le projet</h2>
          </div>
          </div>
        </>
  )
}

export default ProjectCard