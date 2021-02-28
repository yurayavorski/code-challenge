import axios from 'axios'

export const fetchData = async <T>(url: string): Promise<T> => {
    try {
        const response = await axios.get<T>(url)
        return response.data
    } catch (error) {
        console.error(`Could not fetch from ${url}. Error message: ${error.message}`)
        throw error
    }
}
