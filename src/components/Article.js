import React from "react";

function Article({ title, date = "January 1, 1970", preview, id, minutes}) {
    let min = parseInt(minutes/5);
    let coffees = "";
    if (minutes < 30) {
        for (let i = min; i > 0; i--) {
            coffees = coffees + "☕️";
        };
    }
    if (minutes >= 30) {
        min = parseInt(min / 2);
        for (let i = min; i > 0; i--) {
            coffees = coffees + "🍱";
        }
    };
    const minutesToRead = ` • ${coffees} ${minutes} min read`;

    return (
        <article key={id}>
            <h3>{title}</h3>
            <small>{date}{minutesToRead}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;