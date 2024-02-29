import {useState, useEffect} from 'react';

const Section = () => {

  const [visit, setVisit] = useState(0)

  const visitGoUp  = () => {
    setVisit((previsit) => previsit + 1)
  }

  useEffect(() => {
    console.log("Section has re-reloaded")
  })

  return (
    <>
    <h2>Visits: {visit}</h2>
    <button onClick = {visitGoUp}>+</button>
    </>
  )
}

export default Section;