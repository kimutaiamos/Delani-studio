//added mouseclick design
$(document).ready(function(){
    $('.des').click(function(){
        $('#design-dec').toggle(100)
    })
});
// added mouseclickdevelopment
$(document).ready(function(){
    $('.dev').click(function(){
        $('#dev-dev').toggle(100)
    })
});
//added mouseclick management
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
//overlay work1
$(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay1").show();
    }).mouseleave(function(){
      $("#overlay1").hide();
    });
  });
   //overlay work2
   $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseleave(function(){
      $("#overlay2").hide();
    });
  });
   //overlay work3
   $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseleave(function(){
      $("#overlay3").hide();
    });
  });
   //overlay work4
   $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay4").show();
    }).mouseleave(function(){
      $("#overlay4").hide();
    });
  });
  //overlay work5
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseleave(function(){
      $("#overlay5").hide();
    });
  });
  //overlay work6
  $(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseleave(function(){
      $("#overlay6").hide();
    });
  });
  //overlay work7
  $(document).ready(function(){
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseleave(function(){
      $("#overlay7").hide();
    });
  });
  //overlay work8
  $(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseleave(function(){
      $("#overlay8").hide();
    });
  });
// form input submission.this will display the pop up message which reads,
//we have received your message.thanks for your hones feedback.
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