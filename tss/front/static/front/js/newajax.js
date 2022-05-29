function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

jQuery(function($){
    $(document).ready(function(){
        $("#id_province").change(function(){
            $.ajax({
                url:"/divisions/",
                type:"POST",
                data:{province: $(this).val(),},
                success: function(result) {
                    cols = document.getElementById("id_division");
                    cols.options.length = 0;
                    cols.options.add(new Option('--------', '0'));
                    for(var k in result){
                        cols.options.add(new Option(k, result[k]));
                    }
                },
                headers: {
                    "X-CSRFToken": getCookie("csrftoken")
                },
                error: function(e){
                    console.error(JSON.stringify(e));
                },
            });
        });

        $("#id_division").change(function(){
            $.ajax({
                url:"/districts/",
                type:"POST",
                data:{division: $(this).val(),},
                success: function(result) {
                     console.log(result);
                    cols = document.getElementById("id_district");
                    cols.options.length = 0;
                    cols.options.add(new Option('--------', '0'));
                    for(var k in result){
                        cols.options.add(new Option(k, result[k]));
                    }
                },
                headers: {
                    "X-CSRFToken": getCookie("csrftoken")
                },
                error: function(e){
                    console.error(JSON.stringify(e));
                },
            });
        });

        $("#id_district").change(function(){
            $.ajax({
                url:"/tehsils/",
                type:"POST",
                data:{district: $(this).val(),},
                success: function(result) {
                    console.log(result);
                    cols = document.getElementById("id_tehsil");
                    cols.options.length = 0;
                    cols.options.add(new Option('--------', '0'));
                    for(var k in result){
                        cols.options.add(new Option(k, result[k]));
                    }
                },
                headers: {
                    "X-CSRFToken": getCookie("csrftoken")
                },
                error: function(e){
                    console.error(JSON.stringify(e));
                },
            });
        });

        $("#id_district").change(function(){
            $.ajax({
                url:"/codes/",
                type:"POST",
                data:{district: $(this).val(),},
                success: function(result) {
                    console.log(result);
                    cols = document.getElementById("id_phone_area_code");
                    cols.options.length = 0;
                    cols.options.add(new Option('--------', '0'));
                    for(var k in result){
                        cols.options.add(new Option(k, result[k]));
                    }
                },
                headers: {
                    "X-CSRFToken": getCookie("csrftoken")
                },
                error: function(e){
                    console.error(JSON.stringify(e));
                },
            });
        });

    }); 
});