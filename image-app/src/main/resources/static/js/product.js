$(document).ready(function () {
    $('#loader').hide();
    $("#submit").on("click", function () {
        var name = $("#name").val();
        var file = $("#image").val();
        var price = $("#price").val();
        var description = $("#description").val();
        var form = $("#form").serialize();
        var data = new FormData($("#form")[0]);
        data.append('name', name);
        data.append('price', price);
        data.append('description', description);
        $('#loader').show();
        if (name === "") {
            $('#loader').hide();
            $("#name").css("border-color", "red");
            $("#error_name").html("Please fill the required field.");

            $("#image").css("border-color", "");
            $("#price").css("border-color", "");
            $("#description").css("border-color", "");
            $('#error_file').css('opacity', 0);
            $('#error_price').css('opacity', 0);
            $('#error_description').css('opacity', 0);
        } else if (description === "") {
            $('#loader').hide();
            $("#description").css("border-color", "red");
            $("#error_description").html("Please fill the required field.");

            $("#image").css("border-color", "");
            $("#price").css("border-color", "");
            $("#name").css("border-color", "");
            $('#error_file').css('opacity', 0);
            $('#error_price').css('opacity', 0);
            $('#error_name').css('opacity', 0);
        } else if (file === "") {
            $('#loader').hide();
            $("#image").css("border-color", "red");
            $("#error_file").html("Please fill the required field.");

            $("#description").css("border-color", "");
            $("#price").css("border-color", "");
            $("#name").css("border-color", "");
            $('#error_price').css('opacity', 0);
            $('#error_name').css('opacity', 0);
            $('#error_description').css('opacity', 0);

        } else if (price === "") {
            $('#loader').hide();


            $("#price").css("border-color", "red");
            $("#price_file").html("Please fill the required field.");

            $("#description").css("border-color", "");
            $("#name").css("border-color", "");
            $("#image").css("border-color", "");

            $("#error_file").css('opacity', 0);
            $('#error_name').css('opacity', 0);
            $('#error_description').css('opacity', 0);

        } else {
            $("#name").css("border-color", "");
            $("#image").css("border-color", "");
            $("#price").css("border-color", "");
            $("#description").css("border-color", "");
            $('#error_name').css('opacity', 0);
            $('#error_file').css('opacity', 0);
            $('#error_price').css('opacity', 0);
            $('#error_description').css('opacity', 0);
            $.ajax({
                type: 'POST',
                enctype: 'multipart/form-data',
                data: data,
                url: "/image/saveImageDetails",
                processData: false,
                contentType: false,
                cache: false,
                success: function (data, statusText, xhr) {
                    if (xhr.status == "200") {
                        $('#loader').hide();
                        $("#form")[0].reset();
                        $('#success').css('display', 'block');
                        $("#error").text("");
                        $("#success").html("Product Inserted Succsessfully.");
                        $('#success').delay(3000).fadeOut('slow');


                    }
                },
                error: function (e) {
                    $('#loader').hide();
                    $('#error').css('display', 'block');
                    $("#error").html("Oops! something went wrong.");
                    $('#error').delay(5000).fadeOut('slow');
                    location.reload();
                }
            });
        }
    });
});
