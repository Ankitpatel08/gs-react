import { useContext } from 'react';
import FavoriteContext from '../../store/favorites-context';

import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favoriteCtx = useContext(FavoriteContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites({favoriteCtx.totalFavorites})</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;