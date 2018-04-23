// JavaScript source code
module.exports =
{

    //triangle

    triangle: function (rows) {

    //Checks for blank, non number and non zero input

    if (rows === undefined || typeof rows != "number" || rows == 0) {

        throw "number lines entered is not a number or is zero "


    }

    //Checks for integer input

    if ((rows % 1 != 0)) {

        throw "number of lines entered should be an integer"

    }

    

        // rowise printing

    for (i = 1; i <= rows; i++) {
        // for space before each rows

        let str = ""
        for (space = 1; space <= rows - i; space++) {
            str = str + " ";

        }

        // for printing first row

        if (i == 1) {

            str = str + "/\\";
            console.log(str);

        }
        else {

            //for printing final row

            if (i == rows) {
                str = str + "/";
                for (space = 1; space <= ((i - 1) * 2); space++) {
                    str = str + "-";
                    if (space == ((i - 1) * 2)) {

                        str = str + "\\"
                        console.log(str)

                    }

                }



            }

            // for printing other rows

            else {
                str = str + "/";
                for (space = 1; space <= ((i - 1) * 2); space++) {
                    str = str + " ";
                    if (space == ((i - 1) * 2)) {

                        str = str + "\\"
                        console.log(str)

                    }

                }
            }

        }

    }
 },
    
    //square
    square: function  (rows) {

        //Checks for blank and non number input

        if (rows === undefined || typeof rows != "number") {

            throw "number of lines entered is not a number "


        }

        //Checks for integer and more than 1 input


        if ((rows % 1 != 0) || rows < 2) {

            throw "number of lines entered should be an integer and more than 1"

        }

        for (i = 1; i <= rows; i++) {

            let str = ""
            /*for (space = 1; space <= rows - i; space++) {
                str = str + " ";
        
            }*/

            if (i == rows || i == 1) {
                str = str + "|";
                for (space = 1; space <= rows; space++) {
                    str = str + "-";
                    if (space == rows) {

                        str = str + "|"
                        console.log(str)

                    }

                }



            }

            else {
                str = str + "|";
                for (space = 1; space <= rows; space++) {
                    str = str + " ";
                    if (space == rows) {

                        str = str + "|"
                        console.log(str)

                    }

                }
            }



        }
    },

    //rhombus
    rhombus:function (rows) {
        const num = (rows / 2);
        let j = 0

        //Checks for blank, non number and less than 2 input


        if (rows === undefined || typeof rows != "number" || rows < 2) {

            throw " number of lines entered is not a number "


        }

        //Checks for integer and even number input


        if ((rows % 1 != 0) || (rows % 2 !=0)) {

            throw "number of lines entered should be an integer and even"

        }


        for (i = 1; i <= rows; i++) {

            let str = ""
            if (i <= (rows / 2)) {
                for (space = 1; space <= ((num - i)); space++) {
                    str = str + " ";

                }
            }
            else {
                for (space = 1; space <= (i - (num + 1)); space++) {
                    str = str + " ";

                }

            }
            if (i == 1) {

                str = str + "/-\\";
                console.log(str);

            }
            else {

                if (i == rows) {

                    str = str + "\\-/";

                    console.log(str);

                }


                else {


                    if (i <= num) {

                        str = str + "/";
                        for (space = 1; space <= (((i - 1) * 2) + 1); space++) {
                            str = str + " ";
                            if (space == (((i - 1) * 2) + 1)) {

                                str = str + "\\";
                                console.log(str);
                                //console.log(i);
                                j = space;

                            }
                        }

                    }
                    else {

                        str = str + "\\";
                        for (space = 1; space <= j; space++) {
                            str = str + " ";
                            if (space == j) {

                                str = str + "/";
                                console.log(str);
                                //console.log(i);
                                j = j - 2;

                            }


                        }

                    }


                }




            }




        }
    }

}
