import type {Movie, PaginatedList, Show} from '~/types'

export function getPopularMovies() {
    return useFetch<PaginatedList<Movie>>('/api/movies/popular')
}

export function getPopularShows() {
    return useFetch<PaginatedList<Show>>('/api/shows/popular')
}

export function getLatestMovie() {
    return useFetch<Movie>('/api/movies/latest')
}