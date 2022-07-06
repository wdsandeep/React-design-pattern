import { useState } from 'react';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = ({ goToNext }) => (
  <>
  <h1>Step 1</h1>
  <button onClick={() => goToNext({ name: 'John Doe'})}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
  <h1>Step 2</h1>
  <button onClick={() => goToNext({ age: '25'})}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
  <h1>Step 3</h1>
  <button onClick={() => goToNext({ hairColor: 'red'})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
  <h1>Step 4</h1>
  <button onClick={() => goToNext({ verify: true})}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
        ...onboardingData,
        ...stepData,
    }
    setOnboardingData(updatedData)
    console.log(updatedData);
    if(nextIndex<children.length ){
        setCurrentIndex(nextIndex)
    } else {
        onFinish(updatedData);
    }
}


  return (
    <UncontrolledOnboardingFlow onFinish={data => {console.log(data); alert('Onboarding complete!')}}>
      <StepOne /> 
      <StepTwo />
      <StepThree />
      <StepFour />
    </UncontrolledOnboardingFlow>
    );
}

export default App;
