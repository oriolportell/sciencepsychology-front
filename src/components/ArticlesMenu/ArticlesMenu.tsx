import styles from './ArticlesMenu.module.scss';

import ArticleInformation
 from './ArticleInformation/ArticleInformation';
export const ArticlesMenu = () => {
    return (
        <div className={styles.container}>
        <ArticleInformation
          title={"Pablov and his pidgeons"} 
          description={"Ivan Pavlov, the Russian physiologist renowned for his groundbreaking work in classical conditioning, was far from insane."} 
          image={"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/26/5faa5b473631c.jpeg"}
          createdBy={"Oriol Portell Pareras"}
          lastUpdate={"30/10/2023"}>
          </ArticleInformation>
          <ArticleInformation
          title={"Pablov and his pidgeons"} 
          description={"Ivan Pavlov, the Russian physiologist renowned for his groundbreaking work in classical conditioning, was far from insane."} 
          image={"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/26/5faa5b473631c.jpeg"}
          createdBy={"Oriol Portell Pareras"}
          lastUpdate={"30/10/2023"}>
          </ArticleInformation>
          <ArticleInformation
          title={"Pablov and his pidgeons"} 
          description={"Ivan Pavlov, the Russian physiologist renowned for his groundbreaking work in classical conditioning, was far from insane."} 
          image={"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/26/5faa5b473631c.jpeg"}
          createdBy={"Oriol Portell Pareras"}
          lastUpdate={"30/10/2023"}>
          </ArticleInformation>
        </div>
    )
}

export default ArticlesMenu;