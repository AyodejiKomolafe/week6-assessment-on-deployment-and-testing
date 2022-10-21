import {renderPlayerDuo} from "./public/index.js"

import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Draw button displays the choices available", async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const availableChoices = await driver.findElement(By.id("choices"))
    drawBtn.click()
    const displayed = await availableChoices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})



test("add to duo button displays the players duo added", async () => {
    const title = await driver.findElement(By.id('title'))
    const titleDisplayed = await title.isDisplayed()
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(2000)
    const duoBtn = await driver.findElement(By.className("bot-btn"))
    const playerAdded = await driver.findElement(By.id("player-duo"))
    duoBtn.click()
    const playerDisplayed = await playerAdded.isDisplayed()
    expect(playerDisplayed).toBe(true)
    await driver.sleep(2000)
})
