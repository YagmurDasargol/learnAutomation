function TestController(){
	var date = new Date();
	var dateStamp = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear()+'_'+date.getHours()+'.'+date.getMinutes();
	var folderName = 'reports'	
		this.switchWindow = function(browser, windowIndex){ //windowIndex starts from 0
				browser.windowHandles(function(result){
					this.switchWindow(result.value[windowIndex]);
				});	
				return browser;
    };

    this.openAmazon = function(browser){
			browser	
			.useXpath()
			.url('https://www.amazon.com/')
			// senaryo:1- elektrik kettle araması yapılır ve bu aramada kettle için şuan fırsatlar aranır.
			.setValue(browser.globals.openAmazon.searchTextBox, 'electric kettle') 
			.click(browser.globals.openAmazon.submitButton)
			.pause(2000)
			.saveScreenshot(folderName+dateStamp+'Flow_ElectricKettleSearch-Success.png')
			
			//senaryo:2-Ücreti 25 dolların altında olan elektrikli kettle ürünlerinin gösterilmesi
			.click(browser.globals.openAmazon.underPrice)
			.pause(2000)
			.saveScreenshot(folderName+dateStamp+'Flow_Click_Under25PriceKettle-Success.png')	

			//senaryo:3-Ücreti 25 dolların altında olan best seller ürünü seçilmesi
			.click(browser.globals.openAmazon.bestSeller)
			.pause(2000)
			.saveScreenshot(folderName+dateStamp+'Flow_Select_BestSellerKettlePriceUnder25-Success.png')

			//senaryo:4-Ürün için satın alma butonuna basılması
			.click(browser.globals.openAmazon.buyButton)
			.pause(2000)
			.saveScreenshot(folderName+dateStamp+'Flow_BestSeller-ClickBuyButton-Success.png')	

		}
			//senaryo:5- Amazon.com'a üye olma akışı
		this.registration = function(browser){
			browser
			//testController.switchWindow(browser, 1)
			//.frame('AmazonRegistration')
			.useXpath()
			.waitForElementVisible(browser.globals.registration.createAmazonAccountButton, 25000)
			.pause(5000)
			.click(browser.globals.registration.createAmazonAccountButton)
			.pause(250)
			.saveScreenshot(folderName+dateStamp+'Flow_AmazonAccountLoginPage-Sucess.png')

			//senaryo:6- Amazon.com'a üye olma akışı
			.setValue(browser.globals.registration.customerNameBox, 'yagmur')
			.pause(250)
			.saveScreenshot(folderName+dateStamp+'Flow_EnterUsername-Success.png')

			.setValue(browser.globals.registration.emailBox, 'yagmur@h.com')
			.pause(250)
			.verify.visible(browser.globals.registration.emailBox, 'Checking Email validation..')
			.saveScreenshot(folderName+dateStamp+'Flow_EnterEmail-Success.png')

			.setValue(browser.globals.registration.passwordBox, '123')
			.pause(250)
			.saveScreenshot(folderName+dateStamp+'Flow_EnterPassword-Success.png')

			.setValue(browser.globals.registration.reEnterPasswordBox, '123')
			.pause(250)
			.saveScreenshot(folderName+dateStamp+'Flow_ReEnterPassword-Success.png')

			.click(browser.globals.registration.createButton)
			.saveScreenshot(folderName+dateStamp+'Flow_ClickCreateButton- Success.png')
		
		}
	};



  var testController = new TestController();

	module.exports = {
			'1- Opening Amazon page and Filtering Controls..' : testController.openAmazon,
			'2- Opening Registration Page..' : testController.registration
		};