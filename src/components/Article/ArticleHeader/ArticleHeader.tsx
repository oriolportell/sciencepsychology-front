import styles from './ArticleHeader.module.scss';

export type ArticleInformation = {
    title: String;
    description: String;
    image: String;
    createdBy: String;
    lastUpdate: String;
}

export const ArticleHeader = ({title, description, image, createdBy, lastUpdate}: ArticleInformation) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.description}>{description}</h2>
            <hr className={styles.line} />
            <div className={styles.icons}>
                <div className={styles.row}>
                    <img src='/assets/icons/content.png' className={styles.icon} />
                    <p className={styles.footerText}>Created by: {createdBy}</p>
                </div>
                <div className={styles.row}>
                    <img src='/assets/icons/updated.png' className={styles.icon} />
                    <p className={styles.footerText}>Last update: {lastUpdate}</p>
                </div>
            </div>
            <hr className={styles.line} />
        </div>
    )
}

export default ArticleHeader;
