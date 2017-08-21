window.Tester = function (assertions){

    let failures = 0;
    function start(){
        document.body.innerHTML = `
          <div id="title"></div>
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
    }
    function refute(message, value, data){
        assert(message, !value, data);
    }
    function assertEqual(message, a, b){
        assert(message, a === b, `Expected: ${a}. Got: ${b}.`)
    }
    start();
    assertions({
        assert: assert,
        refute: refute,
        assertEqual: assertEqual,
    });
    finish();
};
