export interface ApiResponse<T> {
    data: T | T[];
    pagination: ApiPagination;
}

export interface ApiPagination {
    cursor: string;
}

export interface DateRange {
    started_at: string;
    ended_at: string;
}