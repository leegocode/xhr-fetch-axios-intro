const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHTTPrequest = (method,url,data) => {
    return fetch(url,{
        method: method, 
        body: JSON.stringify(data),
        headers: data? {'Content-Type':'application/json'}:{} 
    }).then(response => {
        if (response.status >= 400){
            return response.json().then(errResData => {
                const error = new Error('something went wronggggg');
                error.data = errResData;
                throw error;
            });
        }
    return response.json();
});
}

const getData = () => {
    sendHTTPrequest('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData);
    })
};

const sendData = () => {
    sendHTTPrequest('POST', 'https://reqres.in/api/register', { 
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  }).then(responseData => {
        console.log(responseData)
    }).catch(err => { console.log(err, err.data)}
    )
}


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
//  password: 'pistol'