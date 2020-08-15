# Protect the Paywall

Protect the Paywall is a JavaScript algorithm that shows whether a paywall on a web page can be overridden.

## How does it work?

Many online newspaper sites have a set limit of articles you can read, and once the limit is reached, you encounter a paywall. In many sites, I noticed that the paywall is dynamically placed on the page, meaning it is not originally embedded in the source code of the article.

Therefore, it is possible to access the whole article if there is a way to get the source code of the page and place it over the site. And that's exactly what the script does: it gets the source code of the page and rewrites it over the website. 


## Which websites does it work on?

The script is tested to work on the following newspaper sites:

* Los Angeles Times
* The Atlantic
* The Economist
* The New York Times
* Scientific American

## The script in action

To demonstrate how the script works, I am pasting the code in Google Chrome console on the listed websites.

- ### Los Angeles Times:

![Alt Text](/gifs/la_times.gif)
---

- ### The Atlantic:

![Alt Text](/gifs/the_atlantic.gif)
---

- ### The Economist:

![Alt Text](/gifs/the_economist.gif)
---

- ### The New York Times:

![Alt Text](/gifs/ny_times.gif)
---

- ### Scientific American:

![Alt Text](/gifs/scientific_american.gif)

## What can be done to overcome this bug?

A potential solution to this problem can be achieved by embedding the paywall in the source code of the article. Instead of dynamically placing the paywall on the articles as an overlay to block the content, site engineers can put in place such a system that modifies the actual source code of the page upon checking the subscription of the user.

## What's next?
I have notified the site engineers of the listed websites about this potential bug. They will hopefully take an action to fix the issue.
