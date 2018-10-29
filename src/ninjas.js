import React from 'react';

// for functional components, this.props is not automatically passed.
// can destructure to ninja from props to ninjas.props, so it is {ninjas} = props
const Ninjas = ({deleteNinja, ninjas})=>{
    const ninjaList = ninjas.map((ninja) => {
        if (ninja.age >= 18){
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name} </div>
                    <div>Age:  {ninja.age} </div>
                    <div>Belt: {ninja.belt} </div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                    <div><br></br></div>
                </div>
            );
        }else{
            return null;
        }
    });

    // don't need this keyword because render already loads 'this' in
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas