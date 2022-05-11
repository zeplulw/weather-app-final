Weather App Usage
=================

Table of Contents
-----------------
[Installation](#installation)

[Main Input Box](#main-input-box)

["Show Weather Data" Button](#show-weather-data-button)


Installation
------------

1. Follow [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and download the pre-build installer best matched for your system.
2. Follow the installation instructions that open when you click on the `.msi` that was just downloaded.
3. Download the source of this project by clicking the "Code" dropdown and clicking "Download ZIP"
4. Extract the zip.
5. Use your CLI of choice to navigate to the folder where you extracted the ZIP.
6. Run the command below to automatically install the required packages.

```
npm install
```

### Alternate Install

1. Follow this link to clone this GitHub repo to a repl: ![](https://replit.com/badge/github/zeplulw/weather-app-final)
2. Once the repl is finished cloning, go to the section in the top right and configure it to look like the image below.
![](https://i.ibb.co/MDh91S3/image.png)
3. Click done and then click the big green Run button. You're done!


Main Input Box
--------------

![](https://i.ibb.co/0rCDLgW/image.png)

It isn't required for the input to be a zipcode, contrary to the placeholder text.

### Types of entry

| Entry Type | Example | Description |
|---|---|---|
| Latitude & Longitude | `48.8567,2.3508` | Gets the weather for the inputted latitude and longitude. |
| City Name | `London` | Gets the weather for the inputted city name. |
| US Zip Code | `10001` | Gets the weather for the inputted United States. |
| UK Postcode | `SW1` | Gets the weather for the inputted United Kingdom postcode. |
| Canada Postal Code | `G2J` | Gets the weather for the inputted Canadian postal code. |
| Metar Code | `EGLL` | Gets the weather for the inputted Metar code. |
| IATA Code | `JFK` | Gets the weather for the inputted IATA code. Useful for planning ahead on a trip |
| IP Address | `127.0.0.1` | Gets the weather for the inputted IP. Obviously doesn't work on localhost IPs. |
| Auto <span style="color:red;">(BROKEN)</span> | `auto:ip` | Attempts to get the IP of the user and submit that as an `IP Address` query.<br>(Listed as broken because it gets the server IP instead of the user's.) |


"Show Weather Data" Button
--------------------------

![](https://i.ibb.co/JKR72jr/image.png)

Just a button, nothing special here. Queries the Weather API to get recent weather data for the location given in the [main input box](#main-input-box)
