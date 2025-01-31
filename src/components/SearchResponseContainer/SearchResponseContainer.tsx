// import useSearchResponseContainer from './useSearchResponseContainer';
import styles from './SearchResponseContainer.module.css';

export default function SearchResponseContainer(){
    return <div className={styles.container}>
        <h2 className={styles.title}>Results</h2>
        <div className={styles.cardList}>

        </div>
    </div>
}