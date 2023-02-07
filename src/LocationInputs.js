function LocationInputs(props) {
  return (
    <>
      <input id="latitudeInput" type="number" placeholder="Latitude" />
      <input id="longitudeInput" type="number" placeholder="Longitude" />
      <br />
      <button id="submitButton" onClick={props.submitFunction}>Submit</button>
    </>
  );
}

export default LocationInputs;