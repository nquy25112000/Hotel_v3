const aa = {};

aa.b = {
    
    "token" : [
        {
            "uuid": "f148b96b-4321-4acc-9f3f-baae4ecf294b",
            "username": "a",
            "password": "b",
            "fullName": "",
            "birtDate": "0000-00-00",
            "adress": "",
            "phone": "",
            "createdAt": "2022-03-31T05:07:31.000Z",
            "updatedAt": "2022-03-31T08:06:30.000Z",
            "hotelId": null,
            "roleId": "f148b96b-4321-4acc-9f3f-baae4ecf294b"
        },
         {
            "uuid": "f148b96b-4321-4acc-9f3f-baae4ecf294b22222",
            "username": "a",
            "password": "b",
            "fullName": "",
            "birtDate": "0000-00-00",
            "adress": "",
            "phone": "",
            "createdAt": "2022-03-31T05:07:31.000Z",
            "updatedAt": "2022-03-31T08:06:30.000Z",
            "hotelId": null,
            "roleId": "f148b96b-4321-4acc-9f3f-baae4ecf294b"
        }
    ]

}

console.log(aa.b.token[1].uuid);


const c = aa.c;
console.log(c);