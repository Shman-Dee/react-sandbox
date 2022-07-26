import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = 'hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'goodbye'
  }

  return (
    <form onSubmit={onSubmit} action="">
      <label htmlFor="name">Name</label>
      <input
        className="form-control mb-2"
        ref={inputRef}
        id="name"
        type="text"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>
        helllo
      </p>
    </form>
  )
}

export default UseRefExample1
