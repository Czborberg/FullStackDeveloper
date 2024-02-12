const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content = ({course}) => {
  console.log('parts', course.parts);
  return (
    <div>
      {course.parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        total of {props.course.parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
      </p>
    </div>
  )
}

const Course = (parts) => {

  return (
    <div>
      <Header course={parts.course} />
      <Content course={parts.course} />
      <Total course={parts.course}/>
    </div>
  )
}

const Courses = ({courses}) => {

  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default Courses