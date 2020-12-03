import React, { useState } from 'react'
import classnames from 'classnames'
import './index.css'

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(1)
  const totalSteps = 4

  const steps = Array.from({ length: totalSteps }, (v, i) => i + 1)

  const nextStep = () => setActiveStep(activeStep + 1)

  const prevStep = () => setActiveStep(activeStep - 1)

  const width = `${100 / (totalSteps - 1) * (activeStep - 1)}%`

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          style={{ width }}
        />
        {steps.map((step) => (
          <div key={step}
            className={classnames(
              'circle',
              activeStep >= step && 'active',
            )}
          >
            {step}
          </div>
        ))}
      </div>
      <button
        onClick={prevStep}
        className="btn"
        disabled={activeStep === 1}
      >
        Prev
      </button>
      <button
        onClick={nextStep}
        className="btn"
        disabled={activeStep === totalSteps}
      >
        Next
      </button>
    </div>
  )
}

export default ProgressSteps
