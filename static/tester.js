CFC = window;
CFC.Tester = function (assertionsCallback){

    var failures = 0;
    var errorOccurred = false;
    function start(){
        document.body.innerHTML = `
          <div id="title">encountered an error, check console</div>
          <hr/>
          <div id="results"></div>
        `;
        document.body.classList.add('working');
    }
    function finish(){
        const title = document.getElementById('title');
        document.body.classList.remove('working');
        if (errorOccurred) {
            title.innerHTML = "ERROR";
            title.classList.add('error');
        } else if (failures == 0){
            title.innerHTML = "ALL TESTS PASS";
            title.classList.add('success');
        } else {
            title.innerHTML = `TEST FAILURES: ${failures}`;
            title.classList.add('failure');
        }
    }
    function printResult(passed, message, data){
        const prettyPassed = passed ? "PASSED" : "FAILED";
        var debug = "";
        if (!passed){
            failures += 1;
            if (data){
                console.log(message);
                console.log(data);
                debug = `<pre class="debug">${data}</pre>`;
            }
        }
        document.getElementById('results').innerHTML += `
            <div class="test ${passed}">
                <b>${prettyPassed}</b> ${message}
                ${debug}
            </div>
        `;
    }
    function assert(message, value, data){
        const passed = Boolean(value);
        printResult(passed, message, data);
        return value;
    }
    function refute(message, value, data){
        return assert(message, !value, data);
    }
    function assertEqual(message, a, b){
        return assert(message, a === b, `Expected: ${a}. Got: ${b}.`)
    }
    function assertCollectionEqual(message, a, b){
        // https://stackoverflow.com/a/16436975/6461842
        function arraysEqual(a, b) {
          if (a === b) return true;
          if (a == null || b == null) return false;
          if (a.length != b.length) return false;
          for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
          }
          return true;
        }
        return assert(message, arraysEqual(a, b), `Expected: ${a}. Got: ${b}.`)
    }

    CFC.IsTest = true;
    document.addEventListener("DOMContentLoaded", function() {
        start();
        try {
            assertionsCallback({
                assert: assert,
                refute: refute,
                assertEqual: assertEqual,
                assertCollectionEqual: assertCollectionEqual,
            });
        }
        catch (e) {
            printResult(false, 'There was an error. See console for more details.', e);
            errorOccurred = true;
        }
        finally {
            finish();
            CFC.IsTest = false;
        }
    });
};
