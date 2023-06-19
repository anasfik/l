export default {
	story_generation_process: {
   steps: {

}
	},
	addStep: (stepName, stepPrompt, stepResult) => {
		  const newStep = {prompt: stepPrompt, result: stepResult};
	 this.story_generation_process.steps.anas = newStep;
	}
}