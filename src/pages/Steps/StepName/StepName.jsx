import React from 'react'

const StepName = ({propNext}) => {
    return (
        <>
            <div>StepName Component</div>
            <button onClick={propNext}>Go Next</button>
        </>
    )
}

export default StepName