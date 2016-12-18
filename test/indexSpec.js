var chai = require('chai');
var expect = require('chai').expect;
var word = require('../index');

describe('Sanitize', function(){
    it('returns lowercase of a string', function(){
        var inputWord = 'hello world';
        var outputWord = word.sanitize(inputWord);
        expect(outputWord).to.equal('hello world');
        expect(outputWord).to.not.equal('HELLO WORLD');
        expect(outputWord).to.be.a('string');
        expect(outputWord).to.not.be.a('number');
        expect(outputWord).to.contain('hello');
    });
    it('remove any hyphen', function(){
        var inputWord = 'hello-world';
        var outputWord = word.sanitize(inputWord);
        
        expect(outputWord).to.equal('hello world');
    })
})

describe('Tokenize', function(){
    it('returns an array of words', function(){
        var sentence = 'hello world';
        var tokenizedSentence = word.tokenize(sentence);
        
        expect(tokenizedSentence).to.include.members(['hello', 'world']);
    })
})

describe('Github info', function() {
    it('returns repo info from github', function(done){
        word.info(function(reply){
            expect(reply.language).to.equal('HTML');
            expect(reply.watchers).to.equal(281);
            done();
        })
        
    })
})