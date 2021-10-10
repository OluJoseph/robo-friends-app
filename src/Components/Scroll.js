import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '600px', borderTop: '1px solid grey'}}>
            {props.children}
        </div>
    )
}

export default Scroll;