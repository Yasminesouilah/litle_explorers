const steps = ['Enfant', 'Séance', 'Confirmation'];

function RegistrationSteps({ currentStep = 0 }) {
  return <ol className="registration-steps">{steps.map((step, index) => <li className={index <= currentStep ? 'step-active' : ''} key={step}><span>{index + 1}</span>{step}</li>)}</ol>;
}

export default RegistrationSteps;
