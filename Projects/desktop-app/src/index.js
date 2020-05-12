
async function handleRequest() {
    let method = document.getElementById('method').value;
    let uri = document.getElementById('uri').value;
    function validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }
    if(validateUrl(uri)) {
        let resp = await fetch(uri).then((resp)=> { 
            if(resp.ok) {
                return resp.json()
            }
            else {
                return 'Error request';
            }
            
        }).catch((err)=> { console.log(err)});
        if(resp) {
            document.getElementById('resp').innerHTML = JSON.stringify(resp);
        }
    }
    else {
        alert("Please provide a valid URL request...");
    }
}