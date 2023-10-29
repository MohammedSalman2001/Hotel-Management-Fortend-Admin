import {getKey} from "../db/db.js";

export class UserController {
    constructor() {

        $('#btnSaveUser').click(e => {
            this.saveUser()
        })

    }

    saveUser() {
        let userName = $('#userName').val();
        let email = $('#email').val()
        let password = $('#password').val()
        let birthday = $('#birthday').val()
        let contact = $('#contact').val()
        let gender = $('#gender').val();
        var profilePic = $('#profilePic').prop('files')[0];
        var nicFront = $('#nicFront').prop('files')[0];
        var nicRear = $('#nicRear').prop('files')[0];
        let nicNo = $("nicNo").val();


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
        if (nicNo)
            form.append("nicRear", nicNo, "ac.jpg");
        form.append("nicNo", nicNo);


        var settings = {
            "url": "http://localhost:8081/api/v1/user/0",
            "method": "POST",
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
        });




    }
}

new UserController()