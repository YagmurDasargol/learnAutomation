var openAmazon = {
		//xpathler
		searchTextBox:  '//*[@id="twotabsearchtextbox"]',
		submitButton: '//*[@id="nav-search-submit-button"]',
		filterButton:'//*[@id="searchDropdownBox"]',
		underPrice: '//*[@id="anonCarousel3"]/ol/li[1]/div/a',
		bestSeller:'//*[@id="search"]/div[1]/div[2]/div/span[3]/div[2]/div[1]/div/span/div/div/span/a/div/img',
		buyButton:'//*[@id="buy-now-button"]'
		}

var registration = {
		//xpathler
		createAmazonAccountButton:  '//*[@id="createAccountSubmit"]',
		customerNameBox: '//*[@id="ap_customer_name"]',
		emailBox: '//*[@id="ap_email"]',
		passwordBox: '//*[@id="ap_password"]',
		reEnterPasswordBox: '//*[@id="ap_password_check"]',
		createButton: '//*[@id="continue"]'
		}

module.exports = {
	openAmazon: openAmazon,
	registration: registration
}