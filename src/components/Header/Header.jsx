import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { useEffect } from 'react'

const Header = () => {

  useEffect(() => {
    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    };

    smoothScroll();

    return () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(anchor => {
        anchor.removeEventListener('click', function () { });
      });
    };
  }, []);

  return (
    <header className='bg-black'>
      <nav className='max-w-1100 flex justify-between items-center h-120 mx-auto'>
        <Logo />
        <ul className='flex gap-50 items-center'>
          <li><a className='text-white hover:text-gray-400 transition duration-300 ease-in-out text-18 font-bold uppercase' href="#descubra">Descubra</a></li>
          <li><a className='text-white hover:text-gray-400 transition duration-300 ease-in-out text-18 font-bold uppercase' href="#destino">Destino</a></li>
          <Button />
        </ul>
      </nav>
    </header>
  )
}

export default Header