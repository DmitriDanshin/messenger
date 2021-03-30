const form = document.querySelector('form'),
      name = document.querySelector('.name')
      message = document.querySelector('.message');


let data = {
    'name': null,
    'message': null,
};

form.addEventListener('submit', (e)=>{

    e.preventDefault();
    data.name = name.value;
    data.message = message.value;

    sendData().then();
});



const sendData = async () => {
    const rawResponse = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();

    console.log(JSON.parse(content.data));
};