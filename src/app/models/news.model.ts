export interface Framework{
    exhaustiveNbHits: boolean;
    exhaustiveTypo: boolean;
    hits: Array<News>;
    hitsPerPage:number;
    nbHits: number;
    nbPages: Number;
    page: number;
    params: string;
    processingTimeMS: number;
    query: string;
    renderingContent: object;
}

export interface News{
    author: string;
    comment_text: string;
    created_at: string;
    created_at_i: number;
    num_comments: number,
    objectID: string;
    parent_id: number
    points: number;
    story_id: number
    story_text: string;
    story_title: string;
    story_url: string;
    title: string;
    url: string;
    _highlightResult: object;
    _tags:object;
}
