import React, { useEffect, useState } from "react";
import './App.css';
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Form from "react-bootstrap/Form"
import axios from "axios"
import Columns from "react-columns"

function App() {
  const [latest, setlatest] = useState("")
  const [result, setresult] = useState([])
  const [searchcountries, setsearchcountries] = useState("")

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries")

      ])
      .then(res => {
        setlatest(res[0].data)
        setresult(res[1].data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const date = new Date(parseInt(latest.updated));
  const lastupdate = date.toString()

  const filterCountries = result.filter((item) => {
    return searchcountries !== "" ? item.country.includes(searchcountries ) : item
  });
  const countries = filterCountries.map((data, i) => {
    return (
      <Card className="text-center"
        key={i}
        style={{ margin: "auto",textAlign:"center",padding:"20px" }
        }
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title><h2>{data.country}</h2></Card.Title>
          <Card.Text><h6>Cases : {data.cases}</h6></Card.Text>
          <Card.Text> <h6>Deaths : {data.deaths}</h6></Card.Text>
          <Card.Text><h6>Recovered : {data.recovered}</h6></Card.Text>
          <Card.Text> <h6>Today's cases : {data.todayCases}</h6></Card.Text>
          <Card.Text> <h6>Today's deaths : {data.todayDeaths}</h6></Card.Text>
          <Card.Text><h6> Active : {data.active}</h6></Card.Text>
          <Card.Text> <h6>Critical : {data.critical}</h6></Card.Text>
        </Card.Body>
      </Card>
    )
  })

  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];
  return (
    <div className="App" style={{width:"90%",margin:"auto"}}>
          <h1 style={{fontWeight:"bold",color:"red"}}> COVID-19 LIVE UPDATE</h1>

      <CardDeck>
        <Card bg="secondary" text="white" className="text-center" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              {latest.active}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated {lastupdate}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              {latest.deaths}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated {lastupdate}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center" style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {latest.recovered}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated  {lastupdate}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Form className="my-5">
  <Form.Group >
    <Form.Control style={{width:"70%",margin:"auto",textTransform:"capitalize"}} 
    type="text" placeholder="Search A Country" 
    onChange={ e => setsearchcountries(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
    />
  </Form.Group>
 
</Form>
      <Columns queries={queries}>

      {countries}
      </Columns>
    </div>
  );
}

export default App;
