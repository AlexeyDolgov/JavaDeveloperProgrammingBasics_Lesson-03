# JavaDeveloperProgrammingBasics_Lesson-03
Loops, switch operator

* [Завдання 1](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-03/blob/master/JavaDeveloperProgrammingBasics_Lesson-03/task3_1/task3_1.js)<br>
Яке останнє значення виведе цей код? Чому?

       let i = 3;
       while (i) {
	       console.log(i--);
       }

* [Завдання 2](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-03/blob/master/JavaDeveloperProgrammingBasics_Lesson-03/task3_2/task3_2.js)<br>
Для кожного циклу запишіть, які значення він виведе.

  - Префіксний варіант
  
         let i = 0;
         while (++i < 5)
  	       console.log(i);
  
  - Постфіксний варіант
  
         let j = 0;
         while (j++ < 5)
  	       console.log(j);
  
* [Завдання 3](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-03/blob/master/JavaDeveloperProgrammingBasics_Lesson-03/task3_3/task3_3.js)<br>
Для кожного циклу запишіть, які значення він виведе.

  - Постфіксний варіант
  
         for (let i = 0; i < 5; i++)
	         console.log(i);
 
  - Префіксний варіант
 
         for (let j = 0; j < 5; ++j)
	         console.log(j);
  
* [Завдання 4](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-03/blob/master/JavaDeveloperProgrammingBasics_Lesson-03/task3_4/task3_4.js)<br>
За допомогою циклу `for` виведіть парні числа від `2` до `10`.

* [Завдання 5](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-03/blob/master/JavaDeveloperProgrammingBasics_Lesson-03/task3_5/task3_5.js)<br>
Перепишіть код, замінивши цикл `for` на `while`, без зміни поведінки циклу.

       for (let i = 0; i < 3; i++) {
	       console.log("number " + i + "!");
       }

* [Завдання 6](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-03/blob/master/JavaDeveloperProgrammingBasics_Lesson-03/task3_6/task3_6.js)<br>
Напишіть `if...else`, що відповідає наступному `switch`:

       switch (browser) {
           case "IE": 
               console.log("Оу, то у Вас IE!");
               break;
           case "Chrome":
           case "Firefox":
           case "Safari":
           case "Opera":
               console.log("Так, ці браузери ми підтримуємо!");
               break;
           default:
               console.log("Ми сподіваємось, що у Вашому браузері все OK!");
       }

* [Завдання 7](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-03/blob/master/JavaDeveloperProgrammingBasics_Lesson-03/task3_7/task3_7.js)<br>
Перепишіть код з використанням однієї конструкції `switch`:

       let a = Math.floor(Math.random() * 4);
       
       if (a === 0) {
	       console.log(0);
       }
       
       if (a === 1) {
	       console.log(1);
       }
       
       if (a === 2 || a === 3) {
	       console.log("2,3");
       }
