import styles from './ArticleInformation.module.scss';

import creator from '../../../assets/icons/content.png'
import updated from '../../../assets/icons/updated.png'

export type ParamsQuestion = {
    title: String;
    description: String;
    image: String;
    createdBy: String;
    lastUpdate: String;
}


export const ArticleInformation = ({title, description, image, createdBy, lastUpdate}: ParamsQuestion) => {
    return (
        <>
        <div className= {styles.container}> 
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.descriptionImageContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.description}>{description}</h2>
                </div>
                <div className={styles.imageContainer}>
                    <img src={image}></img>
                </div>
            </span>
            <span className={styles.foterContainer}>
                <div className={styles.row}>
                    <p>{createdBy}</p>
                    <img src={creator} className={styles.icon} />
                </div>
                <div className={styles.row}>
                    <p>{lastUpdate}</p>
                    <img src={updated} className={styles.icon} />
                </div>
            </span>
        </div>
        </>
    )
}

export default ArticleInformation;