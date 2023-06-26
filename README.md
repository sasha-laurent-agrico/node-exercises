# Node exercises

This is a skeleton project for Nodejs exercises

## Goal

The goal of this project is to create a simple CRUD API for the following business spec :

> We want to create an API providing the best path for a metro trip.

### Data input example :

| departure station | departure wait time | departure trip time | departure line | change station | change wait time | change trip time | change line | arrival station |
|:-----------------:|:-------------------:|:-------------------:|:--------------:|:--------------:|:----------------:|:----------------:|:-----------:|:---------------:|
|   saint lazare    |        1min         |        3min         |       3        |    villiers    |       1min       |      10min       |      2      |     nation      |
|   saint lazare    |        1min         |        9min         |       13       |  montparnasse  |       4min       |      12min       |      6      |     nation      |
|   saint lazare    |        11min        |        16min        |       9        |                |                  |                  |             |     nation      |

### User input example :

|  preference   | start in |
|:-------------:|:--------:|
|    fastest    |  10min   |
|    fastest    |   1min   |
| least changes |   1min   |

### Output example :

For User input #2, the output would be :

| departure station | departure wait time | departure trip time | departure line | change station | change wait time | change trip time | change line | arrival station |
|:-----------------:|:-------------------:|:-------------------:|:--------------:|:--------------:|:----------------:|:----------------:|:-----------:|:---------------:|
|   saint lazare    |        1min         |        3min         |       3        |    villiers    |       1min       |      10min       |      2      |     nation      |

For User input #3, the output would be :

| departure station | departure wait time | departure trip time | departure line | change station | change wait time | change trip time | change line | arrival station |
|:-----------------:|:-------------------:|:-------------------:|:--------------:|:--------------:|:----------------:|:----------------:|:-----------:|:---------------:|
|   saint lazare    |        11min        |        16min        |       9        |                |                  |                  |             |     nation      |
