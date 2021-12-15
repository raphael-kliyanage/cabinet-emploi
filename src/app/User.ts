export class User {
    id!: number;
    userlastname!: string;
    userfirstname!: string;
    userworkfunction!: string;
    useremail!: string;
    userphone!: number;
    userskype!: string;
    userinterviewdate!: string;
    usermessage!: string;
    userfile!: string;
    //Both the type of interview are in a single object
    userinterview!: {
        ftf: boolean;
        tel: boolean;
        skyp: boolean;
    };
    terms!: boolean;

    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> e34e359f20937c13bd069a0552d6d1766b537dcf
