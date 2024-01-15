import React from 'react'

export const NavLink = ({ item }) => {
    return (
        <li>
            <a href={item.link} className="block  transition-all  hover:text-gray-800 text-[color:var(--second-text-color,#737373)] text-center text-sm not-italic font-bold leading-6 tracking-[0.2px]" aria-current="page">{item.content}</a>
        </li>
    )
}
