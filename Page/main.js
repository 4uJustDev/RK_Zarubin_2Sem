const cyrillicpattern = /[A-Za-zА-Яа-яЁё]/;

const textName = document.querySelector('#textName');
const form = document.getElementById('form');
const data ={};

function recieveData(event){
    event.preventDefault();
    const fields =document.querySelectorAll('input, select, textarea');
    

    fields.forEach(field=>{
        const{name, value} = field;
        data[name] = value;
    });

    console.log('test', data);
}
form.addEventListener('submit',recieveData)



textName.addEventListener("blur", (e)=>{
    e.preventDefault();
    if (!cyrillicpattern.test(textName.value)){
        textName.reportValidity();
        textName.setCustomValidity('Только буквы!');        
        textName.style.border = '2px solid red';
		textName.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    }else{        
        textName.style.border = '2px solid green';
		textName.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
    }
    
});