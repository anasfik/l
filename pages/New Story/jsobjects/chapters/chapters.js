export default {
	
	addNewChapter: () => {
	
		let previousList = appsmith.store.chaptersList;
		console.log("found " + previousList.length + " previous chapters in chat")
		let lastIndex = previousList[previousList.length - 1].index;
		console.log("lastIndex: " + lastIndex);	
		let newIndex = lastIndex + 1;
		console.log("newIndex: " + newIndex);	

		previousList.push({
	"id": "chapter" + newIndex,
	"prompt": "Write Chapter " + newIndex + " in depth and in great detail, in an intriguing writing style. Include chapter number and title at the very beginning.",
"index": newIndex
	});
		return previousList;
	},
	removeLastChapter: () => {
		let previousList = appsmith.store.chaptersList;
		console.log("found " + previousList.length + " previous chapters in chat")
		
		previousList.pop();
	return previousList;
	},
	putChapteresMessages: () => {
		let additionalObject = [];
		
	let chaptersList = appsmith.store.chaptersList || List1.listData;
		console.log("found " + chaptersList.length + " prompts chapters");
		
		for(let i = 0 ; i < chaptersList.length; i++) {
			let currentPromptObj = {};
			currentPromptObj["role"] = "user";
			currentPromptObj["content"] = chaptersList[i].prompt;
			console.log	("prompt is added to request " +  currentPromptObj);
			additionalObject.push(currentPromptObj);
			
		 let currentResponseObj = {};
	  	currentResponseObj["role"] = "assistant";
			currentResponseObj["content"] = appsmith.store[chaptersList[i].id];
			console.log	("prompt is added to request " +  currentResponseObj);
			
			additionalObject.push(currentResponseObj);
			
		}
		
		return additionalObject;
	},
	getStoryChapters: () => {
			let chaptersAsMessages = chapters.putChapteresMessages();
		
		return {
			"role": "user", 
			"content": chaptersAsMessages.filter((message) => message.role == "assistant").map((generatedChapter) => generatedChapter.content).toString()
		};
	}, 
	saveToDatabase: async () => {
		try {
		let uuid = UUID.genV4();
  		removeValue("currentUUID");
      storeValue("currentUUID", uuid.toString());
			if(appsmith.store["currentUUID"] === undefined ) {
				showAlert('no UUID is recorded in appsmith state to be used for the story', "error");
				return;
			}
			await save_step_one.run();
      showAlert("step 1 data is saved succesfully", "success");
			await save_step_two.run();
      showAlert("step 2 data is saved succesfully", "success");
			await save_step_three.run();
      showAlert("step 3 data is saved succesfully", "success");
			await save_step_four.run();
      showAlert("step 4 data is saved succesfully", "success");
			await save_step_five.run();
      showAlert("step 5 data is saved succesfully", "success");
			await save_step_sex.run();
      showAlert("step 6 data is saved succesfully", "success");			
			await save_step_seven.run();
      showAlert("step 7 data is saved succesfully", "success");
      await save_step_eight.run();
      showAlert("step 8 data is saved succesfully", "success");
			
			await save_final_story.run();
      showAlert("the story is saved successfully", "success");
      
      clearStore();
		} catch(error){
     showAlert(error.toString(), "error")
     }
	}
}