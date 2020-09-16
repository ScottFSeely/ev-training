export interface TopHeadlines_t {
    status: string;
    totalResults: number;
    articles: {
        source: {
            id: string
            name: string
        }
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }
}