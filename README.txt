install dependancies which already used,
    * npm install

localhost -> run sourcecode,
    * npm start

modules -> removeRecord.js
    * before you have to schedule the starting date of recurrence process of removing data.
    * for this, change parameters of "date" variable.
                var date = new Date(2020, 6, 18, 19, 16, 0);
                    2020 - year
                    6    - month
                    18   - date
                    19   - hour (0 - 23)
                    16   - minute(0 - 59)
                    0    - second(0 - 59)