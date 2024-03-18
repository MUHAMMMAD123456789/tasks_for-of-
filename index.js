// let nums = [2,3,4,5,6,7,8,999,9,6]
// let max = 0

// for( let item of nums) {
//     if(item > max){
//         max = item
//     }
// }

// console.log(max);





// let names = ['Muhammadali', 'Javoxir', 'Munir', 'Jago' , 'Jaxonbek']


// let longest = ""

// for(let item of names) {
//     if(item.length > longest.length){
//         longest = item 
//     }
// }

// console.log(longest);

// следующиц урок
// цыклы в цыклах


// найти компанию которая больше всех платит налог
// найти компанию которая меньше всех платит налог
// покзать сколько гос-во зарабатывает со всех компаний 
// найти успешные и не успешные 20000






let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'programming',
        count: 0
    },
    {
        course: '     3dsmax',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   Backend',
        count: 0
    },
]






categories.forEach(kurs => {
    kurs.course = kurs.course.trim().toUpperCase();
});


arr.filter(elem => {

    let sort_all = categories.find(kurs => kurs.course === elem.info.faculity.toUpperCase());

    if (sort_all) {
        sort_all.count++;
    }
});

console.log(categories);


