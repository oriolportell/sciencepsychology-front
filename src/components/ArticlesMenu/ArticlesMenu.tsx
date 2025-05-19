import styles from './ArticlesMenu.module.scss';

import ArticleInformation
 from './ArticleInformation/ArticleInformation';
export const ArticlesMenu = () => {
    return (
        <div className={styles.container}>
        <ArticleInformation
          title={"Pablov and his pidgeons"} 
          description={"Ivan Pavlov, the Russian physiologist renowned for his groundbreaking work in classical conditioning, was far from insane."} 
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwIIghaW8p_iOq_4gyJqa-QCiGshr5uli6w&s"}
          createdBy={"Oriol Portell Pareras"}
          lastUpdate={"30/10/2023"}>
          </ArticleInformation>
        </div>
    )
}

export default ArticlesMenu;