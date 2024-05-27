var siteNameInput = document.getElementById("siteName");
var siteWebsiteInput = document.getElementById("siteWebsite");
var btnSubmitInput = document.getElementById("btnSubmit");
var hintMsgInput = document.getElementById("hintMsg");

siteList = [];
if( localStorage.getItem('sites') != null){


  siteList = JSON.parse( localStorage.getItem('sites') );
  
  displayData();
  
  
  
  }
  

btnSubmitInput.addEventListener('click' , function(){
  if(validationName() == true && validationUrl() == true ){
 var site = {
  name:siteNameInput.value ,
  url:siteWebsiteInput.value
 }

 
  siteList.push(site); 
localStorage.setItem('sites' , JSON.stringify(siteList));

clearForm();

displayData();
}
else{
         
    
  btn2.click();


 }


  
  





})

 



function clearForm(){

  siteNameInput.value = '';
  siteWebsiteInput.value = '';


}


function displayData(){
   
  var Data  = '';

  for(var i = 0 ; i < siteList.length ; i++){
      
    Data += `
   
  
  <tr>

  <td> ${i}</td>
  <td> ${ siteList[i].name }</td>
 

   <td> <a onclick="visitSite()" class="btn btn-dark" href="${ siteList[i].url }"> <i class="fa-solid fa-eye me-2"></i>Visit</a></td>

   <td> <button onclick="deleteSite(${i})" class="btn btn-dark"> <i class="fa-solid fa-trash me-2"></i>Delete</button>  </td>

</tr>`

  }

document.getElementById('tableData').innerHTML = Data;

}



function deleteSite(index){
 
  siteList.splice( index,1);
  
  localStorage.setItem('sites' , JSON.stringify(siteList));

  
  displayData();


}


 siteNameInput.addEventListener( 'input' , function(){
  validationName()

})

function validationName(){
  var text = siteNameInput.value;
  var regexName = /^[A-Z][a-z]{3,20}$/ ;
 
  if(regexName.test(text) == true){
 siteNameInput.classList.add('is-valid');
  siteNameInput.classList.remove('is-invalid');
  return true;
  }
   

else{

 siteNameInput.classList.add('is-invalid');
  siteNameInput.classList.remove('is-valid');
  return false;
}

}

siteWebsiteInput.addEventListener('input' ,function () {
  validationUrl()
})

function validationUrl(){
 url = siteWebsiteInput.value;  
regexUrl =/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/;
if(regexUrl.test(url) == true){
  siteWebsiteInput.classList.add('is-valid');
  siteWebsiteInput.classList.remove('is-invalid');
  return true;
}
else{

  siteWebsiteInput.classList.add('is-invalid');
  siteWebsiteInput.classList.remove('is-valid');
   return false;
 }

}












