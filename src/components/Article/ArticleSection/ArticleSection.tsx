import styles from './ArticleSection.module.scss';
import Section from './Section/Section';

export type ArticleSection = {
    title: String;
    text: String;
}

export const ArticleSection = ({sections}: {sections: ArticleSection[]}) => {
    return (
        sections.map((section, index) => 
        <Section
            key={index}
            title={section.title}
            text={section.text}
        />
        )
    )
}

export default ArticleSection;
