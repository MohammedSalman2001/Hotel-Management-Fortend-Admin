import {getKey} from "../db/db.js";

export class UserController {
    constructor() {

        $('#btnSaveUser').click(e => {
            this.saveUser()
        })

        $('#search').keydown(e => {
            if (e.keyCode == 13) {
                e.preventDefault();
                let customerMail = $('#search').val();
                console.log(customerMail)
                this.searchCustomer(customerMail)
            }

        });


        $('#btnClear').click(e => {
            this.clearForm()
        })

        $('#btnDelete').click(e => {

        })

        $('#btnUpdate').click(e => {
            this.updateUser()
        })


        $('#header-inner-user').click(e => {
            $('#user-form').hide()
            $('#dashboard-form').show()

        })
    }





    updateUser() {
        let userName = $('#userName').val();
        let email = $('#email').val()
        let password = $('#password').val()
        let birthday = $('#birthday').val()
        let contact = $('#contact').val()
        let gender = $('#gender').val();
        var profilePic = $('#profilePic').prop('files')[0];
        var nicFront = $('#nicFront').prop('files')[0];
        var nicRear = $('#nicRear').prop('files')[0];
        let nicNo = $("#nicNo").val();


        var form = new FormData();
        form.append("userName", userName);
        form.append("email", email);
        form.append("password", password);
        form.append("birthday", birthday);
        form.append("password", password);
        form.append("gender", gender);
        form.append("contact", contact);
        if (profilePic)
            form.append("profilePic", profilePic, "ab.jpg");
        if (nicFront)
            form.append("nicFront", nicFront, "aa.jpg");
        if (nicRear)
            form.append("nicRear", nicRear, "ac.jpg");


        form.append("nicNo", nicNo);

        var settings = {
            "url": "http://localhost:8081/api/v1/user/0",
            "method": "PUT",
            "timeout": 0,
            "headers": {
                "Authorization": "Bearer " + getKey()
            },
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('#btnClear').trigger('click');
        });

    }




    searchCustomer(email){
        var settings = {
            "url": "http://localhost:8081/api/v1/user/0/" + email,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": "Bearer " + getKey()
            },
        };

        $.ajax(settings).done(function (responseData) {

            $("#email").prop('readonly', true);
           /* console.log(responseData.nicFrontByte)
            console.log(responseData.nicRearByte)
            console.log(responseData.profilePic)
            console.log(responseData.nicFront)
            console.log(responseData.nicRear)*/
            console.log(responseData.password)

            $('#userName').val(responseData.username);
            $('#nicNo').val(responseData.usernic);
            $('#contact').val(responseData.contact);
            $('#email').val(responseData.email);
            $('#birthday').val(responseData.birthday);
            $('#password').val(responseData.password)
            $('#gender').val(responseData.gender);

            $("#nicNo").val(responseData.usernic);


            $('#nicFront-img-show').attr('src', "data:image/jpeg;base64," + responseData.nicFront); // Set the src attribute for an image element
            $('#nicRear-img-show').attr('src', "data:image/jpeg;base64," + responseData.nicRear);   // Set the src attribute for an image element
           $('#gender').val(responseData.gender)
            $('#profilePic-img-show').attr('src', "data:image/jpeg;base64," + responseData.profilePic); // Set the src attribute for an image element


            $('#search').val('')

        });
    }


    saveUser() {
        let userName = $('#userName').val();
        let email = $('#email').val()
        let password = $('#password').val()
        let birthday = $('#birthday').val()
        let contact = $('#contact').val()
        let gender = $('#gender').val();
        let nicNo = $("#nicNo").val();
        var profilePic = $('#profilePic').prop('files')[0];
        var nicFront = $('#nicFront').prop('files')[0];
        var nicRear = $('#nicRear').prop('files')[0];


        console.log(userName)
        console.log(email)
        console.log(password)
        console.log(birthday)
        console.log(gender)
        console.log(contact)
        console.log(profilePic)
        console.log(nicFront)
        console.log(nicRear)
        console.log(nicNo)


        var form = new FormData();
        form.append("userName", userName);
        form.append("email", email);
        form.append("password", password);
        form.append("birthday", birthday);
        form.append("password", password);
        form.append("gender", gender);
        form.append("contact", contact);
        if (profilePic)
            form.append("profilePic", profilePic, "ab.jpg");
        if (nicFront)
            form.append("nicFront", nicFront, "aa.jpg");
        if (nicRear)
            form.append("nicRear", nicRear, "ac.jpg");


        form.append("nicNo", nicNo);


        var settings = {
            "url": "http://localhost:8081/api/v1/user/0",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": "Bearer " + getKey(),
            },
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('#btnClear').trigger('click');


        }).fail(e => {
            console.log(e.code)
        });



    }


    clearForm() {
        $("#userName").val('');
        $("#password").val('');
        $("#email").val('');
        $("#birthday").val('');
        $("#gender").val('');
        $('#profilePic').val('');
        $('#nicFront').val('');
        $('#nicRear').val('');
        $("#nicNo").val('');

        // Change the src of the image elements
        $("#profilePic-img-show").attr('src', '');
        $("#nicRear-img-show").attr('src', '');
        $("#nicFront-img-show").attr('src', '');
        // $("#user_email").prop('readonly', false);
    }
}

new UserController()