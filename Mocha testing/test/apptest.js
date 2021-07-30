const assert=require('chai').assert;
const app=require('../app');
const calc=require('../calculate')
describe('App',function(){
    it('hello should return hello',function(){
        let actual=app();
        assert.equal(actual,'hello');
    })
    it('hello should return hello',function(){
        let actual=calc.add(2,3);
        assert.equal(actual,5);
    })
    it('hello should return hello',function(){
        let actual=calc.mul(2,5);
        assert.equal(actual,10);
    })
})