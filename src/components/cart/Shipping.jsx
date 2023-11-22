import React, {useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";


const Shipping = (  ) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    houseNo: '',
    city: '',
    pinCode: '',
    phone: '',
  })
  

  const handleInput = e => {
    const {name, value} = e.target
    setShippingInfo (prev => (
      { 
        ...prev,
        [name]: value,
      }
    ))
    
  }
 
  useEffect(() => {
    const allCountries = Country.getAllCountries().map(({ isoCode, name }) => ({
      isoCode,
      name,
    }));
    // console.log(allCountries)
    setSelectedCountry(allCountries.isoCode);
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    const allStates = State.getStatesOfCountry(selectedCountry).map(
      ({ isoCode, name }) => ({
        isoCode,
        name,
      })
    );
    // console.log(allStates)
    setSelectedState(allStates.isoCode);
    setStates(allStates);
  }, [selectedCountry]);



  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="houseNo">H.No.</label>
            <input 
              
              id='houseNo' 
              name='houseNo' 
              placeholder="Enter House No."
              required 
              onChange={handleInput}
              value={shippingInfo.houseNo}
            />
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input 
              
              id='city' 
              name='city' 
              placeholder="Enter City"
              required
              onChange={handleInput}
              value={shippingInfo.city}
            />
          </div>
          <div>
            {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label htmlFor="country">Country</label>

            <select
              onChange={(e) => setSelectedCountry(e.target.value)}
              value={selectedCountry}
              name="country"
              id="country"
            >
              <option value="">Country</option>
              {countries.map(({ isoCode, name }) => (
                <option key={isoCode} value={isoCode} >
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">State</option>
              {states.length > 0 ? (
                states.map(({ isoCode, name }) => (
                  <option key={isoCode} value={isoCode}>
                    {name}
                  </option>
                ))
              ) : (
                <option key="" value="">
                  No State Found{" "}
                </option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor='pinCode'>Pin Code</label>
            <input
              id="pinCode"
              
              name="pinCode"
              placeholder="Enter Pincode"
              required
              onChange={handleInput}
              value={shippingInfo.pinCode}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number"
              required
              onChange={handleInput}
              value={shippingInfo.phone}
            />
          </div>

          <Popup
            trigger={<button type="submit">Confirm Order</button>}
            position="right center"
          >
            <div
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                right: "100%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Placed
            </div>
          </Popup>
      
        </form>
      </main>
    </section>
  );
};

export default Shipping;
