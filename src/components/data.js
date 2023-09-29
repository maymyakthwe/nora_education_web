import course1 from '../images/1.png'
import course2 from '../images/2.png'
let allCourses = [
    {
        name: 'HTML5 ,CSS3 ,Java Script Basic to Advanced',
        description: 'repellendus architecto eum culpa quisquam, laborum enim, molestiae vel autem. Accusantium dolorem necessitatibus eaque nostrum? Ad, architecto?',
        level: 'Beginner Course',
        owner: 'Nora',
        price: 40000,
        img: course1,
        catagory: 'website development',
        link: '/basic',
        isAvailable: true,
        onpromotion: true
    },
    {
        name: 'React Js',
        description: 'repellendus architecto eum culpa quisquam, laborum enim, molestiae vel autem. Accusantium dolorem necessitatibus eaque nostrum? Ad, architecto?',
        level: 'Beginner Course',
        owner: 'Nora',
        price: 40000,
        img: course2,
        catagory: 'website development',
        link: '/react',
        isAvailable: false,
        onpromotion: true
    }

]

export default allCourses;