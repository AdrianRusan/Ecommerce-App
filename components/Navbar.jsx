import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <>
    {/* <nav className="navbar"></nav> */}
      <div className='navbar-container'>
        <p className='logo'>
          <Link href='/'><img src='/logo.png' alt='The Bakery Logo' style={{cursor: 'pointer'}}/></Link>
        </p>

        <div className='nav-links'>
          <Link href='/despre'>Despre Noi</Link>
          <Link href='/produse'>Produsele Noastre</Link>
          <Link href='/evenimente'>Evenimente</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </>
  )
}

export default Navbar