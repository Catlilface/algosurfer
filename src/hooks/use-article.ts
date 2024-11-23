import { useNavigate } from "react-router-dom";

export function useArticle(category?: string, article?: string) {
    const navigate = useNavigate();

    if (!category || !article) {
        navigate("/not-found");
    }

    return { data: {} }
}