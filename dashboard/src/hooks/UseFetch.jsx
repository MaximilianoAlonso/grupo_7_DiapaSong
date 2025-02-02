export const UseFetch = async (endpoint, method = 'GET', data, token) => {

    /* crear arhivo .env con el valor de variable =>'http://localhost:3000/api'*/
    const apiURLBase =  import.meta.env.VITE_API_URL_BASE 

    const url = apiURLBase + endpoint // enpoint = "/courses"
    let response;

    try {
        if(method === 'GET'){
            response = await fetch(url)
        }
    
        if(method === 'POST'){
            response = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(data),
                headers :{
                    'Content-Type' : 'application/json',
                    Athorization : token
                }
            })
        }
    
        let result = await response.json();


        return result;
        
    } catch (error) {
        console.error;
    }



}

