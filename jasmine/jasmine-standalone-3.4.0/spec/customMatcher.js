describe('Custome Matcher',function(){
    beforeEach(function(){
        jasmine.addMatchers({
            validScore: function(){
                return{
                    compare: function(actual,expected){
                        let result = {};
                        console.log("Actual: "+actual);
                        result.pass = (actual >=0 && actual <=10);
                        result.message = "Sorry this is invalid score";
                        console.log("Result Valid: "+result.valid+",Result message: "+result.message);
                        return result;
                    }
                };
            }
        });
    });
    // Test case 1
    it('Test case 1',function(){
        expect(8).validScore();
        expect(10).validScore();
    })
    // Test case 2
    xit('Test case 2',function(){
        let num = 12;
        expect(num).validScore();
    })
})