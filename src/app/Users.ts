export class Users
{
    id : string;
    firstName : string;
    lastName : string;
    role : string;


    constructor(id, firstName, lastName, role)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }

}
