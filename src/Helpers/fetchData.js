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