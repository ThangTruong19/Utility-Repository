describe('Calculator test case', function () {

    describe('Init Value', function () {
        // Test case 1
        it('Should retain the current value of all time', function () {
            let cal = new Calculator();
            expect(cal.currentVal).toBeDefined();
            expect(cal.currentVal).toEqual(0);
        })
    });
    describe('Add Single number', function () {
        // Test case 2
        it('Should add number', function () {
            let cal = new Calculator();
            expect(cal.add(10)).toEqual(10);
            expect(cal.add(10)).toEqual(20);
        })
    });
    describe('Add multiple number', function () {
        // Test case 3
        it('Should add any number', function () {
            let cal = new Calculator();
            expect(cal.addAny(1, 2, 3)).toEqual(6);
            expect(cal.addAny(1, 2, 3)).toEqual(12);
        })
    });

});