export default {
	awardWinningPromptCHaptersEnumerationList: () => {
		let from = +step_5_from_input.text;
		let to = +step_5_to_input.text;
		let ignoredIndexes = step_5_ignore_input.text.split(",").map((word) => +word);
		
		let listResult = [];
		for(let i = from; i <= to; i++) {
			if(!ignoredIndexes.includes(i)) {
				listResult.push(i);
			}
		}
		
   storeValue("awardWinningPromptCHaptersEnumerationList", listResult.join(", "));		
	}
}