import time
from selenium import webdriver

link = "https://docs.google.com/forms/d/e/1FAIpQLSf9EaaipHfz1xA7Uw2SOUFE-tnCcllF-4mF5YsdCAO0r3EslA/viewform"
data = {
    "Email": "",
    "Pass": "",
    "ID": "",
    "First": "Justin",
    "Last": "Downer",
    "Contact ": "N/A"
}
# Grabs the google driver

driver = webdriver.Chrome(executable_path=r'C:\Users\jusaj\Downloads\chromedriver.exe')
driver.get(link)

# Add a short delay
time.sleep(1)

# Signing In
email = driver.find_element_by_xpath('//*[@id="identifierId"]')
email.send_keys(data["Email"])
Next = driver.find_element_by_xpath('//*[@id="identifierNext"]/div/button')
Next.click()
# Delay to make sure loading is complete

time.sleep(3)

passwd = driver.find_element_by_xpath('//*[@id="password"]/div[1]/div/div[1]/input')
passwd.send_keys(data["Pass"])
Nextpass = driver.find_element_by_xpath('//*[@id="passwordNext"]/div/button')
Nextpass.click()

# Another Loading Delay for loading completion
time.sleep(3)

# Selecting Options / Answering Questions
Button = driver.find_elements_by_class_name('appsMaterialWizToggleRadiogroupOffRadio')
Button[1].click()
Button[5].click()
Button[13].click()

textboxes = driver.find_elements_by_class_name("quantumWizTextinputPaperinputInput")
textboxes[0].send_keys(data['ID'])
textboxes[1].send_keys(data['First'])
textboxes[2].send_keys(data['Last'])
textboxes[3].send_keys(data['Contact '])

# Submits it
submit = driver.find_element_by_xpath('//*[@id="mG61Hd"]/div[2]/div/div[3]/div[2]/div/div/span')
submit.click()

time.sleep(3)

driver.close()
