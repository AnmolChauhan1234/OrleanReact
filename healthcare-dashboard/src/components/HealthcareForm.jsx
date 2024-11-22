import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import './HealthcareForm.css';

const HealthcareForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    file: null,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="dashboard">
      {/* Form container */}
      <div className="form-container">
        <div className="form-card shadow-lg p-4">
          <h1 className="text-center">Healthcare Dashboard</h1>
          {!submittedData ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <TextField
                  label="Name"
                  id="name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                {/* <FormControl fullWidth>
                  <InputLabel id="age-label">Age</InputLabel>
                  <Select
                    labelId="age-label"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select your age</MenuItem>
                    {Array.from({ length: 100 }, (_, i) => (
                      <MenuItem key={i + 1} value={i + 1}>
                        {i + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}

                <TextField
                  label="Age"
                  id="age"
                  name="age"
                  variant="outlined"
                  select
                  fullWidth
                  value={formData.age}
                  onChange={handleChange}
                  required
                >
                  {Array.from({ length: 100 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>
                      {index + 1}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="mb-3">
                {/* <label htmlFor="file" className="form-label">Upload File</label> */}
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>
          ) : (
            <div>
              <h2 className="text-center">Submission Successful!</h2>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Age:</strong> {submittedData.age}</p>
              <p><strong>File:</strong> {submittedData.file.name}</p>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => setSubmittedData(null)}
              >
                Back to Form
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthcareForm;