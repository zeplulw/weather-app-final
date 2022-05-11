Advanced Usage - Weather App
============================

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

Just a button, nothing special here.
