// Add Item 
document.getElementById('form').onsubmit = (e) => {
    e.preventDefault();
    let data = new URLSearchParams();
    for (const key of new FormData(e.target)) {
        // console.log(key);
        data.append(key[0], key[1]);
    }
    // console.log(data);

    //Post Form Data Using Fetch Api
    const url = '/sent-data';
    fetch(url, {
        method: 'post',
        body: data
    }).then(res => res.json())
    .then((res) => {
        // console.log(res);
        window.location.reload();
    }
    );
}

// Delete Item 
function delItem(tagvalue){
    // console.log(tagvalue.innerText);
    fetch('/delete-data/'+tagvalue.innerText,{
        method:'delete'
    }).then(res=>res.json())
    .then((res2)=>{
        // console.log(res2);
        location.reload();
    })            
}