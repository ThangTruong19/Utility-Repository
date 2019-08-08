QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
QUnit.test( "Một với một là hai", function( assert ) {
  var cal = new Calculator();
  assert.ok( cal.add(1,1), "2" );
  assert.equal( cal.add(1,1), "2", "add test ok");
});