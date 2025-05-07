abstract class HttpService {
    static async post({
        uri,
        body,
    }: {
        uri: string,
        body: Object,
    }) {
        return await fetch(uri, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            }
          })
    }
    
    static async get({
        uri,
    }: {
        uri: string,
        body: Object,
    }) {
        return await fetch(uri, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
    }
}

export {
    HttpService
}