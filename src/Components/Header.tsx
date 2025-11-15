import React from "react";


type header ={
    title: string;
}
export default function Header({title}:header) {
    return (
        <header >
            <h1>{title}</h1>
        </header>
    );
}