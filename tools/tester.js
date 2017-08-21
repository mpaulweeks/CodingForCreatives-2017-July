window.Tester = function (assertions){

    let failures = 0;
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
        if(failures == 0){
            title.innerHTML = "ALL TESTS PASS";
            title.classList.add('success');
        } else {
            title.innerHTML = `TEST FAILURES: ${failures}`;
            title.classList.add('failure');
        }
    }
    function assert(message, value, data){
        const passed = Boolean(value);
        const prettyPassed = passed ? "PASSED" : "FAILED";
        let debug = "";
        if (!passed){
            failures += 1;
            if (data){
                console.log(message, data);
                debug = `<pre class="debug">${data}</pre>`;
            }
        }
        document.getElementById('results').innerHTML += `
            <div class="test ${passed}">
                <b>${prettyPassed}</b> ${message}
                ${debug}
            </div>
        `;
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
    start();
    assertions({
        assert: assert,
        refute: refute,
        assertEqual: assertEqual,
        assertCollectionEqual: assertCollectionEqual,
    });
    finish();
};
