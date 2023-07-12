# ControlDeFlujo Ejercicio
## Ejercicio dividido en 3 partes

### Part 1
#### First, build a function called ***"businessHours"***. Similar to the day of the week class exercise, this function should accept two parameters: ***dayNumber*** and ***hourNumber***. By reading the ***dayNumber*** and the ***hourNumber***, your program should print whether it is business hours or not. It should return ***true*** if it is business hours, and ***false*** if not.`function businessHours(dayNumber, hourNumber).` Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18)

### Part 2
#### Now, create the function ***getDayNumber***. It should accept two parameters: ***janFirstDayNumber*** and ***yearDayNumber***. The ***yearDayNumber*** will be an int ranging from 0 to 365. ***janFirstDayNumber*** will be an int ranging from 0 to 6, representing the day of the week of January 1st. Your function should then calculate and return the day of the week corresponding to the ***yearDayNumber*** passed. **Hint:** use the remainder operator (%), dividing your yearDayNumber by 7.

### Part 3
#### Finally, build a function that, from a ***yearDayNumber*** (int, 0-365) and an ***hourNumber*** (int, 0-23), returns true if it is business hours.
