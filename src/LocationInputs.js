function LocationInputs(props) {
  return (
    <>
      <input type="number" placeholder="Latitude" />
      <input type="number" placeholder="Longitude" />
      <br />
      <button onClick={props.submitFunction}>Submit</button>
    </>
  );
}

export default LocationInputs;