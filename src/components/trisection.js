import React from 'react'


//renders three equal parts in a top down tri section page
export function Trisection(props) {
    return (
        <div className="tri-sect">
            <div className="block text-gray-700 text-center bg-gray-400 px-4 py-2">{props.top}</div>
            <div className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">{props.mid}</div>
            <div className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">{props.bottom}</div>
        </div>
    );
}