import Scene from "@/components/scene/scene";
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

    return (
        <ReactMarkdown
            components={{
                code(props) {
                    const { children, className, node, ...rest } = props
                    const match = /scene:(\d+)/.exec(className || '')

                    console.log(match)
                    return match ? (
                        <Scene category={category} article={article} scene={Number.parseInt(match[1])} />
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    )
                }
            }}
        >{data || 'No content found'}</ReactMarkdown>
    )
}

export default ContentPage;