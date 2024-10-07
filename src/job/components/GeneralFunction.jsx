export 
    const config = {
        headers: { 
            'content-type': "multipart/form-data",
            'Authorization': 'Bearer' 
        }
    }

    export const jobData = [
        {
        id: '1',
        image:'/images/job/1.png',
        title: 'Project Manager', 
        company: 'Doninos',
        location:'Nsuk Nassarawa',
        min_salary: '30',
        max_salary: '350',
        level: 'Entery level',  
        office: 'Round About unit',
        },

        {
            id: '2',
            image:'/images/job/3.png',
            title: 'ceo',
            company: 'Doninos',
            location:'kaduna',
            min_salary: '45',
            max_salary: '650',
            level: 'Mid level',
            office: 'GRA',
            }
    ]
