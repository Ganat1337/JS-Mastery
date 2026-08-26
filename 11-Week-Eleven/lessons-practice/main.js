// Nested Object And Advanced Examples
"use strict";

let Available = 0;
let user = {
  name: "gannat",
  age: "18",
  skills: ["CSS", "Html", "JS"],
  addresses: {
    Egypt: "Cairo",
    America: {
      one: "NewYork",
      two: "Miami",
    },
  },
  checkAvailable: function () {
    if (Available === true) return `${this.name} Ready`;
    else return `${this.name} is not Ready`;
  },
};
console.log(user.skills[1]);
console.log(user["addresses"].Egypt);
console.log(user.checkAvailable());

console.log("********************************");

// Create Object With Create Method

let bankAccount = {
  owner: "Default",
  balance: 0,

  deposit: function (amount) {
    return `${(this.balance += amount)}`;
  },

  withdraw: function (amount) {
    if (amount > this.balance) return `balance isn't enough`;
    else return `${(this.balance -= amount)}`;
  },
};

let gannatAccount = Object.create(bankAccount);

gannatAccount.owner = "Gannat";
gannatAccount.balance = 500;

console.log(gannatAccount.deposit(200)); // المفروض يبقى 700
console.log(gannatAccount.withdraw(1000)); // المفروض يقول الرصيد غير كافي
console.log(gannatAccount.withdraw(300)); // المفروض يخصم ويبقى 400

console.log("********************************");

let userProfile = {
  name: "Gannat",
  age: "18",
};
let defaultSettings = {
  theme: "light",
  language: "en",
};

let userCustom = {
  theme: "dark",
  language: "ar",
};

let fullUser = Object.assign({}, userProfile, defaultSettings, userCustom);

fullUser.getSummary = function () {
  return `Name: ${this.name}, Theme: ${this.theme}, lang:${this.language}  `;
};

console.log(fullUser.getSummary());

//  - Create Object With Create Method: إنشاء أوبجكت جديد وربطه بأوبجكت آخر لتطبيق مفهوم الوراثة (Inheritance) وتوفير المساحة.
//  - Create Object With Assign Method: دمج عدة أوبجكتس في أوبجكت واحد بـ Object.assign() مع إمكانية التحديث أو إنشاء أوبجكت جديد.
