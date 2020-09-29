function CreatePurchase(json) {
    let url = 'https://cinqbreak.herokuapp.com/api/Purchase/CreatePurchase'
    let headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    return(fetch(url, {headers: headers, method: 'POST', body: json}).then(response => response.json()))
}

export {CreatePurchase}