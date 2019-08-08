QUnit.begin(function(details){
    alert("QUnit.begin- Test Suite Begins, Total Test: "+details.totalTests);
});

QUnit.done(function(details){
    alert("QUnit.done - Test Suite Finised, Total: "+details.total+", Failed: "+details.failed+",Passed: "+details.passed );
});

QUnit.moduleStart(function(details){
    alert("Unit.moduleStart - Module Begins "+details.name);
});

QUnit.moduleDone(function(details){
    alert("QUnit.moduleDone - Module Finished "+details.name+",Failed/total: "+details.failed+"/"+details.total);
});

QUnit.testStart(function(details){
    alert("QUnit.testStart - Test Begins "+details.module+" "+details.name);
});

QUnit.testDone(function(details){
    alert("QUnit.testDone - Test Finished "+details.module+" "+details.name+",Failed/Total: "+details.failed+"/"+details.total);
});

QUnit.module('Module1',{
    beforeEach: function(assert){
        assert.ok(true,"before test case");
    },
    afterEach: function(assert){
        assert.ok(true,"after test case");
    }
});

QUnit.test("test case 1",function(assert){
    let result = add(5,6);
    assert.equal(result,11,"Module1: test case 1 ok");
});

QUnit.test("test case 2",function(assert){
    let result = minus(5,6);
    assert.equal(result,-1,"Module1: test case 2 ok");
});

QUnit.module('Module2');

QUnit.test("test case 1",function(assert){
    let result = multiple(5,6);
    assert.equal(result,30,"Module2: test case 1 ok");
});

QUnit.skip("test case 2",function(assert){
    let result = divide(5,5);
    assert.equal(result,1,"Module2: test case 2 ok");
});

// QUnit.module('Async Call');

// QUnit.test("test case",function(assert){
//     assert.expect(2);
//     let done = assert.async(3);

//     setTimeout(function(){
//         let result = average(3,5,7);
//         assert.equal(result,5,"Average function working correctly");
//         done();
//     },2000);

//     setTimeout(function(){
//         let result = average(6,5,7);
//         assert.equal(result,6,"Average function working correctly: 2");
//         done();
//     },2000);

//     setTimeout(function(){
//         let result = average(9,5,7);
//         assert.equal(result,7,"Average function working correctly: 3");
//         done();
//     },2000);
// });

function add(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function multiple(a,b){
    return a*b;
}
function divide(a,b){
}

function average(a,b,c){
    return (a+b+c)/3;
}
