export const getData = async (endpoint) => {

    try {

        const resposne = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);

        const data = await resposne.json()

        console.log(data)
        
        return{
            data,
            isLoading: false
        }
    }
    catch (error) {

        console.error(error)
    }

}


export const getFetch = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data)
        return{
            data,
            isLoading: false,
            errors: null
        }
    }
    catch (error) {
        return{
            data: null,
            isLoading: false,
            errors: null
        }
    }
}