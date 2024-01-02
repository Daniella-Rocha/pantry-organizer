import { Link, useLocation } from "react-router-dom";

import { GiMagnifyingGlass } from "react-icons/gi";

import CategoryBar from '../../components/CategoryBar/CategoryBar';

import styles from './NavBar.module.css';

import DropDownMenu from "../DropDownMenu/DropDownMenu";

const NavBar = ({ }) => {
  const path = useLocation();

  return (
    <header>
      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Link>
            <h1>Pantry Organizer</h1>
          </Link>
        </div>

        <DropDownMenu />

        <div className={styles.search}>
          <form>
            <input type="search" name="" id="" />
            <button type="submit" aria-label='buscar'>
              <GiMagnifyingGlass />
            </button>
          </form>
        </div>
      </div>
      {
        path.pathname === '/' &&
        (<CategoryBar />)
      }

    </header>
  )
}

export default NavBar;
