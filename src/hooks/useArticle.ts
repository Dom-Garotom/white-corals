import { ArticleContext } from "@/contex/globalState";
import { useContext } from "react";

export function useArticle() {
    const context = useContext(ArticleContext);

    if (!context) {
        throw new Error('useArticle must be used within an ArticleContextProvider');
    }

    return context;
}