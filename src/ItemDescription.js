import React from 'react'

function ItemDescription({name,desc}) {
    return (
        <div className="itemDescription">
            <h1 className="itemName">{name}</h1>
            <h2 className="desc">{desc}</h2>
        </div>
    )
}

export default ItemDescription
