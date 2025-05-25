import styles from './Article.module.scss';
import ArticleHeader from './ArticleHeader/ArticleHeader';
import ArticleSection from './ArticleSection/ArticleSection';
const sectionsData = [
  { 
    title: 'Introducción', 
    text: 'En esta sección inicial, exploraremos el contexto general y los objetivos principales del proyecto. Se abordarán los antecedentes históricos y la motivación que llevó a desarrollar esta iniciativa, proporcionando una visión clara sobre la importancia y relevancia del tema tratado.' 
  },
  { 
    title: 'Desarrollo', 
    text: 'Aquí se presenta un análisis profundo y detallado de los aspectos técnicos y conceptuales relacionados con el proyecto. Se incluyen métodos utilizados, resultados obtenidos y discusiones sobre las implicaciones prácticas y teóricas. Además, se exploran diferentes enfoques y se comparan alternativas para resaltar las ventajas y posibles limitaciones.' 
  },
  { 
    title: 'Conclusión', 
    text: 'Finalmente, se resumen los hallazgos más importantes y se reflexiona sobre el impacto global del trabajo realizado. Se destacan las contribuciones al campo y se sugieren posibles líneas futuras de investigación o mejoras que podrían implementarse para ampliar el alcance y la eficacia del proyecto.' 
  },
];
export const Article = () => {
    return (
        <div className={styles.container}>
          <ArticleHeader
            title={"PABLOV AND HIS PIDGEONS: A revision about him"} 
            description={"Ivan Pavlov, the Russian physiologist renowned for his groundbreaking work in classical conditioning, was far from insane. Ivan Pavlov, the Russian physiologist renowned for his."} 
            image={"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/26/5faa5b473631c.jpeg"}
            createdBy={"Oriol Portell Pareras"}
            lastUpdate={"30/10/2023"}
            />
          <div className={styles.sectionsContainer}>
            <ArticleSection sections={sectionsData}/>
          </div>
        </div>
        
    )
}

export default Article;