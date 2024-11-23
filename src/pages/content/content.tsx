import { useArticle } from "@/hooks/use-article";
import { useParams } from "react-router-dom";

const ContentPage = () => {
    const { category, article } = useParams();
    const { data } = useArticle(category, article);

    return <div>{category} {article}</div>
}

export default ContentPage;