const switchElement = (element, removeClass, addClass) => {
	element.classList.remove(removeClass)
	element.classList.add(addClass)
}

const switchForm = (prevFormElem, formElem) => {
	switchElement(prevFormElem, 'form-active', 'form-inactive')
	switchElement(formElem, 'form-inactive', 'form-active')
}

const switchStep = (prevStepElem, stepElem) => {
	switchElement(prevStepElem, 'active', 'done')
	switchElement(stepElem, 'inactive', 'active')
}

window.addEventListener('load', function(e){
	let currentState = 0

	const forms = document.getElementsByClassName('form')
	forms[0].classList.add('form-active')

	const steps = document.getElementsByClassName('step')
	for (const step of steps) {
		step.classList.add('inactive')
	}
	switchElement(steps[currentState], 'inactive', 'active')

	const nextButton = document.getElementById('nextButton')
	nextButton.addEventListener('click', function(e){
		if (currentState === 1) {
			nextButton.innerText = 'Submit'
			switchForm(forms[currentState], forms[currentState+1])
			switchStep(steps[currentState], steps[currentState+1])
			currentState++
		} 
		else if (currentState > 1) {
			switchElement(steps[currentState], 'active', 'done')
			switchElement(forms[currentState], 'form-active', 'form-inactive')
			nextButton.removeEventListener('click', () => {})
			nextButton.innerText = 'Sended'
		} 
		else {		
			switchForm(forms[currentState], forms[currentState+1])
			switchStep(steps[currentState], steps[currentState+1])
			currentState++
		}
	})
})
