import React from 'react'

export default function Item({ item, handleClick }) {

	return (
		<div key={item.id} className="item">
			<img className="item-img" src={item.img} alt={item.name}></img>
			<span className="item-name">{item.name}</span>
			<span className="item-price">{item.price}</span>
			<button onClick={(e) => handleClick(e, item)}>장바구니 담기</button>
		</div>
	)
}