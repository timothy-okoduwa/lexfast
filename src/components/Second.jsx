import React, { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
const Second = ({ setStep, step, setFormData, formData }) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const move = () => {
    setStep(step + 1);
    setFormData({ ...formData, country, city, state });
  };
  return (
    <div>
      <div>
        <div className="container">
          <div className="fhfu">Company structure</div>
          <div className="answer">
            Choose the legal entity that is right for your business
          </div>

          <div className="mt-5">
            <div className="d-flex align-items-center mb-5">
              <div className="container ">
                <div className="row">
                  {/* <div className="lello">Country</div> */}
                  <div className="">
                    {/* <select
                        className="window"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option value="">Select your country</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                      </select> */}
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Your Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Your Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        style={{ width: '100%', color: 'black' }}
                      >
                        <MenuItem value={'Benin'}>Benin</MenuItem>
                        <MenuItem value={'Burkina Faso'}>Burkina Faso</MenuItem>
                        <MenuItem value={'Burundi'}>Burundi</MenuItem>
                        <MenuItem value={'Cameroon'}>Cameroon</MenuItem>
                        <MenuItem value={'Central African Republic'}>
                          Central African Republic
                        </MenuItem>
                        <MenuItem value={'Chad'}>Chad</MenuItem>
                        <MenuItem value={'Comoros'}>Comoros</MenuItem>
                        <MenuItem value={'Democratic Republic of the Congo'}>
                          Democratic Republic of the Congo
                        </MenuItem>
                        <MenuItem value={'Republic of the Congo'}>
                          Republic of the Congo
                        </MenuItem>
                        <MenuItem value={"Côte d'Ivoire (Ivory Coast)"}>
                          Côte d'Ivoire (Ivory Coast)
                        </MenuItem>
                        <MenuItem value={'Djibouti'}>Djibouti</MenuItem>
                        <MenuItem value={'Equatorial Guinea'}>
                          Equatorial Guinea
                        </MenuItem>
                        <MenuItem value={'Gabon'}>Gabon</MenuItem>
                        <MenuItem value={'Guinea'}>Guinea</MenuItem>
                        <MenuItem value={'Madagascar'}>Madagascar</MenuItem>
                        <MenuItem value={'Mali'}>Mali</MenuItem>
                        <MenuItem value={'Mauritania'}>Mauritania</MenuItem>
                        <MenuItem value={'Mauritius'}>Mauritius</MenuItem>
                        <MenuItem value={'Niger'}>Niger</MenuItem>
                        <MenuItem value={'Rwanda'}>Rwanda</MenuItem>
                        <MenuItem value={'Senegal'}>Senegal</MenuItem>
                        <MenuItem value={'Seychelles'}>Seychelles</MenuItem>
                        <MenuItem value={'Togo'}>Togo</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <div className="container ">
                <div className="row">
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Enter Your City"
                      variant="outlined"
                      style={{ width: '100%' }}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <div className="container ">
                <div className="row">
                  {/* <div className="lello">State</div> */}
                  <div>
                    {/* <input
                      type="text"
                      className="flerf"
                      placeholder="Enter Your State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    /> */}
                    <TextField
                      id="outlined-basic"
                      label="Enter Your State"
                      variant="outlined"
                      style={{ width: '100%' }}
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <div className="container ">
                <div className="row">
                  <div>
                    <button className="flerf2" onClick={move}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
