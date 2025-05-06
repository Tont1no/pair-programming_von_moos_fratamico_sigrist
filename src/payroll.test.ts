//abzug ahv, iv und eo?
//abuzg jeden monat nach dem ersten januar nah dem 17 geburtstag
//abuzg ALV und NBU abuzg jeden monat0 wen man jahres gehalt von 2.500 hat
//Pk abzug montatlich wen jahres gehalt über 22.680 hat

import { calculatePayslip, Salary, Payslip } from "./payroll";

test("16 jähriger Lernender mit einem Monatsgehalt von 700.-", ()=> {
    
    const salary: Salary = {
        born: new Date("2009-05-06"),
        payday: new Date("2025-05-25"),
        gross: 700
    }
})