QUnit.test('equal test', function (assert) {
    assert.equal(0, 0, 'Zero, Zero; equal succeeds');
    assert.equal('', 0, 'Empty, Zero; equal succeeds');
    assert.equal('', '', 'Empty, Empty; equal succeeds');
  
    assert.equal('three', 'three', 'Three, 3; equal fails');
    assert.equal(null, null, 'null, false; equal fails');
});

QUnit.test('example', function (assert) {
    assert.expect(0);
  
    var android = new Robot(database);
    android.run();
  
    database.assertNoOpenConnections();
});

QUnit.test('passing example', assert => {
    const result = { foo: 'bar' };
  
    assert.deepEqual(result, { foo: 'bar' });
});

QUnit.test('passing example', assert => {
    const result = '2';
  
    // succeeds, 1 and 2 are different.
    assert.notEqual(result, 1);
});

QUnit.test('example', assert => {
    // success
    assert.true(true, 'boolean true');
  
    // failure
    assert.true('foo', 'non-empty string');
    assert.true('', 'empty string');
    assert.true(0, 'number zero');
    assert.true(false, 'boolean false');
    assert.true(NaN, 'NaN value');
    assert.true(null, 'null value');
    assert.true(undefined, 'undefined value');
  });