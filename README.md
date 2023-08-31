# Munch
Website for Munch street bar in Warsaw, currently not yet online.

# Table of contents
* [Technology Used](#technology-used)
* [Landing Page](#landing-page)
* [Admin Panel](#admin-panel)
* [Aditional Information](#aditional-information)
* [Contact](#contact)
* [License](#license)

# Technology Used
* React library + typescript
* React-Router -> routing
* React-Admin -> admin panel
* i18next + i18nexus -> translation
* Axios -> fetching data
* auth0 -> user authentication
* framer-motion -> animations
* Jest + React Testing Library -> testing

# Landing Page
## Home Page
Home page has a flag in upper right corner whichc allows for language change.
![LandingPage](screenshots/landing.png)
The following section invites user to see the menu of the restaurant. It has 2 rows of manu item images that scroll infinitely i oposing directions.
![SeeMenuSection](screenshots/see-menu-section.png)
Another section displays 3 most recent events.
![NewsSection](screenshots/news-section.png)
Footer contains basic contact information with social links and navigation.
![Footer](screenshots/footer.png)

## Menu Page
The example shows food subpage of menu page. Other subpages like beverages, drinks and alcohol look the same beside other menu items.
![MenuTop](screenshots/menu-top.png)
The items in menu are split into sections based on their type.
![MenuItems](screenshots/menu-items-pl.png)

## Order Page
Currently ordering through website is disabled but will be available in the future
![OrderPage](screenshots/order.png)

## People Page
People page consists of a button opening a dialog with instructions how to aply to work for this restaurant, an image of the crew and short description of the restaurant.
![PeoplePage](screenshots/people-top.png)
![OrderPage](screenshots/people-bottm.png)
Job aplication dialog:
![JoinUsDialog](screenshots/join-us-dialog.png)

## Events Page
Events page has a 3 column grid of all events added by user.
![EventsPage](screenshots/events.png)
Every event has a hover animation that results in displaying short description of given event.
![EventHover](screenshots/event-hover.png)

### Event Page
Event page is a plece where you are redirected after clicking on chosen event. It contains all information about selected event.
![EventPageTop](screenshots/event-page-top.png)
![EventPageBottom](screenshots/event-page-bottom.png)

## Contact Page
Contact pege consists of all contact information for a restaurant.
![ContactPage](screenshots/contact.png)

# Admin Panel
Admin panel is secured using auth0 authorization.
## Food Page
Every food page (food, beverages, drinks, alcohol) looks the same so only one will be presented as an example.
![FoodPage](screenshots/food-list.png)
You can edit every item on the list using a form after clicking edit button. Adding new item has the same form so it will not be presented here.
![FoodEdit](screenshots/food-edit.png)
Food has categories which represent the section the belong to when displayed on the site. Categories have a priority which determines their place on the page.
![FoodCategories](screenshots/food-categories.png)

## Events Page
Events use rich text for their description allowing user to imput complex text with formatting.
![EventsList](screenshots/events-list.png)
Adding an event:
![EventsAdd](screenshots/events-add.png)

## Contact Page
Contact page consists of only one item that cannot be deleted.
![ContactList](screenshots/contact-list.png)
Editing contact informations:
![ContactEdit](screenshots/contact-edit.png)
Editing also allows to input social media links which are not displayed in the list element because thy take up too much space and dont give much information.
![ContactEditSocials](screenshots/contact-edit-socials.png)

## People Page
Editing the people infor allows to modify all the information displayed in the list so it will be omited here.
![PeopleList](screenshots/people-list.png)

# Aditional Information
## Status
Project is: __in the final step of development__

## Contact
Created by [@Jan Szewczyński](https://github.com/lulek1410).
Feel free to contact me!

## License
This repository is not intended for further distribution and comercial use.





