export type ContentCreator = {
    id: number;
    name: string;
    description: string;
  }
  
  export type Article = {
    id: number;
    title: string;
    description: string
    contentCreator: ContentCreator;
    updateDate: string;
    image: string;
    likesNumber: number;
    commentariesNumber: number;
    commentaries: {
      username: string;
      date: string;
      content: string;
    }[],
    sections: {
      type: ArticleSectionsType;
      title: string;
      text: string;
    }[]
  }
  
  enum ArticleSectionsType{
    Text,
    Table,
    Bibliography
  }