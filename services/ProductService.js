function GetAll() {
    let url = 'https://cinqbreak.herokuapp.com/api/Product/GetAll'
    let headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    return(fetch(url, {headers: headers}).then(response => response.json()))
};

function teste() {
    console.log('TESTEEEEEEEEE')
}

export {GetAll, teste}