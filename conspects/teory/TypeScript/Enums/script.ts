


enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
// если вывестив  консоль membership то мы 
// получим 1 - т.е. в переменную запишется индекс свойства enum


enum Social {
    VK = "VK",
    INSTAGRAM = "INSTAGRAM",
    FACEBOOK = 'FACEBOOK'
}

const social = Social.VK
/*
если вывести в консоль social то получим строчку 'VK'
*/


