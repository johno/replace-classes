import test from 'ava'
import replaceClasses from './'

test('replace-classes does something awesome', t => {
  t.plan(1)

  t.same(replaceClasses('<a href="#!" class="btn btn-default">Hello!</a>', {
      btn: 'b br2',
      'btn-default': 'b--light-gray bg-white'
    }),
    '<a href="#!" class="b br2 b--light-gray bg-white">Hello!</a>'
  )
})
