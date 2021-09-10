$(document).ready(function(){
    $('.des').click(function(){
        $('.design-dec').toggle(100)
    })
});
$(document).ready(function(){
    $('.dev').click(function(){
        $('#dev-dev').toggle(100)
    })
});
$(document).ready(function(){
    $('.manage').click(function(){
        $('#manage-managet').toggle(100)
    })
});
//verification
function verify(){
    let name = document.getElementById('idname').value;
    let email = document.getElementById('idemail').value;
    if(name==''){
        alert('input valid name');
        return false
    }
    if(email==''){
        alert('input valid email');
        return false
    }
alert('welcome '+name)
alert('email is noted')
}
