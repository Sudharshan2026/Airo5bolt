from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://localhost:8080/results")

    # Wait for the main content to be visible, give it up to 10 seconds
    main_content = page.locator("body")
    expect(main_content).to_be_visible(timeout=10000)

    # Additional wait to ensure all animations have settled
    page.wait_for_timeout(3000)

    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
