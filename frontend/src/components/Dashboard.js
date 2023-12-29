// src/components/DistributionForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: #007bff;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const DistributionForm = () => {
  const [beneficiaries, setBeneficiaries] = useState(100);
  const [rationCardHolders, setRationCardHolders] = useState(50);
  const [femaleHouseOwners, setFemaleHouseOwners] = useState(30);

  return (
    <FormContainer>
      <FormTitle>Distribution Form</FormTitle>
      <FormGroup>
        <FormLabel>Number of Beneficiaries:</FormLabel>
        <FormInput type="number" value={beneficiaries} onChange={(e) => setBeneficiaries(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Number of Ration Card Holders:</FormLabel>
        <FormInput type="number" value={rationCardHolders} onChange={(e) => setRationCardHolders(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Number of Female House Owners:</FormLabel>
        <FormInput type="number" value={femaleHouseOwners} onChange={(e) => setFemaleHouseOwners(e.target.value)} />
      </FormGroup>
    </FormContainer>
  );
};

export default DistributionForm;
