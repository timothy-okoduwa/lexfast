import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Third = ({ setStep, step, setFormData, formData }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [companyIndustry, setCompanyIndustry] = useState('');
  const move = () => {
    setStep(step + 1);
    setFormData({ ...formData, companyName, companyType, companyIndustry });
  };

  const handleCompanyTypeChange = (event) => {
    const value = event.target.value;
    setCompanyType(value);

    // If "other" is selected, show an additional input field
    if (value === 'other') {
      setFormData((formData) => ({ ...formData, companyTypeOther: '' }));
    } else {
      setFormData((formData) => ({ ...formData, companyType: value }));
    }
  };

  const handleCompanyTypeOtherChange = (event) => {
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, companyTypeOther: value }));
  };




const handleCompanyIndustryChange = (event) => {
  const value = event.target.value;
  setCompanyIndustry(value);

  // If "Other" is selected, show the `Textarea` component
  if (value === 'other') {
    setFormData((formData) => ({ ...formData, companyIndustryOther: '' }));
  } else {
    setFormData((formData) => ({ ...formData, companyIndustry: value }));
  }
};

const handleCompanyIndustryOtherChange = (event) => {
  const value = event.target.value;
  setFormData((formData) => ({ ...formData, companyIndustryOther: value }));
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
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Company name"
                      variant="outlined"
                      style={{ width: '100%' }}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <div className="container ">
                <div className="row">
                  <div>
                    {companyType === 'other' ? (
                      <TextField
                        fullWidth
                        label="Please specify the type of company you run"
                        value={formData.companyTypeOther}
                        onChange={handleCompanyTypeOtherChange}
                      />
                    ) : (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Choose the type of company you run
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Choose the type of company you run"
                          value={companyType}
                          onChange={handleCompanyTypeChange}
                        >
                          <MenuItem value="startup">Startup</MenuItem>
                          <MenuItem value="small business">
                            Small Business
                          </MenuItem>
                          <MenuItem value="medium-sized business">
                            Medium-sized Business
                          </MenuItem>
                          <MenuItem value="large business">
                            Large Business
                          </MenuItem>
                          <MenuItem value="corporation">Corporation</MenuItem>
                          <MenuItem value="nonprofit organization">
                            Nonprofit Organization
                          </MenuItem>
                          <MenuItem value="government agency">
                            Government Agency
                          </MenuItem>
                          <MenuItem value="educational institution">
                            Educational Institution
                          </MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <div className="container ">
                <div className="row">
                  <div>
                    {companyIndustry === 'other' ? (
                      <TextField
                        fullWidth
                        label="Please specify the industry your company is in"
                        value={formData.companyIndustryOther}
                        onChange={handleCompanyIndustryOtherChange}
                      />
                    ) : (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          What industry is your company in?
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="What industry is your company in?"
                          value={companyIndustry}
                          onChange={handleCompanyIndustryChange}
                        >
                          <MenuItem value="Aerospace and Defense">
                            Aerospace and Defense
                          </MenuItem>
                          <MenuItem value="Automotive">Automotive</MenuItem>
                          <MenuItem value="Banking">Banking</MenuItem>
                          <MenuItem value="Construction">Construction</MenuItem>
                          <MenuItem value="Consumer Goods and Services">
                            Consumer Goods and Services
                          </MenuItem>
                          <MenuItem value="Education">Education</MenuItem>
                          <MenuItem value="Energy and Utilities">
                            Energy and Utilities
                          </MenuItem>
                          <MenuItem value="Financial Services">
                            Financial Services
                          </MenuItem>
                          <MenuItem value="Government">Government</MenuItem>
                          <MenuItem value="Healthcare">Healthcare</MenuItem>
                          <MenuItem value="Hospitality and Travel">
                            Hospitality and Travel
                          </MenuItem>
                          <MenuItem value="Insurance">Insurance</MenuItem>
                          <MenuItem value="Manufacturing">
                            Manufacturing
                          </MenuItem>
                          <MenuItem value="Media and Entertainment">
                            Media and Entertainment
                          </MenuItem>
                          <MenuItem value="Nonprofit">Nonprofit</MenuItem>
                          <MenuItem value="Professional Services">
                            Professional Services
                          </MenuItem>
                          <MenuItem value="Real Estate">Real Estate</MenuItem>
                          <MenuItem value="Retail">Retail</MenuItem>
                          <MenuItem value="Technology">Technology</MenuItem>
                          <MenuItem value="Telecommunications">
                            Telecommunications
                          </MenuItem>
                          <MenuItem value="Transportation and Logistics">
                            Transportation and Logistics
                          </MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    )}
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

export default Third;
