document.addEventListener('DOMContentLoaded',function(){

    let frm=document.getElementById('contenedorfrm')
    
    frm.addEventListener('submit',function(event){
        event.preventDefault()
        alert("error")
    
        let tipoDocumento=document.getElementById('td').value
        let numeroDocumento=document.getElementById('nd').value
        console.log(tipoDocumento + " " + numeroDocumento + " ")
    })
    })