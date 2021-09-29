import { useContext } from 'react';
import {ChallengesContext} from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/79817829?v=4" alt="Diego Barata"/>
                <div>
                    <strong>Diego Barata</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level"/>
                            level{level}

                    </p>
                </div>
            
        </div>
    )
}