# NYCDA Test Problems

The following problems should put concepts you've learned so far to the test.

### Getting started

* Run `npm install` to install node modules we need.
* Run `npm test` to make sure it all works. You should get something like:

```
> npm test

  -----------------------------------------------------------
  ✈⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅
  -----------------------------------------------------------

  0 passing (30ms)
  59 pending
  1 failing

  1) 01: Test Example | Should export a variable with the value 'testing':
     AssertionError: expected {} to equal 'hello'
      at Context.<anonymous> (tests/01-example.js:9:21)



npm ERR! Test failed.  See above for more details.
```

### Completing the challenges

Now that you can run the tests, it's time to fix them. Start by opening
`modules/01-example.js` and reading the instructions in there. Re-run `npm test`
when you think you've solved it. Once you've fixed a section of tests, the new
section of tests will get run. Keep solving challenges and moving on to the next
module until you've solved all 60 tests!
