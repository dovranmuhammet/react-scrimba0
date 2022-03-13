import logo192 from './logo192.png'

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <img className='img-logo' src={logo192} alt='react-logo' />
        <ul className='nav-items'>
          <li>Pricing </li>
          <li>About </li>
          <li>Contact </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
