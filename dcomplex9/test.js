
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

async function test() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open Docker application
        await driver.get('http://localhost:8085');

        console.log("Application opened successfully");

        // Test Case 1
        await driver.findElement(By.id('num1')).sendKeys('10');
        await driver.findElement(By.id('num2')).sendKeys('20');

        await driver.findElement(By.id('addBtn')).click();

        let result = await driver.findElement(By.id('result')).getText();

        assert.strictEqual(result, '30');

        console.log("Test Case 1 Passed: 10 + 20 =", result);

        await driver.sleep(2000);

        // Test Case 2
        await driver.findElement(By.id('num1')).clear();
        await driver.findElement(By.id('num2')).clear();

        await driver.findElement(By.id('num1')).sendKeys('50');
        await driver.findElement(By.id('num2')).sendKeys('25');

        await driver.findElement(By.id('addBtn')).click();

        result = await driver.findElement(By.id('result')).getText();

        assert.strictEqual(result, '75');

        console.log("Test Case 2 Passed: 50 + 25 =", result);

        await driver.sleep(2000);

        // Test Case 3
        await driver.findElement(By.id('num1')).clear();
        await driver.findElement(By.id('num2')).clear();

        await driver.findElement(By.id('num1')).sendKeys('100');
        await driver.findElement(By.id('num2')).sendKeys('200');

        await driver.findElement(By.id('addBtn')).click();

        result = await driver.findElement(By.id('result')).getText();

        assert.strictEqual(result, '300');

        console.log("Test Case 3 Passed: 100 + 200 =", result);

        console.log("All Test Cases Passed!");

        await driver.sleep(5000);

    } catch (error) {
        console.log("Test Failed:", error);

    } finally {
        await driver.quit();
    }
}

test();
