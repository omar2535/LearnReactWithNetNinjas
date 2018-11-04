import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
    // setTimeout(()=>{
    //     props.history.push('/about')
    // }, 2000);
    return (
        <div className="container">
            <h3 className="center">Contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quibusdam unde rerum ullam, mollitia adipisci optio est recusandae numquam, necessitatibus nulla iusto eius? Architecto, eaque odio! Praesentium, magni sit?</p>
        </div>
    )
}

export default Rainbow(Contact);