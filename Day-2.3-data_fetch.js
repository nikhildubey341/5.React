async function fetchdata()
{
    try{
        const responce = await fetch ("https://jsonplaceholder.typicode.com/photos")

        if(!responce.ok){
            throw new Error("Network Responce Failed")
        }
        const data = await responce.json();
        console.log(data)
    }
    catch(error){
        console.error("Error fetching data, error")
    }
}
fetchdata()