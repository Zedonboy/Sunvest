export const url = "https://api.sunvest.energy"
export const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

interface IRegisterContract {
    firstName : string
    lastName : string
    email : string
    phone ?: string
    password : string
    password_confirmation : string

}

interface ILoginContract{
    email : string
    password: string
}

const sunvestAPI = {
    registerUser(body : IRegisterContract): Promise<Response> {
        return fetch(url+"/register", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
    },

    loginUser(body : ILoginContract) : Promise<Response> {
        return fetch(url+"/login", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
    },

    getProjects(page :number) : Promise<Response> {
        return fetch(url+"/marketplace?page="+page, {
            method: "GET",
            headers
        })
    },

    getSingleProject(slug : string) : Promise<Response>{
        return fetch(url+"/marketplace/"+slug, {
            method: "GET",
            headers
        })
    }
}

export default sunvestAPI