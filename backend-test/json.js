const jsonPerson = (name, age) => {
    const person = {
        name,
        age,
        address: 'Jalan Keputih Gang 1D, Sukolilo, Surabaya',
        hobbies: ['Music', 'Gamming'],
        list_school: [
            {
                name: 'Institut Teknologi Sepuluh Nopember',
                in: 2016,
                out: 2021,
                major: 'Electrical Engineering',
            },
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Golang'],
        interst_coding: true
    }

    return JSON.stringify(person)
}

console.log(jsonPerson('Billy', 23))