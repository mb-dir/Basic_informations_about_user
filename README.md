# What can I get from you?

Simple application that aims to show how much information is in the browser/software designer can get from user.

## Motivation

I wanted to create project like that in order to realize about amount of informations which browser has "inside".

## What I use?

I use my own [webpack boilerplate](https://github.com/mb-dir/webpack_basic_template), git as a Version Control System and data from browser.

## Demo

Click [here](https://mb-dir.github.io/What_can_I_get_from_you/) to see the live demo.

## My comments

- I consciously use [battery status api](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API), I know it doesn't work in all browsers, despite this fact I want to the app shows information about battery in every browser where it is possible.
- I use [geocoding](https://developers.google.com/maps/documentation/geocoding/overview) - I want to this app shows to the user information like city name, so this api is perfect for it.
- The `City/district/voivodeship/country/post code` is not displayed corecllty - there is `Locating...` all the time. It is caused api key restrictions(Google asked me to change it) - for security reasons I set the restricnion on `IP address`(in console google cloud), so only request from my IP is "acceptable"
