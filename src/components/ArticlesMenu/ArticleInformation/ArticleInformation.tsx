import styles from './ArticleInformation.module.scss';

export type ArticleInformation = {
    title: String;
    description: String;
    image: String;
    createdBy: String;
    lastUpdate: String;
}


export const ArticleInformation = ({title, description, image, createdBy, lastUpdate}: ArticleInformation) => {
    return (
        <article className= {styles.container}> 
            <main className={styles.descriptionImageContainer}>
                <div className={styles.imageContainer}>
                    <img src={image}></img>
                </div>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.description}>{description}</h2>
                    <div className={styles.foterContainer}>
                        <div className={styles.row}>
                            <img src='/assets/icons/content.png' className={styles.icon} />
                            <p className={styles.footerText}>Created by: {createdBy}</p>
                        </div>
                        <div className={styles.row}>
                            <img src='/assets/icons/updated.png' className={styles.icon} />
                            <p className={styles.footerText}>Last update: {lastUpdate}</p>
                        </div>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default ArticleInformation;