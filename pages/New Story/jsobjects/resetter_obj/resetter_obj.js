export default {
	resetTabsDefaults: () => {
	clearStore()
		
		this.resetOpenAIConfiguration();
	},
	
	resetOpenAIConfiguration: () => {
		
storeValue("openai_config_model", "gpt-3.5-turbo")

storeValue("openai_config_temp", 1)

storeValue("openai_config_top_p", 1)

storeValue("openai_config_stop", null)

storeValue("openai_config_max_tokens", 600)

storeValue("openai_config_prepen", 0)

storeValue("openai_config_frepen", 0)

	}
}