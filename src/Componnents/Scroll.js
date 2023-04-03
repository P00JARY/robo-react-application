import React from 'react';

function Scroll(props) {
    return (
        <div style={{overflow:'scroll',border:'2px solid blue',height:'600px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;