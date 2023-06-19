export default {
getSupaClient: () => {
  return supabase.createClient(
	 'https://supabase.gwhyyy.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE4MzU1OTc3ODcsImlhdCI6MTY3NzgxMzM4NywiaXNzIjoic3VwYWJhc2UiLCJyb2xlIjoic2VydmljZV9yb2xlIn0.scIFj5ggHjLSoFk4OyVCk5FzsW56LbEgzBt34RXx5wM'
	);	
},
	
		getTextToSpeechAudio: async (voiceId, text) =>  {
  const textToSpeechData = {
    text: text.slice(0, 10)
  };
  
  const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voiceId, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'xi-api-key': "2994d967f008a29d2ae5966141a77438"
    },
    body: JSON.stringify(textToSpeechData)
  });
			
			showAlert("audio for text starting with: " + text.slice(0, 10) + " is generated succesfully", "success")
			
  const blob = await response.blob();
  return blob;
}
}