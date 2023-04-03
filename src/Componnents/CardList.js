import React from 'react'
import Card from './Card'

export default function CardList({ roborts }) {

   if(roborts.length!==0){
       return (
        <>
            {roborts.map((user, i) => {
                return (
                    <Card key={i}
                        id={roborts[i].id}
                        name={roborts[i].name}
                        email={roborts[i].email}
                    />);

            })}
        </>
    )}
   return (
       <h1 style={{color:"red"}}>Robo Not Found :( </h1>
   )
}
