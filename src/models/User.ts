enum UserType {
    Admin = "Admin",
    Member = "Member",
    Guest = "Guest"
}
export interface IUserCredentials {
    email: string;
    password: string;
  }
class User {
    private _firstName: String = "";
    public get firstName(): String{
        return this._firstName;
    }
    public set firstName(value: String){
        this._firstName = value;
    }

    private _lastName?: String | undefined = "";
    public get lastName_1(): String | undefined {
        return this._lastName;
    }
    public set lastName_1(value: String | undefined) {
        this._lastName = value;
    }
    
    private _userId: number = 1;
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    
 
    private _age: number = 0;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    private _userType: UserType;

    //constructor
    constructor(firstName: string, lastName: string, userId: number, age: number, userType: UserType) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userId = userId;
        this._age = age;
        this._userType= userType;
    }
    
    //function fullName()
    public fullName(): String{
        return `${this._firstName} ${this._lastName}`;
    }

    //function  greetUser()
    public  greetUser(): void{
        let message = `Bienvenue ${this._firstName}!`;

        switch(this._userType){
            case UserType.Admin:
                message += "vous etes un administrateur.";
                break;
            case UserType.Member:
                message += "vous etes un Membre.";
                break;
            case UserType.Guest:
                message += "vous etes un Guest.";
                break;
        }

        console.log(message);
    }

    public printUser(): void {
        console.log("userId: " + this._userId + ", fullName: " + this.fullName());
    }
    

}


