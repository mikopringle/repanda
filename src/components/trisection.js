import React from 'react'

//renders three equal parts in a top down tri section page
export function Trisection(props) {
    return (
        <div className="tri-sect">
            <div className="top">{props.top}</div>
            <div className="mid">{props.mid}</div>
            <div className="bottom">{props.bottom}</div>
        </div>
    );
}