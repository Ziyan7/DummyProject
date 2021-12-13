const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function Registration() {
    var firstName = "Selenium"
    var lastName = "Automation"
    var email = "check7777@gmail.com";
    var pass = "@check1234567890"
    var con = "@check1234567890"

    var logemail = "abdulziyan07@gmail.com";
    var logpass = "@ziyan1234"
    var logsearch = "C"
  
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
  
    //To fetch http://google.com from the browser with our code.
    await driver.get("http://localhost:3000/");
  
    //To send a search query by passing the value in searchString.
    await driver.findElement(By.id("firstName")).sendKeys( firstName, Key.RETURN);
    await driver. sleep(1000);
    await driver.findElement(By.id("lastName")).sendKeys( lastName, Key.RETURN);
    await driver. sleep(1000);
    await driver.findElement(By.id("email")).sendKeys( email, Key.RETURN);
    await driver. sleep(1000);
    await driver.findElement(By.id("password")).sendKeys( pass, Key.RETURN);
    await driver. sleep(1000);
    await driver.findElement(By.id("confirm")).sendKeys( con, Key.RETURN);
    await driver. sleep(1000);
    await driver.findElement(By.id("signUp-btn")).click();
    await driver. sleep(2000);
    await driver.switchTo().alert().accept()

    await driver.findElement(By.id("login-redirect")).click();
    await driver. sleep(1000)

    await driver.findElement(By.id("emailId")).sendKeys( logemail, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("password")).sendKeys( logpass, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("SignIn-btn")).click();
    await driver. sleep(1000) 
    await driver.findElement(By.id("searchBar")).sendKeys( logsearch, Key.RETURN);
    await driver. sleep(2000)
  
  
  
    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log("Title is:", title);



    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
  }
  Registration()