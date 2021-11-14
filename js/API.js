const baseUrl = "http://localhost:3000";


class API {
    static fetchToys = (success, failure) => {
        fetch(`${baseUrl}/toys`)
            .then(res => res.json())
            .then(success)
            .catch(failure);
    }

    static deleteToy = (id, success, failure) => {
        fetch(`${baseUrl}/toys/${id}`, { method: "DELETE" })
            .then(res => res.status === 200 ? success() : failure(res.statusText))
            .catch(failure);
    }
}

// API.fetchToys(
//     console.log,
//     console.error
// ) 

// API.deleteToy(
//     '2',
//     console.log,
//     console.error
// )
