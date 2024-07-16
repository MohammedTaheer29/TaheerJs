// De-structure and JSON

const course = {
    coursename: "Javascript",
    price:"900",
    courseInstructure: "Chaiaurcode"
}

// course.courseInstructure

const {courseInstructure: Instruct}= course
console.log(Instruct);