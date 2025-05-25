import styles from './Section.module.scss';

export type ArticleSection = {
    title: String;
    text: String;
}

export const Section = ({title, text}: ArticleSection) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <hr className={styles.line} />
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Section;
            