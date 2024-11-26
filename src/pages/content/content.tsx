import { useGetArticleQuery } from "@/store/api";
import { useParams } from "react-router-dom";

const ContentPage = () => {
    const { category, article } = useParams();
    const { data } = useGetArticleQuery({ path: `${category}/${article}` });

    console.log(data);

    return <div>{category} {article}</div>
}

export default ContentPage;