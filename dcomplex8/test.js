const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');

async function test() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {
         await driver.get('file:///C:/Users/ravip/OneDrive/Desktop/dcomplex8/index.html');
        await driver.findElement(By.id('num1')).sendKeys('10');
        await driver.findElement(By.id('num2')).sendKeys('20');

        await driver.findElement(By.id('addBtn')).click();

        let result = await driver.findElement(By.id('result')).getText();

        assert.strictEqual(result, '30');

        console.log('Test Passed!');
        console.log('Addition Result:', result);

        await driver.sleep(3000);

    } catch (error) {
        console.log('Test Failed:', error);
        await driver.sleep(3000);
    } finally {
        await driver.quit();
    }
}

test();