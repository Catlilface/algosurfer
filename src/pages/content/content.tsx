import { useGetArticleQuery } from "@/store/api";
import { Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

const ContentPage = () => {
    const { category, article } = useParams();
    const { data, isError, isFetching } = useGetArticleQuery({ path: `${category}/${article}` });
    const navigate = useNavigate();


    if (isError) {
        navigate('/404')

        return
    }

    if (isFetching) {
        return (
            <div className="w-full">
                <Loader2 className="animate-spin mx-auto mt-10" />
            </div>
        )
    }

    return <ReactMarkdown>{data || 'No content found'}</ReactMarkdown>
}

export default ContentPage;