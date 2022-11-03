$(document).ready(function(){

    // submit button click
    $("#submitEdit").click(function(){

        var id = $("#update_id").val();
        var name = $("#fname").val();
        var contact = $("#lcontact").val();
        var lang = [];

        // Initializing array with Checkbox checked values
        $("input[name='prolang']:checked").each(function(){
            lang.push(this.value);
        });

        if(contact != ''){
            $.ajax({
                url: '../../../Controller/C_editcliente.php', 
                type: 'post',
                data: {id:id,nome:name,contato:contact,categoria:lang},
                dataType: 'JSON',
                success: function(response){
                    setTimeout(function(){// wait for 5 secs(2)
                        location.reload(); // then reload the page.(3)
                   }, 5000);
                    

                    // selecting values from response Object
                    
                }
            });
        }
    });

});