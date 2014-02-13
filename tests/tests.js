var assert = chai.assert;

suite('csv', function() {
    test('Las tablas se crean correctamente_1', function () {
        original.value = 'a,"b, c",d,e\nf,g,h,i';
        calculate();
        var expected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>a</td>\n            \n              <td>b, c</td>\n            \n              <td>d</td>\n            \n              <td>e</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>f</td>\n            \n              <td>g</td>\n            \n              <td>h</td>\n            \n              <td>i</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ';
        assert.deepEqual(finaltable.innerHTML, expected);
    });
    test('Las tablas se crean correctamente_2', function () {
        original.value = "a,b c,c,d\ne\\\"_,f,g,h\ni,j,k,l,l";
        calculate();
        var expected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>a</td>\n            \n              <td>b c</td>\n            \n              <td>c</td>\n            \n              <td>d</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>e\"_</td>\n            \n              <td>f</td>\n            \n              <td>g</td>\n            \n              <td>h</td>\n            \n          </tr>\n        \n          <tr class="error">\n            \n              <td>i</td>\n            \n              <td>j</td>\n            \n              <td>k</td>\n            \n              <td>l</td>\n            \n              <td>l</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ';
        assert.deepEqual(finaltable.innerHTML, expected);
    });
    test('Funciona el almacenamiento local', function () {
        assert.deepEqual(localStorage.original, "a,b c,c,d\ne\\\"_,f,g,h\ni,j,k,l,l");
    });
	test('Entrada erronea', function() {
        original.value = '"producto", "precio" \n "camisa", "4,3", 44';
        calculate();
        assert.match(finaltable.innerHTML, /class="error"/);
    });
	test('Entrada erronea', function() {
        original.value = '"producto", "precio" \n "camisa", "4,3", 44';
        calculate();
        assert.match(finaltable.innerHTML, /class="error"/);
    });
});
