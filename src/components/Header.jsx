import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__content__logo">navbar</h2>
        <nav
          className={`${'header__content__nav'} ${menuOpen ? 'isMenu' : ''}`}
        >
          <ul>
            <li>
              <Link className="link" to="/pageOne">
                PageOne
              </Link>
            </li>
            <li>
              <Link className="link" to="/pageTwo">
                PageTwo
              </Link>
            </li>
            <li>
              <Link className="link" to="/pageThree">
                PageThree
              </Link>
            </li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className="header__content__toggle">
          {menuOpen ? (
            <AiOutlineClose onClick={() => setMenuOpen(false)} />
          ) : (
            <BiMenuAltRight onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
