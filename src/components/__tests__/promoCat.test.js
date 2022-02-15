import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from 'redux-mock-store'
import PromoCat from '~/components/PromoCat'
import PromoItem from '~/components/PromoItem'
import Categories from '../../../public/data/categories.json'
import Content1 from '../../../public/data/content-1.json'


const mockStore = configureStore()
const initialState = {
  promotion: {
    promotions: Content1
  }
}

const store = mockStore(initialState)

describe('PromoCat', () => {
  test('test if promoCat renders', () => {
    const wrapper = shallow(
      <ReduxProvider store={store}>
        <PromoCat categories={Categories} />
      </ReduxProvider>
    )

    const component = wrapper.dive()

    expect(toJson(component)).toMatchSnapshot()
  })

  test('test if promoItem renders', () => {
    const wrapper = shallow(
      <PromoItem promotion={Content1[0]} />
    )

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
