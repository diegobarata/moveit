import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CompletedChallengens.module.css';

export function CompletedChallengens(){
    const{challengesCompleted} = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallengensContainer}> 
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}