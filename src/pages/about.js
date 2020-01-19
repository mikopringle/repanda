import React from 'react'
import { CardWLogoMd } from '../components/containers'

export function About(){
    const about = <div>
        <div>
        <div>
            <h1 className =" font-sans font-bold text-teal-700 text-2xl"> We want to bring your vision to life </h1>
            <p className ="mb-16"> To be a business owner means to be a leader. Understanding each employee's skills and weaknesses, and helping them be the very best version of themselves is only the beginning. </p>
            <p className ="mb-16"> As your business grows it is easy to lose touch with what your employees and their needs to be able to adapt to the evolving business environment.</p>
            <p className ="mb-16"> Here is where we come in! We help you to stay updated with your employees from the comfort of your home outside of the 9-5 hours.</p>
            <p className ="mb-3"> Using our app, a few clicks on your phone while sitting on your couch is all you need to do to see:</p>
           <p> - what your employees have been up to today at work</p>
           <p> - how did they feel and what they achieved in today's work environment</p>
           <p className ="mb-16"> - and how did the above compare to the days before</p>
            <h1 className ="mb-16 font-sans font-bold text-teal-700 text-2xl">Our Team</h1>
            <p>Content Content Content</p>
        </div>
        <div>
            <h1>Our vision</h1>
            <p>The business world is ever-evolving, bringing with it new demands that must be tackled.</p>
        </div>
        </div>
    </div>

    return <CardWLogoMd child={about}/>
}