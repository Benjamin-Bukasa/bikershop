import { Link } from 'react-router-dom';
import {SunMoon,Moon} from 'lucide-react'
import { NavLinks } from '../../services/NavLinks';
import { useToggleNav } from '../../utils/store';
import useThemeStore from '../../utils/store'; // <-- ajoute ceci
import Logo from '../Logo';

const Navbar = () => {
  const { open, setOpen } = useToggleNav();
  const handleOpen = () => setOpen(!open);

  const { theme, toggleTheme } = useThemeStore(); // <-- hook du thème

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-2/3 h-full py-3 text-white md:text-[#121212] bg-zinc-900/95 md:bg-transparent dark:bg-stone-950/95 dark:text-white transition-all duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} 
        md:static md:translate-x-0 md:w-auto md:h-auto md:dark:bg-transparent`}
    >
      <div className="md:hidden">
        <Logo />
      </div>

      <ul className="flex flex-col gap-8 p-4 md:flex-row md:gap-4 md:items-center md:p-0">
        {NavLinks.map((item) => (
          <li className="px-4" key={item.id}>
            <Link to={item.link} onClick={handleOpen}>
              {item.title}
            </Link>
          </li>
        ))}

        {/* Bouton dark/light mode */}
        <li className="px-4 mt-4 md:mt-0">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 text-center flex items-center justify-center p-1 border bg-stone-900/15 rounded-full  text-black dark:bg-zinc-800 dark:text-white transition-colors duration-300 dark:border-stone-700/15"
          >
            {theme === 'light' ? <Moon /> :<SunMoon /> }
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
