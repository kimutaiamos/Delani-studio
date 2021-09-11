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
}
$(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
  });
  $(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
  });

  $(document).ready(function(){
    $("form#formsubmit").submit(function(event){
       event.preventDefault();
      var name = $("input#name1").val();
      var email = $("input#name2").val();
      var message = $("textarea#comment").val();
      if ($("input#name1").val() && $("input#name2").val()){
        alert (name + ",We have received your message. Thanks for your honest feedback.:)");
      }
      else {
        alert("Please enter a valid email and name!");
      }
      
    });
  
  });