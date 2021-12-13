const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function Login() {
    var email = "abdulziyan07@gmail.com";
    var pass = "@ziyan1234"
    var search = "S"
  
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
  
    //To fetch http://google.com from the browser with our code.
    await driver.get("http://localhost:3000/login");
  
    //To send a search query by passing the value in searchString.
    await driver.findElement(By.id("emailId")).sendKeys( email, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("password")).sendKeys( pass, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("SignIn-btn")).click();
    await driver. sleep(1000) 
    
    await driver.findElement(By.id("searchBar")).sendKeys( search, Key.RETURN);
    await driver. sleep(2000)

    
  
    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log("Title is:", title);
    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
  }
  Login()