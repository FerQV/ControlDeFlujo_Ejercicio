
//Parte uno
/* First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber. By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not. function businessHours(dayNumber, hourNumber) Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18). */

function businessHours(dayNumber, hourNumber) { //Se denomina la función y sus parámetros
    if ((dayNumber>=1) && (dayNumber<=5) && // establecer los días laborales (1=lunes, 5-viernes)
    (hourNumber>=9) && (hourNumber<=18) // establecer las horas laborales (si es mayor o igual a 9am, si es menor o igual a 18pm)
    ) { // recordar que && es la indicación de que ambos parámetros deben cumplirse.
        return true; // si ambos son verdaderos, me dará true: (3,11)= Ir un miércoles a las 11am, es en día hábil y hora laboral.
    } else {
        return false; //si un parámetro no coincide, nos dará false: (6,3)= Ir un sábado a las 3pm. No importa si la hora es labora, el día sábado NO es hábil.
    } //if
}//businessHours

 // Parte dos
 /* Now, create the function getDayNumber.It should accept two parameters: janFirstDayNumber and yearDayNumber.
The yearDayNumber will be an int ranging from 0 to 365.
janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.
Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.
Hint: use the remainder operator (%), dividing your yearDayNumber by 7.*/

 function getDayNumber (janFirstDayNumber, yearDayNumber) { //Se denomina la función y parámetros que nos pide
    return (yearDayNumber-1)%7; // Aquí, calcula y nos dice el día de la semana correspondiente al día de los 364 del año (contando 0).
  } //getDayNumber
  console.log(getDayNumber(0,10)); // damos indicación para que muestre en la consola el número de día que era en la semana (domingo=0, lunes=1... sábado=6)

  //Parte tres
  /*Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.*/
  
  function part3 (yearDayNumber, hourNumber){ // Se denomina la función y sus parámetros
    let day = getDayNumber(0, yearDayNumber); // Se establece la cantidad de días que se toman en cuenta (0-364)
    return businessHours(day, hourNumber); // Se establece el horario laboral y los días hábiles anteriormente establecidos.
  }
  console.log(part3(25,11))//Nos demuestra con true si el día del año y la hora son hábiles y false de ser lo contrario.