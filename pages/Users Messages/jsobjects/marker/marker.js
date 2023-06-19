export default {
	clearAll: () => {
		clearStore();
	},
	markMessageAsAnswered: async (messageObj) => {
  try{
    await mark_message.run();
    showAlert("message of " + messageObj.email + " is marked as answered successfully", "success");
		resetWidget("user_messages_table");
     } catch(error) {
      showAlert(error.toString(), "error");
     }
	}
}