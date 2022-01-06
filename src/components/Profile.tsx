import { useContext } from 'react';
import {ChallengesContext} from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1428910019140063238/hMS-agWU_400x400.jpg" alt="Deuzilene Barata"/>
                <div>
                    <strong>Deuzilene Barata</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level"/>
                            level{level}

                    </p>
                </div>
            
        </div>
    )
}