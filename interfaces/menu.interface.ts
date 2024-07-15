
export interface PageItem {
    alias: string;
    title: string;
    id_ : string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    }
    pages: PageItem[];
}