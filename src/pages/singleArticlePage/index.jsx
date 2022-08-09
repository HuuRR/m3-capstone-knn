import { useContext } from "react";
import { NewsBody } from "../../components/newsBody";
import { NewsContext } from "../../contexts/NewsContext";

export function SingleArticlePage() {

  const { article } = useContext(NewsContext);

  return(
    <>
      <NewsBody article={article} />
    </>
  );
}
