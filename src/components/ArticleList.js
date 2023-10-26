import React from "react";
import Article from "./Article.js";

function ArticleList({ posts }) {
    const articleItems = posts.map((post) => {
        return Article(post);
    })

    return (
        <main>
            {articleItems}
        </main>
    )
}

export default ArticleList;