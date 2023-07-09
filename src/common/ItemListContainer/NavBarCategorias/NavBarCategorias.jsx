import React from 'react'




const NavBarCategorias = () => {
    return (
        <container>
            <nav className='nav__categorias'>
                <ul>
                    {categorias.map((categoria) => (
                        <li>
                            <NavLink className="nav__categorias-link" to={`/categoria/${categoria.id}`}>{categoria.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </container>
    )
}

export { NavBarCategorias }