import React from 'react';

export default function Guitars (props) {
    return (
        <div>
            <h1 className="title" style={{textAlign: "center"}}>Guitars</h1>
            {
            props.guitars.map( guitar => {
                return (
            <div key={guitar.id} className ="guitar">
                <img src={ guitar.img } alt={ guitar.brand } style={{margin: "0 auto", borderRadius: "3%"}}/>
                <h3>{ guitar.brand }</h3>
                <p> { guitar.model }</p>
                <small>{ guitar.year }</small>
                <small>{ guitar.style }</small>
            </div>
                )
            })}
        </div>
    )
};