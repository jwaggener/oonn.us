describe('class', function() {
  
  var extend;
  
  beforeEach(function() {
    extend = window.extend;
  });
  
  it( "the method extend should be present", function(){
    var BaseClass, SuperClass;
    var base, s;
    BaseClass = function(){ this.a = "a value" };
    BaseClass.extend = extend;
    SuperClass = BaseClass.extend();
    base = new BaseClass();
    s = new SuperClass();
    expect(BaseClass.extend).toBeDefined();
    expect(base.a).toBeDefined();
    expect(SuperClass.extend).toBeDefined();
    expect(s.a).toBeDefined();
    /*need tests for constructor functions*/
  });
  
});