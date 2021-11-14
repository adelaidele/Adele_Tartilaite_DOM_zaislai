const baseUrl = "http://localhost:3000";


class API {
    static fetchToys = (success, failure) => {
        setTimeout(() => {
            fetch(`${baseUrl}/toys`)
                .then(res => res.json())
                .then(success)
                .catch(failure);
        }, 1000)
    }

    static deleteToy = (id, success, failure) => {
        fetch(`${baseUrl}/toys/${id}`, { method: "DELETE" })
            .then(res => res.status === 200 ? success() : failure(res.statusText))
            .catch(failure);
    }
}