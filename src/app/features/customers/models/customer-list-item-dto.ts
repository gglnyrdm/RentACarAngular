// export interface CustomerListItemDto {
//     id:       number;
//     customer: Customer;
//     car:      Car;
// }

// export interface Car {
//     id:    number;
//     plate: string;
// }

// export interface Customer {
//     id:        number;
//     firstName: string;
//     lastName:  string;
// }

export interface CustomerListItemDto{
    id:number,
    firstName:string,
    lastName:string,
    gender:boolean,
    email:string,
    yearOfBirth:number
}

// {
//     "id": 1,
//     "firstName": "Sevda",
//     "lastName":  "Şimşek",
//     "gender": true,
//     "email": "sevda.simsek@etiya.com",
//     "yearOfBirth": 1998
//   },